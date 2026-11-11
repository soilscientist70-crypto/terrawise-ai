'use strict';
const presets = {
  'FAO field screening': [methods.filter(row=>row[4]==='soilDoctors').map(row=>row[0]), 'These entries summarize preliminary FAO field and training techniques. Page numbers refer to the printed FAO manual. Confirm results with a suitable laboratory method when the decision requires quantitative or accredited results.'],
  'Building soil screen': [['engineering-moisture','sieve','washed-fines','atterberg','uscs'], 'For initial engineering soil characterization. Ask the project engineer to specify field sampling and select any strength or settlement tests required for design.'],
  'Calcareous soil fertility': [['soil-ph','soil-ece','olsen-p','dtpa','carbonates','soil-n'], 'Use method-specific local crop calibration. Select additional nutrient tests according to the crop and management question.'],
  'Soil biology baseline': [['respiration','biomass','enzyme','n-min'], 'Agree on collection and storage before sampling. Incubation results are comparable only when the conditions and reporting basis match.'],
  'Crop tissue nutrition': [['plant-n','plant-icp','plant-nitrate'], 'Record species, tissue part and growth stage. Interpret using a matching reference range.'],
  'Irrigation water screen': [['water-ph','water-ec','water-ions','water-metals','sar'], 'Confirm that the analytical scope includes sodium, calcium and magnesium for SAR. Interpret EC and SAR together in the intended soil and crop context.']
};
const entries = methods.map(([id,category,title,method,source,sample,equipment,output,principle,qa,limits]) => ({
  id,category,title,method,source,sample,equipment,output,principle,qa,limits
}));
const $ = id => document.getElementById(id);
const escape = x => String(x).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'})[c]);
const normalize = text => text.toLowerCase().normalize('NFKD').replace(/\p{M}/gu,'').replace(/[–—−]/g,'-');
const searchable = new Map(entries.map(e=>[e.id, normalize([...Object.values(e),...sources[e.source]].join(' '))]));
const cats = ['All methods',...new Set(entries.map(e=>e.category))];
const known = new Set(entries.map(e=>e.id));
const storage = 'terrawise.lab-manual.shortlist.v1';
const open = new Set();
let activeCategory = cats[0], preset = '', shortlistOnly = false, saved = new Set();
try {
  const prior = JSON.parse(localStorage.getItem(storage) ?? '[]');
  if (Array.isArray(prior)) saved = new Set(prior.filter(id=>known.has(id)));
} catch {}
function getVisible() {
  const query = normalize($('query').value).trim().split(/\s+/).filter(Boolean);
  return entries.filter(e =>
    (!shortlistOnly || saved.has(e.id)) &&
    (activeCategory===cats[0] || e.category===activeCategory) &&
    (!preset || presets[preset][0].includes(e.id)) &&
    query.every(term=>searchable.get(e.id).includes(term))
  );
}
function card(e) {
  const [publisher,url,access] = sources[e.source];
  const steps = fieldProtocols[e.id];
  const protocol = steps ? `<section class="protocol" aria-label="Protocol at a glance"><h4>Protocol at a glance</h4><ol>${steps.map(step=>`<li>${escape(step)}</li>`).join('')}</ol></section>` : '';
  const rows = [['Specimen',e.sample],['Equipment',e.equipment],['Report as',e.output],['Quality checks',e.qa],['Limits',e.limits]];
  return `<article class="method" id="${e.id}">
    <div class="method-head"><span class="badge">${escape(e.category)}</span><button class="save" data-save="${e.id}" aria-pressed="${saved.has(e.id)}" aria-label="Shortlist ${escape(e.title)}">${saved.has(e.id)?'✓ Saved':'+ Save'}</button></div>
    <h3>${escape(e.title)}</h3><p class="method-id">${escape(e.method)}</p><p>${escape(e.principle)}</p>${protocol}
    <details ${open.has(e.id)?'open':''}><summary>Specimen, reporting &amp; quality checks</summary>
    <dl>${rows.map(([label,value])=>`<dt>${escape(label)}</dt><dd>${escape(value)}</dd>`).join('')}</dl></details>
    <a class="citation" href="${escape(url)}" target="_blank" rel="noopener">${escape(publisher)} ↗</a>
    <span class="access">${escape(access)}</span></article>`;
}
function render() {
  const visible = getVisible();
  $('count').textContent = `${visible.length} of ${entries.length} methods`;
  $('saved-count').textContent = saved.size;
  $('shortlist').setAttribute('aria-pressed',String(shortlistOnly));
  $('export').disabled = !saved.size;
  $('preset-note').hidden = !preset;
  $('preset-note').textContent = preset ? presets[preset][1] : '';
  for (const b of $('categories').querySelectorAll('button')) b.setAttribute('aria-pressed',String(b.dataset.category===activeCategory && !preset && !shortlistOnly));
  for (const b of $('presets').querySelectorAll('button')) b.setAttribute('aria-pressed',String(b.dataset.preset===preset));
  $('results').innerHTML = visible.length ? visible.map(card).join('') :
    `<p class="empty">${shortlistOnly ? 'Your shortlist is empty. Return to the library and save a method.' : 'No matching methods. Try a different term or category.'}</p>`;
}
function changeView(category=cats[0],nextPreset='',only=false) {
  activeCategory = category;
  preset = nextPreset;
  shortlistOnly = only;
  $('query').value = '';
  render();
}
$('total').textContent = entries.length;
$('categories').innerHTML = cats.map(cat=>`<button data-category="${escape(cat)}">${escape(cat)} <small>${cat===cats[0]?entries.length:entries.filter(e=>e.category===cat).length}</small></button>`).join('');
$('presets').innerHTML = Object.keys(presets).map(p=>`<button data-preset="${escape(p)}">${escape(p)}</button>`).join('');
$('sources').innerHTML = Object.values(sources).map(([title,url])=>`<a href="${escape(url)}" target="_blank" rel="noopener">${escape(title)} ↗</a>`).join('');
$('categories').addEventListener('click',e=>{
  const button=e.target.closest('[data-category]');
  if (button) changeView(button.dataset.category);
});
$('presets').addEventListener('click',e=>{
  const button=e.target.closest('[data-preset]');
  if (button) changeView(cats[0],preset===button.dataset.preset?'':button.dataset.preset);
});
$('query').addEventListener('input',render);
$('shortlist').addEventListener('click',()=>changeView(cats[0],'',!shortlistOnly));
$('results').addEventListener('toggle',e=>{
  const detail=e.target;
  if (detail.tagName!=='DETAILS' || !detail.isConnected) return;
  if (detail.open) open.add(detail.parentElement.id);
  else open.delete(detail.parentElement.id);
},true);
$('results').addEventListener('click',e=>{
  const button=e.target.closest('[data-save]');
  if (!button) return;
  const id=button.dataset.save;
  if (saved.has(id)) saved.delete(id);
  else saved.add(id);
  try { localStorage.setItem(storage,JSON.stringify([...saved])); } catch {}
  render();
  $(`results`).querySelector(`[data-save="${id}"]`)?.focus();
  if (shortlistOnly) $('shortlist').focus();
});
$('export').addEventListener('click',()=>{
  const rows=[['Category','Test','Method','Specimen','Equipment','Reporting basis','Quality checks','Limits','Source URL'],
    ...entries.filter(e=>saved.has(e.id)).map(e=>[e.category,e.title,e.method,e.sample,e.equipment,e.output,e.qa,e.limits,sources[e.source][1]])];
  const csv=rows.map(row=>row.map(value=>`"${value.replaceAll('"','""')}"`).join(',')).join('\r\n')+'\r\n';
  const url=URL.createObjectURL(new Blob(['\uFEFF',csv],{type:'text/csv;charset=utf-8'}));
  const link=Object.assign(document.createElement('a'),{href:url,download:'terrawise-lab-methods.csv'});
  document.body.append(link);
  link.click();
  link.remove();
  setTimeout(()=>URL.revokeObjectURL(url),2000);
});
$('print').addEventListener('click',()=>{
  const collapsed=[...$('results').querySelectorAll('details:not([open])')];
  for (const detail of collapsed) detail.open=true;
  window.print();
  for (const detail of collapsed) detail.open=false;
});
render();
