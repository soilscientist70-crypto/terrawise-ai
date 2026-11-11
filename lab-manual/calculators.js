'use strict';
const calculators = [
  {
    name:'Prepare from a solid',
    note:'Use the formula mass of the reagent as supplied, including waters of hydration. Purity is the usable mass fraction of that reagent.',
    fields:[['Target concentration (mmol/L)',100],['Final solution volume (mL)',250],['Reagent formula mass (g/mol)',58.44],['Reagent purity (%)',100]],
    check: ([, , , purity]) => purity > 100 ? 'Purity must be 100% or less.' : '',
    formula:'Mass (g) = concentration × final volume × formula mass ÷ (1,000,000 × purity fraction)',
    result:([c,v,m,p])=>[[c*v*m/(1e6*(p/100)),'g reagent to weigh']]
  },
  {
    name:'Dilute a stock solution',
    note:'Use the same concentration units for stock and target. Measure the stock aliquot and bring the mixture to the final volume.',
    fields:[['Stock concentration',1000],['Target concentration',50],['Final volume (mL)',100]],
    check: ([stock,target]) => target > stock ? 'Target concentration must be at or below the stock concentration.' : '',
    formula:'Stock aliquot = target concentration × final volume ÷ stock concentration',
    result:([stock,target,v])=>[[target*v/stock,'mL stock aliquot'],[v,'mL final solution volume']]
  },
  {
    name:'Back-calculate a solid-sample result',
    note:'Enter sample and blank readings on the same instrument-solution basis. Enter 0 for the blank if the reading is already blank-corrected. Use the cumulative dilution factor after extraction or digestion.',
    fields:[['Instrument concentration (mg/L)',2.5,true],['Blank concentration (mg/L)',0.1,true],['Post-extraction dilution factor',5],['Final extract or digest volume (mL)',50],['Dry sample mass (g)',2]],
    check: ([reading,blank,df]) => df < 1 ? 'A dilution factor must be at least 1.' : '',
    formula:'mg/kg dry sample = (reading − blank) × dilution factor × extract volume (mL) ÷ dry mass (g)',
    result:([reading,blank,df,v,m])=>[[(reading-blank)*df*v/m,'mg/kg dry sample']],
    signed:true
  },
  {
    name:'Back-calculate from a linear calibration',
    note:'Use the slope and intercept from a verified calibration in the form response = slope × concentration + intercept. Use the same response units throughout and check the result against the calibration range.',
    fields:[['Measured response',0.42,true,true],['Calibration slope',0.08,true,true],['Calibration intercept',0.02,true,true],['Dilution factor',4]],
    check: ([,slope,,df]) => slope === 0 ? 'The calibration slope must be nonzero.' : df < 1 ? 'A dilution factor must be at least 1.' : '',
    formula:'Original concentration = (response − intercept) ÷ slope × dilution factor',
    result:([y,slope,i,df])=>[[(y-i)/slope*df,'in original sample (calibration units)'],[(y-i)/slope,'in measured solution (calibration units)']],
    signed:true
  },
  {
    name:'Enzyme activity from absorbance rate',
    note:'For Beer–Lambert rate assays such as CAT or APX, use the positive magnitude of the blank-corrected initial rate. Protein mass is the amount in the extract aliquot added to the reaction.',
    fields:[['Corrected rate magnitude (absorbance/min)',0.056,true],['Extinction coefficient (mM⁻¹ cm⁻¹)',2.8],['Optical path length (cm)',1],['Total reaction volume (mL)',1],['Protein in assay aliquot (mg)',0.1]],
    formula:'Activity = rate × reaction volume ÷ (extinction coefficient × path length × protein mass)',
    result:([rate,eps,path,v,protein])=>[[rate*v/(eps*path*protein),'µmol/min per mg protein']]
  }
];
const numberFormat = new Intl.NumberFormat('en',{maximumSignificantDigits:7});
const root = document.getElementById('calculator-grid');
for (const config of calculators) {
  const form = document.createElement('form');
  form.className = 'calculator panel';
  form.noValidate = true;
  form.innerHTML = `<h3>${config.name}</h3><p>${config.note}</p>
    <div class="calculator-fields">${config.fields.map(([label])=>`<label>${label}<input type="number" step="any" required></label>`).join('')}</div>
    <p class="formula">${config.formula}</p>
    <div class="calculator-actions"><button type="submit">Calculate</button><button type="button" class="example">Load example</button></div>
    <p class="calculator-result" role="status"></p>`;
  const inputs = [...form.querySelectorAll('input')];
  const result = form.querySelector('.calculator-result');
  function calculate() {
    const values = inputs.map(input=>input.valueAsNumber);
    const invalid = values.findIndex((n,index)=>{
      const [, ,zeroAllowed,negativeAllowed] = config.fields[index];
      return !Number.isFinite(n) || (!zeroAllowed && n===0) || (!negativeAllowed && n<0);
    });
    const message = invalid>=0 ? `Check ${config.fields[invalid][0]}.` : config.check?.(values);
    if (message) {
      result.textContent = message;
      return;
    }
    const computed = config.result(values);
    if (computed.some(([n])=>!Number.isFinite(n))) {
      result.textContent = 'The result is outside the calculator’s numeric range.';
      return;
    }
    result.textContent = computed.map(([n,unit])=>`${numberFormat.format(n)} ${unit}`).join(' · ');
    if (config.signed && computed[0][0]<0) result.textContent += ' Review the blank, calibration, and reporting rule before using a negative result.';
  }
  form.addEventListener('submit',event=>{event.preventDefault();calculate();});
  form.addEventListener('input',()=>{result.textContent='';});
  form.querySelector('.example').addEventListener('click',()=>{
    inputs.forEach((input,index)=>{input.value=config.fields[index][1];});
    calculate();
  });
  root.append(form);
}
