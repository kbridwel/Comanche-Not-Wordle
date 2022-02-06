import { CONFIG } from './config'

export const WORDS = [
  'nʉnʉʉ',
  'nitui',
  'yʉʉnʉ',
  'haitsi̠',
  'potsu',
  'tahkwi',
  'tuuku',
  'hoikwa',
  'obotu',
  'yʉhnʉ',
  'nahuu',
  'pooro',
  'naisa',
  'tsiwai',
  'maʔai',
  'tsaatʉ',
  'nooma',
  'nohko',
  'paapi',
  'kʉarʉ',
  'inapʉ̠',
  'kwiʔta',
  'nooyo',
  'kaatʉ̠',
  'tsoomo',
  'natsuu',
  'arʉka',
  'kuhtsu',
  'pʉesʉ',
  'maakwe',
  'nʉʉmʉ̠',
  'tʉkii',
  'ohape',
  'taatsa',
  'tahma',
  'katʉi',
  'maabo',
  'kuhma',
  'kukaa',
  'tsiyaa',
  'taasi',
  'wʉtui',
  'kʉʉka',
  'maaka',
  'huupi',
  'ubutu',
  'noopʉ̠',
  'karoo',
  'muhyʉ',
  'yaarʉ',
  'peekwi',
  'tsumai',
  'tuupʉ̠',
  'ikʉ̠hu',
  'naʔru',
  'hʉʉti',
  'tʉʔii',
  'soomo',
  'peeka',
  'tsohkwe',
  'tahka',
  'ʉtsumi',
  'nuarʉ̠',
  'iniku',
  'sʉatʉ',
  'hʉʉtʉ',
  'unaru̠',
  'urʉkwʉ̠',
  'woosa',
  'kahni',
  'kohno',
  'tseena',
  'hʉʉbi',
  'hayats',
  'haawaḵ',
  'pihka̠',
  'haaki',
  'ʉmarʉ',
  'siiko',
  'uruka',
  'kootse',
  'pʉʉka',
  'natsaa',
  'tʉsaa',
  'wihnu',
  'orʉkwʉ̠',
  'sitoo',
  'saapʉ̠',
  'ekawi',
  'muubi',
  'huutsi',
  'uwihi',
  'sahki̠',
  'kwasia',
  'tatua',
  'kwiitʉ̠',
  'murai',
  'taiʔi',
  'naʔaa',
  'taaki',
  'weeki',
  'tootsa',
  'tʉʉpe',
  'noorʉ',
  'muura',
  'sutai',
  'ʉnʉ̠ha',
  'yuʔai',
  'kwihne',
  'wahta',
  'oyorʉ',
  'pinai',
  'sooni',
  'waatsʉ',
  'nʉepi',
  'pokoo',
  'huhku̠',
  'waapi',
  'eka̠sa',
  'saapʉ',
  'tatoo,
  'nimai',
  'tanua',
  'nʉetʉ',
  'tsiira',
  'kuitsi̠'',
  'pahmu',
  'manoo',
  'wiyaa',
  'tʉnoo',
  'ʉʔbʉi',
  'saatʉ',
  'tsoapʉ̠',
  'kʉtaa',
  'ekapa',
  'meeku',
  'kahuu',
  'taʔoo',
  'muhpe',
  'hahka',
  'kaiwa',
  'tuhui',
  'mianʉ̠',
  'oyetʉ̠',
  'kaape',
  'taama',
  'kʉhwʉ',
  'oʔoʔa',
  'mutsii',
  'tsiapʉ̠',
  'huuna',
  'pohya',
  'haame',
  'pokaa',
  'kokaa',
  'huuku',
  'waapi̠',
  'kaarʉ',
  'taina̠',
  'toorʉ',
  'waatsa̠',
  'uʔaru',
  'wihna',
  'tʉetʉ',
  'muhka',
  'noobi',
  'piabʉ̠',
  'maatu',
  'taabe',
  'sinai',
  'kiipʉ̠',
  'koobe',
  'xsg̱ooḵ',
  'toomo',
  'kuhna̠',
  'nehki̠',
  'pʉkai',
  'natai',
  'suapʉ',
  'marʉa',
  'tʉhtsʉ',
  'miana̠',
  'pʉʉyʉ',
  'urarʉ',
  'woobi',
  'haʔii',
  'tʉboo',
  'topai',
  'paapi̠',
  'pehka',
  'puuku',
  'siipʉ̠',
  'yʉʉtsʉ',
  'tʉawe',
  'kesua',
  'sootʉ̠',
  'marʉʉ',
  'kahpe',
  'eʔree',
  'ʉkʉ̠sʉ',
  'ooʔri',
  'tʉʉpi',
  'waʔoo',
  'turʉe',
  'atapu',
  'saanʉ̠',
  'hakai',
  'kʉnua',
  'weesi',
  'nakia',
  'waata̠',
  'keyuu',
  'miarʉ',
  'poiya',
  'paanʉ̠',
  'hunai',
  'pʉʉpi',
  'woone',
  'kwiipʉ̠',
  'uniku',
  'sarii',
  'ʉkitsi',
  'hooki̠',
  'tahwi',
  'soona̠',
  'yʉʉkwi',
  'wohya',
  'inasʉ',
  'heekwi',
  'tsaaku',
  'surʉʉ',
  'nahyu',
  'naibi',
  'naroʔi',
  'itsee',
  'tatsii',
  'nuraa',
  'tuetsi̠',
  'kuuna̠',
  'tʉboo',
  'suapʉ̠',
  'usuni',
  'setʉʉ',
  'mabʉa',
  'piitsi',
  'sikoo',
  'kootsa',
  'pʉarʉ',
  'paitsi',
  'ʉkʉna',
  'nʉʉmʉ',
  'taibo',
  'poʔko',
  'tʉhka',
  'yʉʔha',
  'miitsi',
  'piapʉ̠',
  'woʔne',
  'tuurʉ',
  'kuutsu',
  'masʉa',
  'naboo',
  'inakwʉ̠',
  'pusia',
  'sitʉʉ',
  'naaka',
  'suabe',
  'poorʉ',
  'pʉʉra',
  'nuuki',
  'seekwi',
  'taitʉ',
  'nokia',
  'mawai',
  'naiya',
  'itʉkwʉ̠',
  'saabe',
  'poosa',
  'noona',
  'onʔaa',
  'isapʉ̠',
  'mootso',
  'huuba',
  'kooʔi',
  'kweyai',
  'mooka',
  'taama̠',
  'tuupa',
  'puʔtsi',
  'tsuuwi',
]

if (CONFIG.normalization) {
  WORDS.forEach((val, i) => (WORDS[i] = val.normalize(CONFIG.normalization)))
}

function shuffle(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
}

if (CONFIG.shuffle) {
  shuffle(WORDS)
}
