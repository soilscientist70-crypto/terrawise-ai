const sources = {
  epa8081b: ["US EPA SW-846 · Method 8081B","https://www.epa.gov/sites/default/files/2015-12/documents/8081b.pdf","Open method · sections 1–2 and 7–11"],
  epa8141b: ["US EPA SW-846 · Method 8141B","https://www.epa.gov/sites/default/files/2015-12/documents/8141b.pdf","Open method · sections 1–2 and 7–11"],
  epa8151a: ["US EPA SW-846 · Method 8151A","https://www.epa.gov/sites/default/files/2015-12/documents/8151a.pdf","Open method · sections 1–2 and 7–11"],
  soilPesticideQuechers: ["Riaño-Herrera et al. (2026) · Molecules","https://www.mdpi.com/1420-3049/31/15/2564","Open research protocol · sections 2 and 3"],
  epa5253: ["US EPA · Method 525.3","https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=P100I9ZG.TXT","Open method · scope, QC and procedures"],
  epa547: ["US EPA · Method 547","https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=30000UX8.TXT","Open manual · Method 547, printed p. 63"],
  epa5492: ["US EPA · Method 549.2","https://www.epa.gov/dwanalyticalmethods/method-5492-determination-diquat-and-paraquat-drinking-water-liquid-solid","Open method · PDF linked"],
  usgs5b11: ["USGS · Techniques and Methods 5–B11","https://pubs.usgs.gov/publication/tm5B11","Open technical report and target list"],
  epa6083: ["US EPA · Method 608.3","https://www.epa.gov/sites/default/files/2017-08/documents/method_608-3_2016.pdf","Open method · sections 1–2 and 8–15"],
  plantEnzymes: ["Plant antioxidant enzyme assays · Arabidopsis study (2025)","https://pmc.ncbi.nlm.nih.gov/articles/PMC12252247/","Open study · Materials and methods"],
  bradford: ["Bradford (1976) · protein-dye binding","https://pubmed.ncbi.nlm.nih.gov/942051/","Open bibliographic record"],
  airCriteria: ["US EPA · criteria pollutant monitoring methods","https://www.epa.gov/amtic/air-monitoring-methods-criteria-pollutants","Open methods index"],
  airVoc: ["US EPA · Method TO-15A (2019)","https://www.epa.gov/sites/default/files/2019-12/documents/to-15a_vocs.pdf","Open procedure"],
  airStack: ["US EPA · Method 3C","https://www.epa.gov/emc/method-3c-carbon-dioxide-methane-nitrogen-and-oxygen-concentrations-thermal-conductivity","Open method page"],
  "soilDoctors": ["FAO · Soil Testing Methods, Global Soil Doctors Programme (2020)","https://www.fao.org/family-farming/detail/en/c/1288031/","Open FAO source · printed pages shown in each entry"],
  "fao": [
    "FAO GLOSOLAN · standard operating procedures",
    "https://www.fao.org/global-soil-partnership/Scientific-and-technical-support/networks/the-glosolan/standard-operating-procedures-%28sops%29/en",
    "Open SOP directory"
  ],
  "kssl": [
    "USDA NRCS · KSSL Methods Manual, SSIR 42 v6",
    "https://www.nrcs.usda.gov/sites/default/files/2022-10/SSIR42-v6-pt1.pdf",
    "Open manual"
  ],
  "astm": [
    "ASTM International · geotechnical standards catalog",
    "https://store.astm.org/products-services/standards-and-publications/standards/geotechnical-engineering-standards.html",
    "Catalog · standards may require purchase"
  ],
  "resp": [
    "ISO · 16072:2002",
    "https://www.iso.org/standard/32096.html",
    "Catalog · standard may require purchase"
  ],
  "min": [
    "ISO · 14238:2012",
    "https://www.iso.org/cms/%20render/live/en/sites/isoorg/contents/data/standard/05/60/56033.html",
    "Catalog · standard may require purchase"
  ],
  "plant": [
    "NC Department of Agriculture · Plant Tissue Analysis Methods",
    "https://www.ncagr.gov/divisions/agronomic-services/plant-tissue-analysis/methods",
    "Open method descriptions"
  ],
  "uf": [
    "UF/IFAS Analytical Services Laboratories · Procedures and Training Manual",
    "https://ask.ifas.ufl.edu/publication/SS312",
    "Open manual"
  ],
  "uga": [
    "Southern Cooperative Series Bulletin 368 · Plant Analysis Reference Procedures",
    "https://aesl.ces.uga.edu/sera6/PUB/PlantAnalysisReferenceProcedures.pdf",
    "Open manual"
  ],
  "epa": [
    "US EPA · Approved CWA Chemical Test Methods",
    "https://www.epa.gov/cwa-methods/approved-cwa-chemical-test-methods",
    "Open methods index"
  ],
  "drinking": [
    "US EPA · Approved Drinking Water Analytical Methods",
    "https://www.epa.gov/dwanalyticalmethods/approved-drinking-water-analytical-methods",
    "Open regulatory index"
  ],
  "ecoli": [
    "US EPA · Method 1603.1, September 2023",
    "https://www.epa.gov/system/files/documents/2024-06/method-1603.1-10022023_508.pdf",
    "Open procedure"
  ],
  "water": [
    "FAO · Water Quality for Agriculture",
    "https://www.fao.org/4/t0234e/t0234e01.htm",
    "Open interpretation guide"
  ],
  "waterlab": [
    "FAO · Guide to Laboratory Establishment for Plant Nutrient Analysis, Chapter 5",
    "https://www.fao.org/docrep/pdf/011/i0131e/i0131e01.pdf",
    "Open manual"
  ]
};
const methods = [
  [
    "soil-moisture",
    "Soil physical",
    "Gravimetric soil moisture",
    "FAO GLOSOLAN · gravimetric moisture",
    "fao",
    "Preserved field soil",
    "Balance and drying oven",
    "g water per 100 g dry soil",
    "Weigh moist and dried specimen and express the mass loss on a dry-mass basis.",
    "Record collection condition and drying regime. Check balance and oven and verify stable dry mass.",
    "Sample drying before the initial weighing invalidates natural moisture. Follow the SOP for materials sensitive to the drying regime."
  ],
  [
    "bulk-density",
    "Soil physical",
    "Bulk density by intact core",
    "FAO GLOSOLAN · cylinder method",
    "fao",
    "Intact known-volume core",
    "Core ring, balance and oven",
    "Mg/m³ or g/cm³",
    "Measure dry soil mass in the intact sampled volume.",
    "Verify ring volume and record coarse fragments, core loss or compaction.",
    "Loose bagged soil cannot reconstruct in-situ bulk density."
  ],
  [
    "soil-texture",
    "Soil physical",
    "Particle-size distribution and USDA texture",
    "USDA KSSL SSIR 42 · particle-size analysis",
    "kssl",
    "Mineral fine-earth soil",
    "Dispersion equipment, sieves and sedimentation apparatus",
    "Sand, silt and clay as mass %",
    "Separate size fractions using the selected dispersion and sedimentation procedure, then assign USDA texture.",
    "Record pretreatment, dispersion, fraction basis and size boundaries. Check fraction sum.",
    "USDA clay below 2 µm and engineering fines passing 75 µm measure different fractions."
  ],
  [
    "water-retention",
    "Soil physical",
    "Soil water retention",
    "USDA KSSL SSIR 42 · water retention",
    "kssl",
    "Intact or prepared soil specified by method",
    "Pressure apparatus or suction equipment",
    "Water content at specified matric potentials (kPa)",
    "Equilibrate specimens at selected potentials and determine water retained.",
    "Record sample condition, equilibration criterion, potential and water-content basis.",
    "Sample structure and bulk density affect comparisons between intact and repacked material."
  ],
  [
    "sieve",
    "Soil physical",
    "Engineering sieve gradation",
    "ASTM D6913/D6913M · sieve analysis",
    "astm",
    "Representative engineering soil split",
    "Standard sieves, shaker and balance",
    "Cumulative % passing by aperture (mm)",
    "Separate the specimen by sieve opening and calculate dry-mass percentages.",
    "Record sieve series, preparation, recovered mass and mass closure.",
    "Use the appropriate washing or sedimentation method when a finer fraction needs separate characterization."
  ],
  [
    "washed-fines",
    "Soil physical",
    "Washed engineering fines",
    "ASTM D1140 · finer than 75 µm by washing",
    "astm",
    "Representative engineering soil split",
    "75 µm sieve and balance",
    "% dry mass passing 75 µm",
    "Determine mass removed by washing through the No. 200 sieve.",
    "Check specimen recovery and document washing variant and any losses.",
    "The result includes multiple particle sizes and does not quantify clay content."
  ],
  [
    "atterberg",
    "Soil physical",
    "Atterberg limits",
    "ASTM D4318 · LL, PL and PI",
    "astm",
    "Prepared fraction specified by method",
    "Liquid-limit apparatus, rolling surface and balance",
    "LL and PL %, PI in percentage points",
    "Measure consistency limits on the specified fraction and calculate the plasticity index.",
    "Record preparation, method variant, replicate checks and any laboratory nonplastic designation.",
    "Engineering classification also requires applicable gradation and specimen information."
  ],
  [
    "proctor",
    "Soil physical",
    "Standard-effort Proctor compaction",
    "ASTM D698 · standard effort",
    "astm",
    "Representative fill or borrow soil",
    "Proctor mold, rammer, balance and oven",
    "Maximum dry density and optimum moisture",
    "Compact prepared specimens at several water contents and fit the moisture–density relationship.",
    "Record method, effort, mold and oversize handling. Ensure the points bracket the peak.",
    "Use the project-specified effort. Modified effort is a separate method."
  ],
  [
    "soil-ph",
    "Soil chemical",
    "Soil pH",
    "FAO GLOSOLAN · soil pH",
    "fao",
    "Prepared soil, specified suspension",
    "pH meter and reference buffers",
    "pH with medium and soil-to-solution ratio",
    "Measure pH in the designated water or salt suspension.",
    "Use buffers that bracket expected pH. Record medium, ratio and temperature.",
    "Water, KCl and CaCl₂ pH values are method-specific."
  ],
  [
    "soil-ec",
    "Soil chemical",
    "Soil EC, 1:5 water extract",
    "FAO GLOSOLAN · soil/water 1:5 EC",
    "fao",
    "Prepared soil, fixed soil-to-water ratio",
    "Conductivity meter and standard solution",
    "dS/m with ratio and reference temperature",
    "Measure conductivity on the standardized soil-water preparation.",
    "Check the cell with a reference standard and record ratio and temperature treatment.",
    "EC 1:5 differs from saturated-paste ECe. Use interpretation calibrated for the extract."
  ],
  [
    "soil-ece",
    "Soil chemical",
    "Saturated-paste extract conductivity",
    "USDA KSSL SSIR 42 · saturation extract",
    "kssl",
    "Prepared saturated soil paste",
    "Extraction apparatus and conductivity meter",
    "ECe in dS/m, temperature basis stated",
    "Prepare a saturated paste, collect its extract and measure conductivity.",
    "Document the saturation endpoint, extraction, and conductivity temperature basis.",
    "Dilution and paste preparation change the value. Report the actual extraction method."
  ],
  [
    "olsen-p",
    "Soil chemical",
    "Olsen extractable phosphorus",
    "FAO GLOSOLAN · Olsen P",
    "fao",
    "Prepared soil, often calcareous",
    "Extraction shaker and prescribed P measurement system",
    "mg P/kg dry soil",
    "Extract a method-defined P fraction with bicarbonate and quantify phosphorus.",
    "Use extraction blanks, check standards and duplicate or control soil.",
    "Use regional crop calibration. Values are method-specific and represent extractable P."
  ],
  [
    "bray-p",
    "Soil chemical",
    "Bray extractable phosphorus",
    "FAO GLOSOLAN · Bray I and Bray II",
    "fao",
    "Acid soil within method scope",
    "Extraction shaker and prescribed P measurement system",
    "mg P/kg dry soil",
    "Apply the specified Bray extractant and quantify the extracted P.",
    "Record Bray I or II and verify extraction timing and control soil.",
    "Carbonates interfere with interpretation. Select a locally calibrated method appropriate for soil pH."
  ],
  [
    "dtpa",
    "Soil chemical",
    "DTPA-extractable micronutrients",
    "FAO GLOSOLAN · DTPA extraction",
    "fao",
    "Prepared soil within method scope",
    "Shaker and AAS or ICP-OES per SOP",
    "mg element/kg dry soil",
    "Chelate extractable Fe, Mn, Zn or Cu and measure each element.",
    "Use extraction blank, calibration verification and a control soil.",
    "This is an operationally defined extractable fraction. Interpret with locally relevant crop calibration."
  ],
  [
    "cec",
    "Soil chemical",
    "Cation exchange capacity and bases",
    "FAO GLOSOLAN · ammonium acetate",
    "fao",
    "Prepared mineral soil within SOP scope",
    "Extraction equipment and method-specific detection",
    "cmolc/kg dry soil",
    "Use the specified exchange reagent and determine CEC or exchangeable base concentrations.",
    "Record reagent pH, soluble-salt handling and calculation basis.",
    "CEC at a defined pH and effective CEC at field pH can differ. Carbonates and salts require attention."
  ],
  [
    "total-carbon",
    "Soil chemical",
    "Total carbon by dry combustion",
    "FAO GLOSOLAN · Dumas dry combustion",
    "fao",
    "Dry, finely ground, homogeneous soil",
    "Elemental combustion analyzer",
    "g C/kg or % dry mass",
    "Combust the aliquot and measure the carbon released.",
    "Verify instrument calibration and use reference soil and replicate aliquots.",
    "Total C includes inorganic C in carbonate-bearing soil. Report organic C only with a documented separation or correction."
  ],
  [
    "walkley-black",
    "Soil chemical",
    "Oxidizable carbon by Walkley–Black",
    "FAO GLOSOLAN · Walkley–Black",
    "fao",
    "Prepared soil within method scope",
    "Controlled wet-chemistry setup and titration or colorimetry",
    "g oxidizable C/kg dry soil",
    "Estimate oxidizable carbon using the specified dichromate reaction and detection variant.",
    "Use blanks and controls. Document any recovery correction and manage Cr(VI) waste.",
    "Different carbon pools and recovery assumptions limit comparability with combustion SOC."
  ],
  [
    "soil-n",
    "Soil chemical",
    "Total soil nitrogen by combustion",
    "FAO GLOSOLAN · Dumas total N",
    "fao",
    "Dry, finely ground, homogeneous soil",
    "Elemental combustion analyzer",
    "g N/kg or % dry mass",
    "Combust the aliquot and quantify total nitrogen.",
    "Run blanks, calibration verification and reference material.",
    "Total N differs from nitrate, ammonium and crop-available N."
  ],
  [
    "carbonates",
    "Soil chemical",
    "Calcium carbonate equivalent",
    "FAO GLOSOLAN · volumetric calcimeter",
    "fao",
    "Prepared soil within method scope",
    "Calcimeter and reference carbonate",
    "g CaCO₃ equivalent/kg or %",
    "Quantify gas evolved from carbonate reaction relative to a calibration.",
    "Check the system for leaks and document reference and environmental corrections.",
    "The result is carbonate equivalent and does not identify carbonate minerals."
  ],
  [
    "respiration",
    "Soil biological",
    "Microbial soil respiration",
    "ISO 16072:2002 · microbial respiration",
    "resp",
    "Aerobic, unsaturated soil",
    "Incubation system with CO₂ or O₂ measurement",
    "Rate with gas, dry mass and time basis",
    "Measure gas release or uptake under defined incubation conditions.",
    "Record storage, moisture, temperature, duration and blank correction.",
    "Basal and substrate-induced respiration represent different conditions."
  ],
  [
    "biomass",
    "Soil biological",
    "Microbial biomass carbon",
    "FAO GLOSOLAN · fumigation–extraction",
    "fao",
    "Soil handled per biological SOP",
    "Approved fume hood, extraction and carbon measurement",
    "mg microbial biomass C/kg dry soil",
    "Estimate biomass from the extractable C difference between fumigated and paired unfumigated aliquots.",
    "Run paired controls and record conversion factor and moisture correction.",
    "Chloroform requires approved handling. Results depend on extraction and conversion assumptions."
  ],
  [
    "enzyme",
    "Soil biological",
    "Soil enzyme activity panel",
    "FAO GLOSOLAN · soil enzyme activities",
    "fao",
    "Soil preserved under assay SOP",
    "Incubation and assay-specific detection",
    "Product per dry soil mass per time",
    "Measure product formation under defined assay conditions for a specified enzyme.",
    "Record substrate, pH and incubation conditions. Correct for background color or fluorescence.",
    "Potential assay activity depends on the method and is distinct from an in-situ process rate."
  ],
  [
    "n-min",
    "Soil biological",
    "Nitrogen mineralization and nitrification",
    "ISO 14238:2012 · biological N transformations",
    "min",
    "Soil for controlled incubation",
    "Incubation and inorganic nitrogen analysis",
    "Change in inorganic N per dry soil mass over stated time",
    "Measure selected inorganic nitrogen pools over a defined incubation.",
    "Track time-zero values, moisture, temperature and controls.",
    "Net changes under laboratory conditions do not directly predict field fertilizer requirement."
  ],
  [
    "plant-n",
    "Plant tissue",
    "Total tissue nitrogen by combustion",
    "NCDA&CS · nitrogen by combustion",
    "plant",
    "Dried, ground plant tissue",
    "Elemental combustion analyzer",
    "% N or g N/kg dry tissue",
    "Combust a representative aliquot and measure total N.",
    "Record crop, sampled organ and growth stage. Use plant reference material and duplicates.",
    "Interpret with tissue- and growth-stage-specific reference ranges."
  ],
  [
    "plant-icp",
    "Plant tissue",
    "Tissue nutrient panel by ICP-OES",
    "NCDA&CS · nitric acid digestion and ICP-OES",
    "plant",
    "Dried, ground plant tissue",
    "Closed-vessel digestion and ICP-OES",
    "g/kg or mg/kg dry tissue by analyte",
    "Digest plant tissue under the stated method and measure selected nutrients and elements.",
    "Track digestion blanks, plant reference materials, calibration and interferences.",
    "Use trained staff and approved acid-digestion controls. State analytes and digestion basis."
  ],
  [
    "plant-kj",
    "Plant tissue",
    "Tissue Kjeldahl nitrogen",
    "UF/IFAS · total Kjeldahl N in plant tissue",
    "uf",
    "Prepared plant tissue",
    "Kjeldahl digestion and prescribed detection",
    "% N or g N/kg dry tissue",
    "Determine the nitrogen fraction recovered by the specified Kjeldahl procedure.",
    "Check digestion blanks, reference material and recovery.",
    "Conventional Kjeldahl recovery of nitrate depends on method modifications. Record the variant."
  ],
  [
    "plant-nitrate",
    "Plant tissue",
    "Extractable nitrate in plant tissue",
    "SCSB 368 · acetic acid extraction of tissue ions",
    "uga",
    "Prepared tissue within method scope",
    "Extraction and method-specific ion measurement",
    "mg NO₃–N/kg or mg NO₃/kg, basis stated",
    "Extract soluble tissue ions and measure nitrate using the specified procedure.",
    "Check extraction blanks and verify units, moisture basis and calibration.",
    "Fresh sap and dried tissue results use different sample bases."
  ],
  [
    "water-ec",
    "Water",
    "Water specific conductance",
    "US EPA 120.1 · conductivity meter",
    "epa",
    "Water within the selected method scope",
    "Conductivity meter and reference standard",
    "µS/cm at reference temperature",
    "Measure conductivity and report the specified temperature basis.",
    "Verify cell calibration and document temperature compensation.",
    "Irrigation interpretation should consider ionic composition alongside conductivity."
  ],
  [
    "water-ions",
    "Water",
    "Inorganic anions by ion chromatography",
    "US EPA 300.0 · inorganic anions",
    "epa",
    "Water or prepared sample within method scope",
    "Ion chromatograph",
    "mg/L by analyte and chemical form",
    "Separate and quantify eligible anions such as chloride, nitrate and sulfate.",
    "Check blanks, retention times, calibration and matrix effects.",
    "State nitrate as N or as nitrate. Confirm the method and edition permitted for the intended program."
  ],
  [
    "water-metals",
    "Water",
    "Water metals by ICP-AES",
    "US EPA 200.7 · water and wastes",
    "epa",
    "Water prepared for dissolved or total recoverable fraction",
    "ICP-OES and preparation equipment",
    "mg/L or µg/L by analyte",
    "Prepare the designated sample fraction and measure selected elements.",
    "Track filtration and preservation, field or method blanks, calibration and matrix recovery.",
    "Dissolved and total recoverable results are different measurands."
  ],
  [
    "water-turbidity",
    "Water",
    "Water turbidity by nephelometry",
    "US EPA 180.1 · turbidity",
    "epa",
    "Water within method scope",
    "Nephelometer and specified standards",
    "NTU under the stated method",
    "Measure light scattered by the sample using the specified instrument geometry.",
    "Verify calibration and inspect for bubbles, settling and scratched cells.",
    "Turbidity is an optical measure and cannot substitute for gravimetric suspended solids."
  ],
  [
    "water-ph",
    "Water",
    "Irrigation water pH",
    "FAO · laboratory guide, Chapter 5",
    "waterlab",
    "Water collected for pH measurement",
    "pH meter and reference buffers",
    "pH and measurement temperature",
    "Measure water pH electrometrically and record sample conditions.",
    "Use bracketing buffers and minimize storage-related change.",
    "Specify field or laboratory measurement. Regulatory uses may require another method."
  ],
  [
    "sar",
    "Water",
    "Sodium adsorption ratio",
    "FAO · Water Quality for Agriculture, SAR equation",
    "water",
    "Irrigation water with measured Na, Ca and Mg",
    "Validated cation analysis and calculation",
    "SAR calculated from charge concentrations",
    "Calculate Na / √[(Ca + Mg)/2], with all three concentrations in mmol of charge/L.",
    "Verify ion units before calculation and preserve the cation results in the report.",
    "Interpret with conductivity, soil, crop and management conditions. SAR alone does not determine suitability."
  ],
  [
    "ecoli-water",
    "Water",
    "E. coli in ambient water",
    "US EPA 1603.1 · modified mTEC",
    "ecoli",
    "Ambient freshwater or wastewater within scope",
    "Membrane filtration and controlled microbiology facilities",
    "CFU/100 mL",
    "Enumerate colonies using the referenced membrane-filtration procedure.",
    "Follow collection, holding, sterility and organism-control requirements in the source.",
    "Use trained staff and approved biosafety procedures. Drinking-water compliance has its own approved methods."
  ],
  [
    "engineering-moisture",
    "Soil physical",
    "Engineering water content",
    "ASTM D2216 · water content by mass",
    "astm",
    "Sealed soil or rock specimen",
    "Balance and drying oven",
    "Water content as % of dry mass",
    "Determine water content from moist and dry masses using the applicable drying procedure.",
    "Record specimen condition, drying regime and any deviation for heat-sensitive material.",
    "Report the actual method and sample condition when used alongside an engineering classification."
  ],
  [
    "uscs",
    "Soil physical",
    "Unified Soil Classification System",
    "ASTM D2487 · engineering classification",
    "astm",
    "Representative soil with applicable gradation and plasticity results",
    "Gradation and Atterberg test records",
    "USCS group symbol and name",
    "Assign the group using the standard decision criteria for gradation, plasticity and organic behavior.",
    "Retain source test records, material basis and any borderline decisions.",
    "The group does not give allowable bearing pressure, foundation depth or settlement."
  ],
  [
    "consolidation",
    "Soil physical",
    "One-dimensional consolidation",
    "ASTM D2435/D2435M · incremental loading",
    "astm",
    "Representative specimen with condition specified by engineer",
    "Oedometer and displacement measurement",
    "Deformation versus load and time, with derived properties as specified",
    "Measure the deformation response during prescribed vertical stress increments under lateral confinement.",
    "Document specimen quality, stress history assumptions and loading sequence.",
    "Specify specimen condition and loading schedule. Sample disturbance can affect design interpretation."
  ],
  [
    "direct-shear",
    "Soil physical",
    "Consolidated drained direct shear",
    "ASTM D3080/D3080M · direct shear",
    "astm",
    "Prepared or intact specimen as specified",
    "Direct shear apparatus with normal-load and displacement measurement",
    "Shear stress versus displacement at specified normal stresses",
    "Consolidate the specimen and shear it along a predefined plane under drained conditions.",
    "Record specimen density, stress levels and the basis for the shearing rate.",
    "Test geometry, particle size and the imposed failure plane affect applicability."
  ],
  [
    "water-alkalinity",
    "Water",
    "Irrigation water alkalinity",
    "FAO · laboratory guide, Chapter 5",
    "waterlab",
    "Water preserved and analyzed within method requirements",
    "Titration equipment and method-specific endpoint detection",
    "Alkalinity basis and units, commonly mg/L as CaCO₃",
    "Determine acid-neutralizing capacity by titration to the specified endpoints.",
    "Verify titrant strength and record endpoints, temperature and reporting basis.",
    "Alkalinity and pH describe different properties. Verify carbonate and bicarbonate assumptions before using them in an irrigation assessment."
  ],
  [
    "drinking-anions",
    "Water",
    "Inorganic anions in drinking water",
    "US EPA 300.1 · ion chromatography",
    "drinking",
    "Drinking-water sample within method and program scope",
    "Ion chromatograph",
    "mg/L by analyte and reporting form",
    "Separate and measure eligible inorganic anions using the specified chromatographic method.",
    "Confirm preservation, holding time, calibration and required control samples in the approved edition.",
    "Confirm the relevant drinking-water program and local acceptance. This entry does not establish potability."
  ],
  ["field-texture","Soil physical","Field texture by feel and ribbon","FAO Soil Doctors (2020) · pp. 6, 10, 12","soilDoctors","Representative mineral soil from a recorded depth","Water and field record sheet","Estimated texture class and observation conditions","Assess grittiness, smoothness and ribboning of moist soil. Use the shaking observation as a qualitative aid when silt and clay are difficult to distinguish.","Keep moisture and preparation consistent. Compare estimates between observers and against known samples.","A tactile class is an estimate. Use laboratory particle-size analysis for quantitative fractions and separate engineering tests for USCS."],
  ["excavation-density","Soil physical","Bulk density by excavation","FAO Soil Doctors (2020) · pp. 20–21","soilDoctors","Soil removed from a measured field cavity","Excavation tools, volume measurement, balance and drying equipment","Dry mass per excavation volume, in Mg/m³","Relate the dry mass removed to the volume of the cavity measured in the field.","Retain excavated material and record cavity volume, depth and coarse-fragment treatment.","Volume errors and incomplete recovery can bias the result. State whether density describes whole soil or fine earth."],
  ["clod-density","Soil physical","Bulk density by clod displacement","FAO Soil Doctors (2020) · pp. 22–23","soilDoctors","Representative intact cohesive clod","Balance and displacement measurement apparatus","Dry bulk density in Mg/m³, with method noted","Determine clod volume by displacement and relate it to dry mass.","Track clod integrity, coating correction where applicable, and moisture condition.","A clod excludes gaps between aggregates. It may give a different result from an intact core in structured soil."],
  ["volumetric-moisture","Soil physical","Volumetric water content from gravimetric data","FAO Soil Doctors (2020) · p. 26","soilDoctors","Gravimetric water content and bulk density for the same layer","Matched moisture and bulk density records","m³ water/m³ soil or % by volume","Convert mass-based water content to a volume fraction using bulk density and water density.","Use a decimal dry-mass water fraction and consistent density units. Match depth and material basis.","A mismatched density sample propagates error. Identify the result as calculated."],
  ["field-moisture-feel","Soil physical","Field moisture by feel and appearance","FAO Soil Doctors (2020) · pp. 27–32","soilDoctors","Fresh field samples at recorded root-zone depths","Hand sampling tools and texture-specific reference","Estimated moisture condition by depth","Use texture-specific observations of soil appearance and handling to estimate moisture status.","Compare across representative locations and depths. Check estimates against measured moisture during training.","Use as a qualitative irrigation observation. Texture and observer experience affect the estimate."],
  ["soil-tension","Soil physical","Soil water tension by tensiometer","FAO Soil Doctors (2020) · pp. 33–34","soilDoctors","Installed instrument in a recorded soil layer","Tensiometer and gauge","Matric suction in kPa, with depth and time","Measure the suction of soil water through a porous ceramic tip and gauge.","Check soil contact, instrument condition, gauge response and reading depth.","Suction is distinct from water content. Conversion requires a soil-specific water retention relationship."],
  ["field-ph-color","Soil chemical","Field pH by indicator color or strip","FAO Soil Doctors (2020) · pp. 38–40","soilDoctors","Soil suspension prepared for the selected field kit","Indicator or pH strip and matching color scale","Approximate pH or pH band","Estimate pH from the color response of the selected indicator or strip.","Record kit, preparation, resolution and viewing conditions. Confirm ambiguous colors with a calibrated meter.","Treat as a screening estimate, especially in colored or turbid suspensions."],
  ["soil-ec-11","Soil chemical","Soil conductivity in a 1:1 water preparation","FAO Soil Doctors (2020) · pp. 47–48","soilDoctors","Representative soil and water preparation at a fixed 1:1 ratio","Conductivity meter and reference solution","EC₁:₁ in dS/m with temperature basis","Measure the conductivity of the specified soil-water preparation as a salinity indicator.","Record ratio basis, mixing and temperature handling. Verify conductivity calibration.","EC₁:₁, EC₁:₅ and saturated-paste ECe are method-specific. Use interpretation calibrated for the reported method."],
  ["visual-salinity","Soil chemical","Visual screening for salinity symptoms","FAO Soil Doctors (2020) · pp. 50–51","soilDoctors","Field observations across affected and unaffected zones","Field notes and site photographs","Qualitative observations by location","Record salt-like crusting and crop symptoms to identify locations for confirmatory sampling.","Compare with nearby reference areas. Note drainage, irrigation and other possible causes of stress.","Symptoms are nonspecific. Confirm salinity with an appropriate EC test and assess sodicity separately when relevant."],
  ["earthworms","Soil biological","Field earthworm abundance","FAO Soil Doctors (2020) · pp. 53–54","soilDoctors","Replicated soil sampling areas of known size","Spade, area measure and field tally","Earthworms per m², with sampling depth","Count earthworms in standardized field samples and scale the result to sampled area.","Record season, moisture, depth and sampling effort. Compare like conditions.","Counts vary with soil, season and management. They do not establish overall soil health on their own."],
  ["litter-decomposition","Soil biological","Tea-bag litter decomposition indicator","FAO Soil Doctors (2020) · pp. 55–56","soilDoctors","Standardized litter substrates in a documented field setting","Comparable tea bags, labels and balance","Mass loss over a stated exposure period","Track mass change in standardized buried litter as an indicator of decomposition under site conditions.","Document substrate, exposure duration, recovery condition and soil contamination.","This measures decay of the chosen substrate under the test conditions, rather than total soil-carbon turnover."],
  ["active-carbon","Soil biological","Permanganate-oxidizable carbon","FAO Soil Doctors (2020) · pp. 57–58","soilDoctors","Prepared soil with recorded dry-mass basis","Colorimetric measurement and reference standards","mg oxidizable C/kg dry soil, with method noted","Estimate an operationally defined carbon fraction from the change in permanganate color.","Include blanks, check standards and a control soil. Document the sample preparation.","The result depends on the procedure and differs from total organic carbon and microbial biomass carbon."],
  ["soda-lime-respiration","Soil biological","Field CO₂ release by soda-lime absorption","FAO Soil Doctors (2020) · pp. 59–63","soilDoctors","Defined field area under a chamber","Chamber, soda-lime absorber and balance","CO₂ flux with stated area and time basis","Estimate accumulated CO₂ from absorber mass change over a defined field exposure.","Use blanks and document the mass correction, chamber area and exposure conditions.","Field CO₂ release can include roots and carbonate-related processes. It is distinct from controlled microbial respiration."],
  ["visual-structure","Soil physical","Visual soil structure and porosity","FAO Soil Doctors (2020) · Annex I, pp. 70–73","soilDoctors","Representative spade sample and comparable reference area","Spade and field record sheet","Qualitative structure and visible pore description","Describe aggregate arrangement, consistency and visible pores in a field sample.","Record moisture and depth, and compare observations made under similar conditions.","Visual scores are observational and should not substitute for measured density or hydraulic properties."],
  ["visual-mottles","Soil physical","Soil mottles and drainage observations","FAO Soil Doctors (2020) · Annex I, pp. 76–77","soilDoctors","Exposed soil profile or representative spade sample","Spade, color reference and field notes","Color, abundance and depth of mottles","Describe mottling and its distribution as clues to soil aeration and wetness history.","Record profile depth, moisture and background color. Compare with landscape position and field history.","Mottles require interpretation in context. They do not measure the current groundwater depth."],
  ["rooting-depth","Soil physical","Potential rooting depth and restrictive layers","FAO Soil Doctors (2020) · Annex I, pp. 80–81","soilDoctors","Representative exposed soil profile","Spade or profile observation tools and measuring scale","Depth to the observed restrictive layer, in cm","Record evidence of barriers that may limit the depth roots can explore.","Describe the suspected barrier, observed roots and sampling location.","Potential rooting depth can differ from actual crop rooting and varies within a field."],
  ["plant-cat","Plant biochemistry","Catalase activity (CAT)","Plant extract · Aebi-type UV assay","plantEnzymes","Fresh or appropriately frozen tissue, extracted cold","UV spectrophotometer and UV-transparent cuvette","µmol H₂O₂ consumed/min per mg protein, or another stated basis","Follow the initial decrease in absorbance at 240 nm as hydrogen peroxide is consumed.","Measure background, confirm the linear time interval and record temperature, extract dilution and optical path length.","Crude extracts can absorb at 240 nm. Use the extinction coefficient in units consistent with the calculation."],
  ["plant-apx","Plant biochemistry","Ascorbate peroxidase activity (APX)","Plant extract · Nakano–Asada-type UV assay","plantEnzymes","Cold plant extract prepared under the selected APX procedure","UV spectrophotometer and UV-transparent cuvette","µmol ascorbate oxidized/min per mg protein, or stated tissue basis","Follow the initial decrease in absorbance at 290 nm during ascorbate oxidation.","Use a nonenzymatic reaction blank and document extraction conditions, path length and temperature.","APX can lose activity during extraction. Keep timing and ascorbate conditions consistent with the selected procedure."],
  ["plant-sod","Plant biochemistry","Superoxide dismutase activity (SOD)","Plant extract · NBT photoreduction inhibition","plantEnzymes","Cold, clarified plant extract","Controlled illumination and spectrophotometer","Method-defined SOD units per mg protein","Compare nitroblue tetrazolium photoreduction in the presence and absence of extract. Estimate activity using the assay's inhibition definition.","Run light and dark controls as specified, and use an extract dilution series to bracket the assay endpoint.","Inhibition units are assay-dependent. Use the endpoint definition from the source instead of a Beer–Lambert rate conversion."],
  ["plant-protein","Plant biochemistry","Soluble protein by Bradford dye binding","Bradford (1976) · Coomassie dye assay","bradford","Clarified plant extract compatible with dye reagent","Visible spectrophotometer or plate reader","mg protein/mL extract, standard stated","Compare absorbance at about 595 nm with a protein calibration curve prepared under the same conditions.","Use an extraction-buffer blank, matching standards and a dilution that lies within the working range.","Detergents and differences between proteins can change dye response. Record the standard and buffer composition."],
  ["air-pm25","Air","Ambient PM₂.₅ by filter gravimetry","US EPA · 40 CFR Part 50 Appendix L reference method","airCriteria","Ambient air sampled through the specified inlet onto a conditioned filter","Reference sampler, flow calibration and microbalance","µg/m³ at the method's stated volume basis and averaging period","Determine net collected mass from pre- and post-sampling filter weights, then divide by sampled air volume.","Record conditioning, flow checks, filter handling, blanks and actual sampling duration.","Use the applicable designation and sampling requirements for regulatory monitoring."],
  ["air-no2","Air","Ambient nitrogen dioxide by chemiluminescence","US EPA · 40 CFR Part 50 Appendix F reference principle","airCriteria","Ambient air through the analyzer's specified sampling system","NOₓ chemiluminescence analyzer and traceable gas standards","ppb with averaging period and method stated","Compare nitric oxide response before and after conversion of NO₂ to NO.","Check zero, span, converter performance and inlet condition. Document calibration and data completeness.","Converter interferences depend on analyzer design. Verify the designation and applicability for the monitoring program."],
  ["air-vocs","Air","Ambient VOCs by canister sampling and GC–MS","US EPA TO-15A · target volatile organic compounds","airVoc","Whole ambient air collected in a prepared canister","Canisters, preconcentrator and GC–MS","Analyte-specific pptv or ppbv, reporting limits stated","Collect whole air in a qualified canister, preconcentrate an aliquot, then separate and quantify target compounds.","Check canister cleanliness and leaks, blanks, calibration, and compound identification criteria.","Method suitability depends on target compounds, concentration range and sample conditions."],
  ["air-stack-gases","Air","Stationary-source gases by GC–TCD","US EPA Method 3C · CO₂, CH₄, N₂ and O₂","airStack","Gas sample from an applicable stationary source","Gas chromatograph with thermal conductivity detector","Gas volume fraction with the moisture basis stated","Separate the target gases chromatographically and quantify them against gas standards.","Verify detector linearity, sample integrity, and calibration coverage for each gas.","This procedure addresses stationary-source samples under its specified scope. Ambient monitoring has separate requirements."],
  ["pesticides-organochlorine","Soil chemical","Organochlorine pesticides in soil and water","SW-846 8081B · GC–ECD or GC–ELCD","epa8081b","Soil or applicable water matrix, extracted with a matching SW-846 preparation method","Solvent extraction and cleanup equipment, capillary GC with ECD or ELCD","µg/kg dry soil or µg/L water, with analyte-specific reporting limits","Extract and clean up the sample, then separate targets such as DDT, DDE, DDD, lindane and dieldrin by capillary gas chromatography.","Check blanks, surrogates, spike recovery and DDT/endrin breakdown. Confirm identifications as directed by the method.","Use a method approved for the specific monitoring program when reporting compliance results."],
  ["pesticides-organophosphorus","Soil chemical","Organophosphorus pesticides in soil and water","SW-846 8141B · GC–FPD or GC–NPD","epa8141b","Soil or applicable water matrix, prepared using the target-specific extraction procedure","Solvent extraction equipment and capillary GC with FPD or NPD","µg/kg dry soil or µg/L water, with the target list and reporting limits","Extract and quantify selected organophosphorus insecticides such as chlorpyrifos, diazinon and malathion by gas chromatography.","Check calibration, blanks, surrogate and spike recoveries. Demonstrate separation of the selected target compounds.","Coelution can limit the number of compounds measured together. Check preservation and holding times for the chosen targets."],
  ["pesticides-acid-herbicides","Soil chemical","Chlorinated acid herbicides in soil and water","SW-846 8151A · derivatization and GC–ECD","epa8151a","Soil or aqueous sample, with preparation selected for the target forms","Solvent extraction and derivatization equipment, capillary GC–ECD","µg/kg dry soil or µg/L water, with hydrolysis and reporting basis stated","Extract selected herbicides such as 2,4-D, dicamba and MCPA. Derivatize before GC analysis and use hydrolysis when the selected procedure calls for it.","Check blanks, spike recovery and derivatization performance. Confirm unfamiliar identifications with an additional technique as specified.","The preparation determines which chemical forms the result represents. Use a separate method for glyphosate."],
  ["pesticides-soil-multiresidue","Soil chemical","Multiclass pesticide residues in agricultural soil","Modified QuEChERS and GC–MS/MS · research protocol","soilPesticideQuechers","Representative agricultural soil with moisture content and preparation documented","QuEChERS extraction and cleanup supplies, centrifuge and GC–MS/MS","µg/kg dry soil by compound, with analyte-specific quantification limits","Extract with a modified soil QuEChERS workflow, clean up the extract and use tandem mass spectrometry to measure the study’s 48 target pesticides, including selected triazines and pyrethroids.","Verify matrix-matched calibration, identification transitions, spike recovery, precision and quantification limits in the soils being tested.","The study validated a defined target list in a tropical agricultural soil matrix. Verify performance for local soils and each added compound."],
  ["pesticides-drinking-gcms","Water","Selected pesticides in drinking water by GC–MS","US EPA 525.3 · solid-phase extraction and capillary GC–MS","epa5253","Drinking water collected and preserved as specified by the method","Solid-phase extraction equipment and capillary GC–MS","µg/L by compound, with reporting limits","Concentrate semivolatile targets on a solid-phase extraction medium, elute the extract and measure compounds such as atrazine, simazine and alachlor by GC–MS.","Check reagent blanks, fortified samples, surrogates, internal standards and continuing calibration.","Check the method’s analyte list. The stated scope is drinking water."],
  ["pesticides-glyphosate","Water","Glyphosate in drinking water","US EPA 547 · direct aqueous injection HPLC and fluorescence","epa547","Drinking water collected and handled per the method","HPLC, post-column reaction system and fluorescence detector","Glyphosate in µg/L, with the reporting limit","Inject the aqueous sample, separate glyphosate chromatographically and use a post-column reaction to generate a fluorescent signal for quantification.","Run blanks and fortified samples. Check calibration, retention time and the stability of the post-column reaction.","Use a separate validated method if AMPA or glyphosate in soil is required."],
  ["pesticides-paraquat-diquat","Water","Paraquat and diquat in drinking water","US EPA 549.2 · liquid–solid extraction and HPLC–UV","epa5492","Drinking water collected in method-specified containers","Liquid–solid extraction equipment and HPLC with UV detection","Paraquat and diquat in µg/L, on the method-specified basis","Concentrate paraquat and diquat by liquid–solid extraction, elute them and separate by HPLC for UV measurement.","Check blanks, fortified samples, calibration and recovery through extraction.","Confirm container and handling requirements. Soil and other water matrices require separate method verification."],
  ["pesticides-filtered-water","Water","Pesticides and degradates in filtered surface water and groundwater","USGS 5–B11 · direct aqueous injection LC–MS/MS","usgs5b11","Filtered stream water or groundwater collected under the method","Method-specified filtration equipment and LC–MS/MS","µg/L by compound in the filtered fraction, with reporting limits","Inject a filtered sample into the LC–MS/MS system and quantify compounds against the published panel of 113 pesticides and 116 degradates.","Verify blanks, matrix spikes, internal standard response and compound identification criteria.","Report the filtered fraction explicitly. A separate sampling and analytical procedure is needed to include particle-bound residues."],
  ["pesticides-wastewater","Water","Organochlorine pesticides in wastewater","US EPA 608.3 · GC with halogen-specific detection","epa6083","Industrial or municipal wastewater collected as specified","Liquid–liquid extraction, cleanup equipment and GC with a halogen-specific detector","µg/L by compound, with reporting limits","Extract wastewater, clean up and concentrate the extract as needed, and use GC to determine listed organochlorine pesticides such as aldrin, dieldrin and endrin.","Check blanks, surrogates, spike recovery, calibration and confirmation as specified.","Check the method’s target list and the requirements of the applicable discharge monitoring program."]
];

// Original workflow summaries keyed to the FAO field-screening entries.
const fieldProtocols = {
  "field-texture": [
    "Moisten a small soil portion until it is workable, then try to form a ball.",
    "Press it between thumb and forefinger to make a ribbon. Note the length before it breaks and whether the soil feels gritty, smooth, or sticky.",
    "Use the FAO texture key to record an estimated class. Compare uncertain samples with a known reference or laboratory particle-size results."
  ],
  "excavation-density": [
    "Level the sampling surface, excavate to the selected depth, and retain all the removed soil.",
    "Fit an impermeable liner to the cavity. Measure the volume of water needed to fill it to the original surface.",
    "Determine the dry mass of the excavated soil using a suitable drying regime. Divide it by the measured cavity volume."
  ],
  "clod-density": [
    "Collect a coherent clod without breaking it. Dry it using the appropriate regime and record its dry mass.",
    "Coat it with wax, record the coated mass, and measure the volume of water displaced by the coated clod.",
    "Subtract the wax volume from the displacement volume, then divide dry soil mass by the corrected clod volume."
  ],
  "volumetric-moisture": [
    "Measure gravimetric water content on a dry-mass basis and obtain dry bulk density for the same soil layer.",
    "Multiply the gravimetric fraction (g/g) by dry bulk density and divide by water density. Use matching density units.",
    "Report the resulting volume fraction in m³/m³, or multiply it by 100 for percent by volume."
  ],
  "field-moisture-feel": [
    "Collect fresh samples at representative locations and several root-zone depths.",
    "Squeeze a sample into a ball, then try to form a ribbon. Note cohesion, loose grains, visible moisture, and staining on the hand.",
    "Compare observations with the FAO guide for that soil texture. Record the estimated moisture band and sampling depth."
  ],
  "soil-tension": [
    "Prepare and check the water-filled tensiometer according to its operating instructions.",
    "Install it at the target root-zone depth with good contact between the ceramic cup and the surrounding soil.",
    "Record stabilized suction in kPa and note the depth and time. Use a soil-specific retention curve if water content is needed."
  ],
  "field-ph-color": [
    "Prepare the soil sample for the chosen indicator or strip. For the strip variant, allow suspended particles to settle before reading.",
    "Apply the indicator or expose the strip to the prepared sample, then compare its color with the matching chart.",
    "Report the estimated pH band and the test variant. Confirm doubtful readings with a calibrated pH meter."
  ],
  "soil-ec-11": [
    "Check the conductivity meter with a reference solution. Combine equal numerical amounts of soil in grams and water in millilitres, such as 10 g and 10 mL.",
    "Mix the preparation and allow the soil to settle. The FAO guide calls for an EC reading at about 30 minutes.",
    "Report EC as a 1:1 result with the unit and temperature basis. Interpret it using guidance for that extraction ratio."
  ],
  "visual-salinity": [
    "Walk affected and nearby apparently healthy areas. Note surface crystals or crusting and patchy crop growth.",
    "Map where the symptoms occur and record drainage or irrigation patterns that may explain them.",
    "Sample representative affected and reference areas. Use an appropriate EC test to check whether the visual symptoms indicate salinity."
  ],
  "earthworms": [
    "Mark a known area and record the depth to be sampled. Check surface litter separately if present.",
    "Excavate the soil and hand-sort the sample over a tray or sheet. Tally earthworms and note any additional extraction technique used.",
    "Divide the count by sampled area and report worms per m² with depth, soil moisture, and sampling date."
  ],
  "litter-decomposition": [
    "Label and weigh comparable tea bags before placing them at a consistent depth in replicated plots.",
    "Retrieve them after a defined exposure. The FAO example uses about three months. Remove adhering soil without losing litter.",
    "Dry and reweigh consistently, then report percentage mass loss for the exposure period. Flag damaged bags."
  ],
  "active-carbon": [
    "Prepare comparable soil aliquots and a reagent blank. React the soil with potassium permanganate under a fixed preparation and timing scheme.",
    "Let particles settle and compare the remaining purple color. Use calibrated colorimetry and the specified procedure when quantification is required.",
    "Record visual comparisons as qualitative. For a quantitative result, state the method and dry-mass basis."
  ],
  "soda-lime-respiration": [
    "Set up replicated soil chambers and a control isolated from the soil. Precondition and weigh the absorber under the controlled procedure.",
    "Expose the absorber in the sealed chambers and control for a recorded period. The FAO example uses about 24 hours.",
    "Recover, dry, and reweigh the absorber. Apply the control and method corrections, then normalize by chamber area and elapsed time."
  ],
  "visual-structure": [
    "Take a representative spade sample and record the depth and moisture condition.",
    "Break it apart using the texture-appropriate handling described in the source. Observe aggregate size and firmness and inspect a fresh face for visible pores.",
    "Record structure and porosity observations together, and compare samples taken under similar moisture conditions."
  ],
  "visual-mottles": [
    "Expose a fresh soil face at the target depth and note its background color.",
    "Record the color and relative abundance of mottles at each observed depth.",
    "Compare with the FAO visual guide and site drainage history. Record the observation separately from any drainage interpretation."
  ],
  "rooting-depth": [
    "Expose a representative soil profile and follow roots and old root channels downwards.",
    "Look for a restrictive layer and changes such as sideways roots, a firm pan, abrupt texture change, or signs of prolonged wetness.",
    "Measure the depth to the suspected restriction. Record the evidence and distinguish potential depth from observed rooting depth."
  ]
};
