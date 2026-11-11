'use strict';
const root = document.getElementById('calibration-curve');
const get = id => document.getElementById(`curve-${id}`);
const chart = get('chart');
const ctx = chart.getContext('2d');
const format = value => {
  if (value === 0) return '0';
  return Number(value.toPrecision(8)).toString();
};
let reportRows = [];

function fitStandards(points) {
  if (points.length < 3 || new Set(points.map(p=>p.x)).size < 3) {
    throw new Error('Enter standards at three or more distinct concentrations.');
  }
  const n = points.length;
  const meanX = points.reduce((sum,p)=>sum+p.x/n,0);
  const meanY = points.reduce((sum,p)=>sum+p.y/n,0);
  let xx=0, yy=0, xy=0;
  for (const {x,y} of points) {
    const dx=x-meanX, dy=y-meanY;
    xx+=dx*dx;
    yy+=dy*dy;
    xy+=dx*dy;
  }
  const slope=xy/xx;
  const intercept=meanY-slope*meanX;
  const correlation=(xy/Math.sqrt(xx))/Math.sqrt(yy);
  const r2=Math.min(1,correlation**2);
  if (!slope || ![slope,intercept,r2].every(Number.isFinite)) {
    throw new Error('These standards do not produce a usable nonzero slope. Check the concentrations and readings.');
  }
  return {slope,intercept,r2,meanX,meanY,
    xMin:Math.min(...points.map(p=>p.x)),xMax:Math.max(...points.map(p=>p.x)),
    yMin:Math.min(...points.map(p=>p.y)),yMax:Math.max(...points.map(p=>p.y))};
}
function sampleResult(response, dilution, fit) {
  const measured=fit.meanX+(response-fit.meanY)/fit.slope;
  const final=measured*dilution;
  if (![measured,final].every(Number.isFinite)) return {status:'Result outside numeric range'};
  const flags=[];
  const xtol=1e-12*Math.max(Math.abs(fit.xMin),Math.abs(fit.xMax),fit.xMax-fit.xMin);
  if (response<fit.yMin || response>fit.yMax || measured<fit.xMin-xtol || measured>fit.xMax+xtol) {
    flags.push('Outside calibration range');
  }
  if (measured < 0) flags.push('Negative estimate');
  return {measured,final,status:flags.join(' / ') || 'Within range'};
}
function makeInput(label,type='number',value='') {
  const input=document.createElement('input');
  input.type=type;
  input.value=value;
  input.setAttribute('aria-label',label);
  if (type==='number') input.step='any';
  else input.maxLength=80;
  return input;
}
function addRow(kind,values=[],focus=false) {
  const table=get(kind);
  if (table.rows.length>=500) return;
  const row=table.insertRow();
  const specs=kind==='standards' ? [['Standard concentration'],['Standard reading']] :
    [['Sample ID','text'],['Sample reading'],['Dilution factor','number','1']];
  specs.forEach(([label,type,initial],index)=>{
    row.insertCell().append(makeInput(label,type,values[index]??initial));
  });
  if (kind==='samples') {
    for (let i=0;i<3;i++) row.insertCell().textContent='—';
  }
  const remove=document.createElement('button');
  remove.type='button';
  remove.textContent='×';
  remove.setAttribute('aria-label',kind==='samples'?'Remove sample row':'Remove standard row');
  remove.addEventListener('click',()=>{
    row.remove();
    get(`add-${kind}`).focus();
    render();
  });
  row.insertCell().append(remove);
  if (focus) row.querySelector('input').focus();
}
function readStandards() {
  const points=[];
  Array.from(get('standards').rows).forEach((row,index)=>{
    const [x,y]=row.querySelectorAll('input');
    if (!x.value && !y.value && !x.validity.badInput && !y.validity.badInput) return;
    if (!Number.isFinite(x.valueAsNumber) || x.valueAsNumber<0 || !Number.isFinite(y.valueAsNumber)) {
      throw new Error(`Standard row ${index+1} needs a nonnegative concentration and a numeric reading.`);
    }
    points.push({x:x.valueAsNumber,y:y.valueAsNumber});
  });
  return points;
}
function draw(points,fit,unit,response) {
  if (!ctx) return;
  const width=chart.width,height=chart.height;
  const l=93,r=width-24,t=25,b=height-60;
  ctx.clearRect(0,0,width,height);
  const predict=x=>fit.meanY+fit.slope*(x-fit.meanX);
  const yMin=Math.min(fit.yMin,predict(fit.xMin),predict(fit.xMax));
  const yMax=Math.max(fit.yMax,predict(fit.xMin),predict(fit.xMax));
  const ySpan=yMax-yMin;
  const xMap=x=>l+((x-fit.xMin)/(fit.xMax-fit.xMin))*(r-l-14)+7;
  const yMap=y=>b-((y-yMin)/ySpan)*(b-t-14)-7;
  const label=n=>Number(n.toPrecision(5)).toString();
  ctx.font='14px system-ui';
  ctx.fillStyle='#38574a';
  for(let i=0;i<=4;i++) {
    const xv=fit.xMin+(fit.xMax-fit.xMin)*i/4,yv=yMin+ySpan*i/4;
    const x=xMap(xv),y=yMap(yv);
    ctx.strokeStyle='#dce7de';
    ctx.beginPath();
    ctx.moveTo(x,t);ctx.lineTo(x,b);
    ctx.moveTo(l,y);ctx.lineTo(r,y);
    ctx.stroke();
    ctx.textAlign='center';ctx.fillText(label(xv),x,b+20);
    ctx.textAlign='right';ctx.fillText(label(yv),l-8,y+5);
  }
  ctx.strokeStyle='#5d786a';
  ctx.beginPath();ctx.moveTo(l,t);ctx.lineTo(l,b);ctx.lineTo(r,b);ctx.stroke();
  ctx.textAlign='center';
  ctx.fillText(`Concentration (${unit})`,(l+r)/2,height-10,r-l);
  ctx.save();ctx.translate(19,(t+b)/2);ctx.rotate(-Math.PI/2);ctx.fillText(response,0,0,b-t);ctx.restore();
  ctx.strokeStyle='#2b7253';ctx.lineWidth=2;
  ctx.beginPath();ctx.moveTo(xMap(fit.xMin),yMap(predict(fit.xMin)));ctx.lineTo(xMap(fit.xMax),yMap(predict(fit.xMax)));ctx.stroke();
  ctx.lineWidth=1;ctx.fillStyle='#164434';
  for (const p of points) {ctx.beginPath();ctx.arc(xMap(p.x),yMap(p.y),4.5,0,2*Math.PI);ctx.fill();}
}
function render() {
  let points=[],fit=null;
  try {
    points=readStandards();
    fit=fitStandards(points);
    get('status').textContent=`Fit uses ${points.length} standard readings. Check the fit and acceptance criteria in your method.`;
  } catch (error) {
    get('status').textContent=error.message;
  }
  const method=get('method').value.trim();
  const unit=get('unit').value.trim()||'concentration units';
  const response=get('response').value.trim()||'Instrument reading';
  const header=['Record type','Method or analyte','Concentration unit','Response label','ID','Standard concentration','Reading','Dilution factor','Concentration in measured solution','Final concentration','Status','Slope','Intercept','R squared'];
  reportRows=[header];
  get('model').hidden=!fit;
  if (fit) {
    const {slope,intercept,r2}=fit;
    get('equation').textContent=`y = ${format(slope)}x ${intercept<0?'−':'+'} ${format(Math.abs(intercept))}`;
    get('slope').textContent=format(slope);
    get('intercept').textContent=format(intercept);
    get('r2').textContent=format(r2);
    draw(points,fit,unit,response);
    points.forEach((p,i)=>reportRows.push(['Standard',method,unit,response,`Standard ${i+1}`,p.x,p.y,'','','','Used in fit',slope,intercept,r2]));
  }
  for (const [index,row] of Array.from(get('samples').rows).entries()) {
    const [id,y,d]=row.querySelectorAll('input');
    const filled=id.value.trim() || y.value || y.validity.badInput || d.validity.badInput || d.value!=='1';
    let result={status:'—'};
    if (filled) {
      if (!Number.isFinite(y.valueAsNumber) || !Number.isFinite(d.valueAsNumber) || d.valueAsNumber<1) {
        result={status:'Enter a reading and dilution factor ≥ 1'};
      } else if (!fit) result={status:'Calibration required'};
      else result=sampleResult(y.valueAsNumber,d.valueAsNumber,fit);
      if (fit) reportRows.push(['Sample',method,unit,response,id.value.trim()||`Sample ${index+1}`,'',
        Number.isFinite(y.valueAsNumber)?y.valueAsNumber:'',Number.isFinite(d.valueAsNumber)?d.valueAsNumber:'',
        result.measured??'',result.final??'',result.status,fit.slope,fit.intercept,fit.r2]);
    }
    row.cells[3].textContent=result.measured===undefined?'—':format(result.measured);
    row.cells[4].textContent=result.final===undefined?'—':format(result.final);
    row.cells[5].textContent=result.status;
    row.cells[5].classList.toggle('curve-flag',result.status!=='Within range'&&result.status!=='—');
  }
  get('sample-basis').textContent=`Concentrations in ${unit}. Final concentration = concentration in measured solution × dilution factor.`;
  get('download').disabled=!fit || !reportRows.some(row=>row[0]==='Sample' && typeof row[9]==='number');
  for(const kind of ['standards','samples']) get(`add-${kind}`).disabled=get(kind).rows.length>=500;
}
function exportCSV() {
  const cell=value=>{
    let raw=String(value);
    if (typeof value==='string' && /^[\s]*[=+\-@]/.test(raw)) raw="'"+raw;
    return `"${raw.replaceAll('"','""')}"`;
  };
  const data=reportRows.map(row=>row.map(cell).join(',')).join('\r\n')+'\r\n';
  const link=document.createElement('a');
  link.href=URL.createObjectURL(new Blob(['\uFEFF',data],{type:'text/csv;charset=utf-8'}));
  link.download='terrawise-calibration-results.csv';
  document.body.append(link);
  link.click();
  link.remove();
  setTimeout(()=>URL.revokeObjectURL(link.href),2000);
}
root.addEventListener('input',render);
for (const kind of ['standards','samples']) get(`add-${kind}`).addEventListener('click',()=>{addRow(kind,[],true);render();});
get('example').addEventListener('click',()=>{
  const hasWork=[...root.querySelectorAll('input')].some(input=>input.validity.badInput || (input.value &&
    (input.getAttribute('aria-label')!=='Dilution factor' || input.value!=='1')));
  if (hasWork &&
      !window.confirm('Replace the current calibration and sample rows with example data?')) return;
  get('method').value='Phosphate colorimetry · synthetic example';
  get('unit').value='mg/L as P';
  get('response').value='Absorbance';
  get('standards').replaceChildren();
  get('samples').replaceChildren();
  [[0,.02],[2,.18],[4,.34],[6,.50],[8,.66]].forEach(values=>addRow('standards',values));
  [['Sample A',.42,4],['Sample B',.26,1],['Sample C',.82,2]].forEach(values=>addRow('samples',values));
  render();
});
get('download').addEventListener('click',exportCSV);
for(let i=0;i<4;i++) addRow('standards');
for(let i=0;i<3;i++) addRow('samples');
render();
