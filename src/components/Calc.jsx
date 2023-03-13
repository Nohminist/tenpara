import TopTab from "./TopTab";
import CalcSt from "./CalcSt"
import EffAdd from "./EffAdd"
import TrmToF from "./TrmToF"

const AllyEnmy = ['Ally', 'Enmy']
const HTADSI = ['HP', 'TP', '攻撃力', '防御力', '速力', '精神力']
const HTADSIM = ['HP', 'TP', '攻撃力', '防御力', '速力', '精神力', '移動力']
const AmpList = [
  '全', '物理', '体技', '波動', '魔法',
  '炎属性', '水属性', '氷属性', '風属性', '岩属性', '雷属性', '冥属性', '無属性',
  '炎属性物理', '水属性物理', '氷属性物理', '風属性物理', '岩属性物理', '雷属性物理', '冥属性物理', '無属性物理',
  '炎属性体技', '水属性体技', '氷属性体技', '風属性体技', '岩属性体技', '雷属性体技', '冥属性体技', '無属性体技',
  '炎属性波動', '水属性波動', '氷属性波動', '風属性波動', '岩属性波動', '雷属性波動', '冥属性波動', '無属性波動',
  '炎属性魔法', '水属性魔法', '氷属性魔法', '風属性魔法', '岩属性魔法', '雷属性魔法', '冥属性魔法', '無属性魔法',
  'スキル1', 'スキル2', 'スキル3',
]
const RsList = ['無属性', '炎属性', '水属性', '氷属性', '風属性', '岩属性', '雷属性', '冥属性', '睡眠', '暗闇', '呪詛', '麻痺', '混乱', '魅了', '物理封印', '体技封印', '波動封印', '魔法封印', '移動封印', '行動封印']

let MRank = {
  リーニャ: 8,
  テーセツ: 7,
  ジャハラ: 7,
  クォンツィ: 7,
  ジェネラス: 7,
  ペイシェ: 7,
  ヒューム: 7,
  アンノウン: 2,
}

const ADSIBff = { 攻撃力: 15, 防御力: 25, 速力: 20, 精神力: 15 }

let t = 1

// const TrmToF = (Trm, Awk) => {

//   let ToF = false

//   if (
//     (!Trm) ||
//     (Trm === 'Awk>=1' && Awk >= 1) ||
//     (Trm === 'Awk>=2' && Awk >= 2) ||
//     (Trm === 'Awk>=3' && Awk >= 3) ||
//     (Trm === 'Awk>=4' && Awk >= 4) ||
//     (Trm === 'Awk=5' && Awk >= 5) ||
//     (Trm === 'Awk>=3&Awk<=4' && Awk >= 3 && Awk <= 4)

//   ) {
//     ToF = true
//   }

//   return ToF
// }







const data = {
  Chr: {
    ソフィア: {
      森のツンデレ剣士: {
        Rr: 'B', Gr: 'リーニャ',
        St: {
          Bas: { HP: 713, TP: 197, 攻撃力: 296, 防御力: 244, 速力: 233, 精神力: 167, 移動力: 2 },//未
          ExB: { HP: 5, TP: 5, 攻撃力: 10, 防御力: 4, 速力: 5, 精神力: 0 },//未
          ExP: {},
          UqP: { 速力: 5 },
        },
        Rs: { 炎: 50, 風: 50, 岩: -50, 冥: -50, 睡眠: -100, 毒: -100, 麻痺: 50, 物理封印: 50, 移動封印: 100 },
        Skl: ['焔斬り', '紅焔斬り', '火炎波'],
        Wepn: 'アンティグソード', Armr: 'アンティグローブ', Bddy: 'サンショクグラジェラス',//'アンティグガイ'
        Ab: {},
      },
      あなたの傍にいたいから: {
        Rr: 'S', Gr: 'リーニャ',
        St: {
          Bas: { HP: 628, TP: 224, 攻撃力: 354, 防御力: 255 + 0.1, 速力: 252, 精神力: 171, 移動力: 2 },
          ExB: { HP: 7, TP: 6, 攻撃力: 12, 防御力: 6, 速力: 6, 精神力: 0 },
          ExP: { HP: 160, 攻撃力: 70, 移動力: 1 },
          UqP: { 攻撃力: 15, 速力: 20 },
        },
        Rs: { 炎: 50, 風: 50, 岩: -50, 冥: -50, 睡眠: -100, 毒: -100, 麻痺: 50, 物理封印: 50, 移動封印: 100 },
        Skl: ["紅焔突き", "獄炎刃", "炎円演舞"],
        Wepn: 'アンティグソード', Armr: 'アンティグローブ', Bddy: 'アンティグガイ',
        Ab: {
          ときどきTP回復: 'Awk>=1',
          '炎属性耐性+25': 'Awk>=2',
          '炎円演舞威力+5%': 'Awk>=3&Awk<=4',
          '風属性耐性+25': 'Awk>=4',
          '炎円演舞威力+10%': 'Awk=5',
        }

        // Ab: [
        //   {'ときどきTP回復':''},
        // ]
      },
      ひと夏の思い出作り: {
        Rr: 'S', Gr: 'リーニャ',
        St: {
          Bas: { HP: 713, TP: 197, 攻撃力: 296, 防御力: 244, 速力: 233, 精神力: 167, 移動力: 2 },
          ExB: { HP: 7, TP: 6, 攻撃力: 12, 防御力: 6, 速力: 6, 精神力: 0 },
          ExP: {},
          UqP: { 攻撃力: 15, 移動力: 1 },
        },
        Rs: { 炎: 50, 風: 50, 岩: -50, 冥: -50, 睡眠: -100, 毒: -100, 麻痺: 50, 物理封印: 50, 移動封印: 100 },
        Skl: ["回転雷電", "夏雷絶斬", "シャイバーサーク"],
        Wepn: 'アンティグソード', Armr: 'ソフィアの麦わら帽子', Bddy: 'アンティグガイ',
        UqP: ['アゲアゲサマー！'],
        Ab: {
          '真夏のフィーバータイム！': 'Awk>=1',
          '回転雷電威力+10%': 'Awk>=2',
          '氷属性耐性+25': 'Awk>=2',
          'シャイバーサーク威力+5%': 'Awk>=3&Awk<=4',
          '夏雷絶斬威力+10%': 'Awk>=4',
          '風属性耐性+25': 'Awk>=4',
          'シャイバーサーク威力+10%': 'Awk=5',
        }
      },
      一番いいのを頼むわ: {
        Rr: 'S', Gr: 'リーニャ',
        St: {
          Bas: { HP: 713, TP: 197, 攻撃力: 296, 防御力: 244, 速力: 233, 精神力: 167, 移動力: 2 },//未
          ExB: { HP: 5, TP: 5, 攻撃力: 10, 防御力: 4, 速力: 5, 精神力: 0 },//未
          ExP: {},
          UqP: { HP: 30, 攻撃力: 15, 速力: 15 },
        },
        Rs: { 炎: -50, 氷: 50, 岩: 50, 冥: -50, 睡眠: 100, 暗闇: -100, 麻痺: -100, 混乱: 50, 物理封印: 50 },
        Skl: ["森の旋風", "手荒い歓迎", "奇跡の体現者"],
        Wepn: 'アンティグソード', Armr: 'アンティグローブ', Bddy: 'アンティグガイ',
        Ab: {
          予見する未来: 'Awk>=1',
          '森の旋風威力+10%': 'Awk>=2',
          '氷属性耐性+25': 'Awk>=2',
          神威: 'Awk>=3',
          '奇跡の体現者威力+5%': 'Awk>=3&Awk<=4',
          '手荒い歓迎威力+10%': 'Awk>=4',
          '岩属性耐性+25': 'Awk>=4',
          驚天動地: 'Awk=5',
          '奇跡の体現者威力+10%': 'Awk=5',
        },
      },
    },

  },
  Skl: {
    焔斬り: { Elm: '炎', Knd: '物理', Mag: 180 },
    紅焔斬り: { Elm: '炎', Knd: '物理', Mag: 270 },


    紅焔突き: { Elm: '炎', Knd: '物理', Mag: 240, Ara: [2, 2, 2, 2] },
    獄炎刃: { Elm: '炎', Knd: '物理', Mag: 405 },
    炎円演舞: { Elm: '炎', Knd: '物理', Mag: 405, Ara: [2, 3, 3, 3] },

    回転雷電: { Elm: '雷', Knd: '物理', Mag: 352.5, Ara: [2, 3, 3, 3] },
    夏雷絶斬: { Elm: '雷', Knd: '物理', Mag: 427.5 },
    シャイバーサーク: { Elm: '雷', Knd: '物理', Mag: 397.5, Ara: [3, 5, 5, 5] },

    森の旋風: {
      Knd: '物理', Elm: '風', Mag: 330, Ara: [3, 4, 4, 4],
      Txt: '範囲内の敵全てに威力330%の風属性物理ダメージを与え、物理威力を上げ(効果2ターン)、もう一度行動できる。クールターン数:2'
    },
    手荒い歓迎: {
      Knd: '物理', Elm: '無', Mag: 60, Num: 5, Ara: [3, 4, 4, 4],
      Txt: '範囲内の敵全てに威力60%の物理ダメージを5回与え、このスキルの与ダメージ回数を1増やす(効果5ターン)。使用回数制限:5'
    },
    奇跡の体現者: {
      Knd: '物理', Elm: '風', Mag: 390, Ara: [4, 9, 12, 12],
      Txt: '範囲内の敵全てに威力390%の風属性物理ダメージを与え、2マス以内のなかま全ての攻撃力・精神力を上げ(効果3ターン)、自分に回避を付与する(回避率100%)(効果2ターン)。クールターン数:1',
      Union: {
        Ara: ['周囲', 2],
        Txt: '条件:範囲内にリーニャかアンノウンのなかまが合計2体以上いる場合\n\n自分となかま全てに回避を付与する(回避率100%)(効果2ターン)'
      }
    },

    火炎波: { Elm: '炎', Knd: '波動', Mag: 0.5, Add: 0.5, Ara: [2, 3, 3, 3] },


  },
  Ab: {
    'アゲアゲサマー！': {
      Txt: '10ターン目までの奇数ターンの行動開始時、攻撃力を上げる。(効果3ターン)',
      Eff: {
        攻撃力上昇: { Trm: 't=1|3|5|7|9', JT: 3 },
      }
    },
    驚天動地: {
      Txt: '',
    },

    神威: {
      Txt: '',
    },

    ときどきTP回復: {

    },
    '真夏のフィーバータイム！': {
      Txt: 'HPが100%の時の行動開始時、クリティカル率を25上げ、被ダメージを20%軽減する。(効果1ターン)',
      Eff: {
        クリティカル率上昇: { V: 25, JT: 1 },//Trm: 'HP=100%',
        被ダメージ軽減: { Trm: 'HP=100%', V: 20, JT: 1 },
      }
    },
    予見する未来: {
      Txt: '',
    },

  },
  Wepn: {
    アンティグソード: {
      St: { HP: 45, 攻撃力: 14 }, Srs: 'アンティグ', UqOp: '物理威力+4%', Op: 'リーニャ物理威力+7%',
      OpList: ["リーニャ物理威力+7%", "炎属性物理威力+7%", "炎属性威力+6%", "物理威力+6%", "HP+70"],
    },
  },
  Armr: {
    アンティグローブ: {
      St: { 防御力: 30 }, Srs: 'アンティグ', UqOp: '行動封印耐性+10%', Op: '防御力+12',
      OpList: ["行動封印耐性+5%", "雷属性耐性+4%", "冥属性耐性+4%", "HP+37", '防御力+12'],
    },
    ソフィアの麦わら帽子: {
      St: { 防御力: 10 }, UqOp: 'シャイバーサーク威力+4%', Op: '氷・風属性耐性+2%',
      OpList: ["シャイバーサーク威力+2%", "氷・風属性耐性+2%", "移動封印耐性+4%", "氷属性耐性+3%", "風属性耐性+3%", "HP+11", "防御力+6", "速力+5"],
    },
    ライサの帽子: {
      St: { 防御力: 10 }, UqOp: '炎・冥属性耐性+2%', Op: '氷刃絶華威力+4%',
      OpList: ["氷刃絶華威力+4%", "炎・冥属性耐性+2%", "睡眠耐性+4%", "冥属性耐性+3%", "炎属性耐性+3%", "HP+11", "防御力+6", "速力+5"],
    },
  },
  Bddy: {
    アンティグガイ: { St: {}, Srs: 'アンティグ', UqOp: 'HP+20', Op: '物理威力+7%' },
    サンショクグラジェラス: { St: {}, Srs: 'アンティグ', UqOp: '炎・氷・風属性威力+5%', Op: '炎・氷・風属性威力+4%' },
  },
  Srs: {
    アンティグ1: { St: { HP: 50, 防御力: 50 } },
    アンティグ2: { St: { 移動力: 1 } },




  },
  Enmy: {
    'クウダケ(EXバトル超地獄級)': {
      Lv: 70,
      St: { Bas: { HP: 38055, TP: null, 攻撃力: 580, 防御力: 585, 速力: 342, 精神力: 382, 移動力: 2 } },
      Rs: { 炎: -50, 水: -50, 岩: 50, 雷: 50, 睡眠: 100, 暗闇: 100, 呪詛: 100, 麻痺: 100, 混乱: 100, 魅了: 100, 物理封印: 100, 体技封印: 100, 波動封印: 100, 魔法封印: 100, 移動封印: 100, 行動封印: 100 },

    },

    'メンダコキング(EXバトル超地獄級)': {

      St: { Bas: { HP: 45525, TP: null, 攻撃力: 625, 防御力: 598, 速力: 379, 精神力: 408, 移動力: 2 } },
      Rs: { 炎: -50, 水: -50, 岩: 50, 雷: 50, 睡眠: 100, 暗闇: 100, 呪詛: 100, 麻痺: 100, 混乱: 100, 魅了: 100, 物理封印: 100, 体技封印: 100, 波動封印: 100, 魔法封印: 100, 移動封印: 100, 行動封印: 100 },

    },
  },
}

let C = {}

Object.keys(data.Chr).forEach((cName1, index) => {
  Object.keys(data.Chr[cName1]).forEach((cName2, index) => {

    let cNameF = cName1 + '_' + cName2

    if (data.Chr[cName1][cName2].Rr === 'S') {
      C[cNameF] = {
        Ally: {
          Gr: data.Chr[cName1][cName2].Gr,
          Awk: 5,
          St: { Bas: {}, Org: {}, Btl: {} },
          Wepn: data.Chr[cName1][cName2].Wepn,
          Armr: data.Chr[cName1][cName2].Armr,
          Bddy: data.Chr[cName1][cName2].Bddy,
          Srs: {},
          Skl: data.Chr[cName1][cName2].Skl,
          Skl2: [
            { Nam: '' },
            { Nam: '' },
            { Nam: '' },
          ],
          Ab: data.Chr[cName1][cName2].Ab
        },
        Enmy: {
          St: {
            Org: {
              'HP': 0, 'TP': 0, '攻撃力': 0, '防御力': 0, '速力': 0, '精神力': 0, '移動力': 0
            }, Btl: {}
          },

        }
      }
    }










  })
})


let Op = {}
for (let WAB of ['Wepn', 'Armr', 'Bddy']) {
  Object.keys(data[WAB]).forEach((WABName, index) => {
    Op[WABName] = [data[WAB][WABName].UqOp, data[WAB][WABName].Op, data[WAB][WABName].Op, data[WAB][WABName].Op]
  })
}
// console.log(Op)



const floor = (V) => {
  return (Math.floor(Math.round(V * 10000) / 10000))
}
const round = (V) => {//四捨五入で0.5は切捨て
  return (Math.ceil(V - 0.5))
}
const min0max100 = (V) => {
  return (Math.min(Math.max(V, 0), 100))
}
const isIncludes = (arr, target) => arr.some(el => target.includes(el));// 複数の特定要素のうちひとつでも当てはまったら true を返す


export default function Calc() {

  Object.keys(C).forEach((cNameF, index) => {
    let cName1 = cNameF.split('_')[0]
    let cName2 = cNameF.split('_')[1]
    let Awk = C[cNameF].Ally.Awk
    let SklList = data.Chr[cName1][cName2].Skl



    let Wepn = C[cNameF].Ally.Wepn
    let Armr = C[cNameF].Ally.Armr
    let Bddy = C[cNameF].Ally.Bddy

    let Enmy = 'クウダケ(EXバトル超地獄級)'

    C[cNameF].Ally.Crr = 0


    AllyEnmy.forEach((AE) => {
      C[cNameF][AE].威力 = {}
      C[cNameF][AE].耐性 = {}
      AmpList.forEach((name) => C[cNameF][AE].威力[name] = 0)

      C[cNameF][AE].Eff = {}
    })

    RsList.forEach((name) => {
      C[cNameF].Ally.耐性[name] = data.Chr[cName1][cName2].Rs[name.split('属性')[0]] ? data.Chr[cName1][cName2].Rs[name.split('属性')[0]] : 0
      C[cNameF].Enmy.耐性[name] = data.Enmy[Enmy].Rs[name.split('属性')[0]] ? data.Enmy[Enmy].Rs[name.split('属性')[0]] : 0
    })

    C[cNameF].Ally.Eff = {
      // 攻撃力上昇: [{ N: 'テスト', JT: 1 }],
      // 移動力上昇: [{ N: 'テスト', V: 1, JT: 1 }],
    }




    CalcSt({
      C: C,
      data: data,
      cNameF: cNameF,
      MRank: MRank,
      Op: Op,
      isIncludes: isIncludes,
      AmpList: AmpList,
      RsList: RsList,
      t: t
    })//自キャラの装備無/装備有ステータス


    HTADSIM.forEach((S) => {//敵キャラの装備有ステータス
      C[cNameF].Enmy.St.Org[S] = data.Enmy['クウダケ(EXバトル超地獄級)'].St.Bas[S]
    })


    Object.keys(C[cNameF].Ally.Ab).forEach((AbName) => {//アビリティ
      if (TrmToF({ Trm: C[cNameF].Ally.Ab[AbName], Awk: Awk })) { //アビ習得条件に合っているなら

        let V = ''
        if (AbName.includes('+')) {
          V = Number(AbName.split('+')[1].split('%')[0]) //効果量
        }

        if (AbName.includes('属性耐性+')) {
          let Elm = AbName.split('耐性+')[0]
          C[cNameF].Ally.耐性[Elm] += V

        } else if (AbName.includes('威力+')) {
          let SklName = AbName.split('威力+')[0]
          let SklNum = SklList.indexOf(SklName) + 1
          C[cNameF].Ally.威力['スキル' + SklNum] += V

        } else {

          EffAdd(C, data, cNameF, t, AbName)

        }
      }
    })

















    //戦闘時ステータス
    AllyEnmy.forEach((AE) => {
      C[cNameF][AE].StMlt = {}//ステータスのバフ枠

      HTADSIM.forEach((S) => {
        C[cNameF][AE].StMlt[S] = 0//ステータスのバフ乗算
        C[cNameF][AE].St.Btl[S] = C[cNameF][AE].St.Org[S]

        if (C[cNameF][AE].Eff[S + '上昇']) {
          if (S === '移動力') {
            C[cNameF][AE].St.Btl[S] += C[cNameF][AE].Eff[S + '上昇'].length
          } else {
            C[cNameF][AE].StMlt[S] = C[cNameF][AE].Eff[S + '上昇'].length * ADSIBff[S]
            C[cNameF][AE].St.Btl[S] *= (100 + C[cNameF][AE].StMlt[S]) / 100
            C[cNameF][AE].St.Btl[S] = round(C[cNameF][AE].St.Btl[S])
          }
        }
      })
    })


    //ダメージ
    C[cNameF].Ally.Dmg = []
    C[cNameF].Ally.Skl.forEach((SklName, i) => {

      C[cNameF].Ally.Skl2[i].Dmg = 0
      C[cNameF].Ally.Skl2[i].Amp = 0
      C[cNameF].Ally.Skl2[i].Elm = data.Skl[SklName].Elm
      let Elm = C[cNameF].Ally.Skl2[i].Elm + '属性'
      let SklNum = i + 1


      if (data.Skl[SklName].Knd === '物理') {



        C[cNameF].Ally.Skl2[i].Dmg = C[cNameF].Ally.St.Btl.攻撃力 / 2
        C[cNameF].Ally.Skl2[i].Dmg *= data.Skl[SklName].Mag / 100

        C[cNameF].Ally.Skl2[i].Amp += C[cNameF].Ally.威力.物理 + C[cNameF].Ally.威力[Elm] + C[cNameF].Ally.威力[Elm + '物理']
        if (C[cNameF].Ally.威力['スキル' + SklNum]) {
          C[cNameF].Ally.Skl2[i].Amp += C[cNameF].Ally.威力['スキル' + SklNum]
        }
        C[cNameF].Ally.Skl2[i].Dmg *= (100 + C[cNameF].Ally.Skl2[i].Amp) / 100

        C[cNameF].Ally.Skl2[i].Dmg *= (100 - C[cNameF].Enmy.耐性[Elm]) / 100


      }



      C[cNameF].Ally.Skl2[i].Dmg = round(C[cNameF].Ally.Skl2[i].Dmg)

    })






  })//Object.keys(C).forEachここまで
  console.log(C)


  return (
    <TopTab
      data={data}
      C={C}
    />

  )
}