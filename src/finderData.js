export const FINDER_VERSION='1.0';

const M=(type,category,goals,secondary,skinTypes,routineLevels,roles,evidence='C',flags=[])=>({
  type,category,goals,secondary,skinTypes,routineLevels,roles,evidence,flags
});

export const finderMeta={
'hubislab-eternal':M('skincare','agewell',['lines','firmness'],['hydration','eye'],['all'],['balanced'],['targeted','extra'],'C',['marketing_caution']),
'medicube-pdrn':M('skincare','pdrn',['hydration','barrier'],['firmness','glow'],['all'],['essential','balanced'],['base','targeted'],'C'),
'iope-xmd-stem-iii':M('skincare','pdrn',['hydration','firmness'],['barrier','pores','glow'],['all'],['balanced','advanced'],['targeted'],'C',['manufacturer_clinical']),
'iope-retinol-rx-2':M('skincare','agewell',['lines','firmness','texture'],['pores'],['normal','combination','oily'],['advanced'],['targeted'],'A',['retinoid','strong_active']),
'aestura-atobarrier365-cream':M('skincare','barrier',['barrier','hydration'],['soothing'],['dry','sensitive','normal'],['essential','balanced'],['base'],'B'),
'aestura-hydro-soothing-cream':M('skincare','barrier',['hydration','soothing'],['barrier'],['combination','oily','sensitive','normal','dry'],['essential','balanced'],['base'],'B'),
'aestura-cera-ha-serum':M('skincare','barrier',['hydration','barrier'],['glow'],['all'],['essential','balanced'],['base','targeted'],'B'),
'biodance-caviar-pdrn-capsule-cream':M('skincare','pdrn',['hydration','firmness'],['barrier','glow'],['dry','normal','combination'],['balanced'],['base','targeted'],'C',['manufacturer_clinical']),
'biodance-caviar-pdrn-bubble-booster':M('skincare','pdrn',['hydration','glow'],['firmness'],['all'],['advanced'],['extra'],'C'),
'biodance-caviar-pdrn-toner-pad':M('skincare','pdrn',['hydration','texture'],['glow','barrier'],['all'],['balanced'],['extra'],'C',['mechanical_irritation']),
'biodance-caviar-pdrn-eye-patch':M('skincare','eye',['eye','hydration'],['glow'],['all'],['balanced'],['extra'],'C',['eye_area']),
'sulwhasoo-ginseng-cream':M('skincare','agewell',['firmness','lines'],['hydration'],['all'],['balanced'],['base','targeted'],'C',['premium']),
'sulwhasoo-ginseng-serum':M('skincare','agewell',['firmness','lines'],['glow'],['all'],['balanced','advanced'],['targeted'],'C',['premium']),
'genabelle-pdrn-cream':M('skincare','pdrn',['hydration','barrier'],['firmness','soothing'],['dry','normal','combination'],['balanced'],['base','targeted'],'C',['fragrance','sensitive_conditional']),
'genabelle-pdrn-hyper-boost':M('skincare','pdrn',['hydration'],['barrier','soothing'],['all'],['balanced','advanced'],['targeted'],'C',['needs_verification']),
'axis-y-triple-pdrn':M('skincare','pdrn',['barrier','hydration'],['soothing','firmness'],['dry','sensitive','normal','combination'],['balanced'],['targeted'],'C',['emerging_evidence']),
'axis-y-panthenol-10':M('skincare','barrier',['barrier','soothing'],['hydration'],['dry','sensitive','normal','combination'],['essential','balanced'],['base'],'B'),
'axis-y-dark-spot':M('skincare','pigment',['pigmentation'],['glow','hydration'],['all'],['essential','balanced'],['targeted'],'B',['spf_education']),
'skin1004-centella-ampoule':M('skincare','soothe',['soothing'],['hydration'],['all'],['essential'],['base'],'B'),
'skin1004-probio-cica':M('skincare','barrier',['barrier','soothing'],['hydration','firmness'],['dry','sensitive','normal','combination'],['balanced'],['base','targeted'],'B'),
'anua-pdrn-ha-serum':M('skincare','pdrn',['hydration','glow'],['barrier'],['all'],['balanced'],['targeted'],'C',['fish_source']),
'haruharu-rose-pdrn':M('skincare','pdrn',['firmness','lines'],['hydration','glow'],['normal','dry','combination'],['advanced'],['targeted'],'C',['retinoid','needs_verification','strong_active']),
'haruharu-nad-mist':M('skincare','barrier',['hydration','barrier'],['glow'],['all'],['essential','balanced'],['base','extra'],'C',['emerging_evidence']),
'medipeel-phyto-ex-pdrn-eye':M('skincare','eye',['eye','hydration'],['lines','firmness'],['all'],['balanced'],['extra'],'U',['eye_area','needs_verification']),
'thesaem-aloe-99':M('skincare','soothe',['soothing','hydration'],[],['all'],['essential'],['base','extra'],'B',['sensitive_conditional']),
'nature-republic-argan-hair':M('hair','hair',['dry_hair','smoothing'],['shine','manageability'],['all'],['essential'],['base','targeted'],'B'),
'floland-eyelash-serum':M('skincare','eye',['lash_conditioning'],[],['all'],['essential'],['extra'],'U',['eye_area','needs_verification']),
'labo-h-scalp-strengthening':M('hair','hair',['scalp_care','cleansing'],[],['all'],['essential'],['base'],'C'),
'mise-en-scene-perfect-serum':M('hair','hair',['smoothing','shine'],['dry_hair','manageability'],['all'],['essential'],['targeted'],'B'),
'abib-pdrn-retinal-eye-patch':M('skincare','eye',['eye','hydration','glow'],['firmness','lines'],['all'],['advanced'],['extra'],'C',['retinoid','eye_area','strong_active']),
};

export const goalLabels={
 hu:{lines:'Ráncok és finom vonalak',firmness:'Feszesség',pigmentation:'Pigmentfoltok / egyenetlen tónus',hydration:'Szárazság / vízhiány',barrier:'Barrier / érzékenység',texture:'Bőrtextúra',glow:'Ragyogás',eye:'Szemkörnyék',soothing:'Nyugtatás',dry_hair:'Száraz haj',smoothing:'Simaság',shine:'Fény',scalp_care:'Fejbőr',general_wellness:'Általános wellness',focus_support:'Fókusz',womens_wellness:'Női jóllét',energy_support:'Energia',relaxation_support:'Relaxáció'},
 en:{lines:'Lines',firmness:'Firmness',pigmentation:'Pigmentation',hydration:'Hydration',barrier:'Barrier / sensitivity',texture:'Texture',glow:'Glow',eye:'Eye area',soothing:'Soothing',dry_hair:'Dry hair',smoothing:'Smoothing',shine:'Shine',scalp_care:'Scalp care',general_wellness:'General wellness',focus_support:'Focus',womens_wellness:"Women's wellness",energy_support:'Energy',relaxation_support:'Relaxation'},
 de:{lines:'Falten',firmness:'Festigkeit',pigmentation:'Pigmentierung',hydration:'Feuchtigkeit',barrier:'Barriere / Sensibilität',texture:'Hauttextur',glow:'Glow',eye:'Augenpartie',soothing:'Beruhigung',dry_hair:'Trockenes Haar',smoothing:'Glättung',shine:'Glanz',scalp_care:'Kopfhaut',general_wellness:'Allgemeines Wellness',focus_support:'Fokus',womens_wellness:'Wohlbefinden für Frauen',energy_support:'Energie',relaxation_support:'Entspannung'}
};
