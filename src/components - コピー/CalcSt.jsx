import EffAdd from "./EffAdd"

const HTADSIM = ['HP', 'TP', '攻撃力', '防御力', '速力', '精神力', '移動力']

const HDSAIT = ['HP', '防御力', '速力', '攻撃力', '精神力', 'TP']
const MRankEff = (MRank, Gr, S) => {
  return Math.ceil((MRank[Gr] - HDSAIT.indexOf(S)) / 6)
}

const GrList = ['リーニャ', 'テーセツ', 'ジャハラ', 'クォンツィ', 'ジェネラス', 'ペイシェ', 'ヒューム', 'アンノウン']

const round = (V) => {//四捨五入で0.5は切捨て
  return (Math.ceil(V - 0.5))
}




export default function CalcSt(props) {
  const {C, data, cNameF, MRank, Op, isIncludes, AmpList, RsList ,t} = props


  let cName1 = cNameF.split('_')[0]
  let cName2 = cNameF.split('_')[1]

  let Wepn = C[cNameF].Ally.Wepn
  let Armr = C[cNameF].Ally.Armr
  let Bddy = C[cNameF].Ally.Bddy

  let Gr = data.Chr[cName1][cName2].Gr



  //装備無しステータス
  HTADSIM.forEach((S, index) => {

    C[cNameF].Ally.St.Bas[S] = data.Chr[cName1][cName2].St.Bas[S]//素ステ

    if (data.Chr[cName1][cName2].St.ExP[S]) {//Exパッシブがあれば加算
      C[cNameF].Ally.St.Bas[S] += data.Chr[cName1][cName2].St.ExP[S]
    }

    Object.keys(data.Chr[cName1]).forEach((cName2, index) => {//同名キャラforEach
      if (data.Chr[cName1][cName2].St.UqP[S]) {//固有パッシブがあれば加算
        C[cNameF].Ally.St.Bas[S] += data.Chr[cName1][cName2].St.UqP[S]
      }
    })

    if (S !== '移動力') {//*Exボーナスがあれば乗算
      C[cNameF].Ally.St.Bas[S] *= (100 + data.Chr[cName1][cName2].St.ExB[S] + C[cNameF].Ally.Awk * 5 + MRankEff(MRank, C[cNameF].Ally.Gr, S)) / 100
    }

    C[cNameF].Ally.St.Bas[S] = round(C[cNameF].Ally.St.Bas[S])
  })

  //装備有りステータス
  HTADSIM.forEach((S, index) => {
    C[cNameF].Ally.St.Org[S] = C[cNameF].Ally.St.Bas[S]
  })

  let WeArBd = { Wepn: Wepn, Armr: Armr, Bddy: Bddy }
  C[cNameF].Ally.Srs = {}//シリーズ効果リセット
  Object.keys(WeArBd).forEach((WAB) => {//武器鎧Buddyループ
    let WABName = WeArBd[WAB]
    Object.keys(data[WAB][WeArBd[WAB]].St).forEach((S, index) => {//各ステ加算
      C[cNameF].Ally.St.Org[S] += data[WAB][WeArBd[WAB]].St[S]
    })

    Op[WABName].forEach((OpName) => {//特性



      if (isIncludes(HTADSIM, OpName)) {//ステータス加算
        C[cNameF].Ally.St.Org[OpName.split('+')[0]] += Number(OpName.split('+')[1])
      } else if (OpName.includes('威力')) {

        if (OpName.includes(Gr)) {//グループ限定効果がマッチしているなら
          let N = OpName.split(Gr)[1].split('威力+')[0]
          if (N === '') N = '全'

          C[cNameF].Ally.威力[N] += Number(OpName.split(Gr)[1].split('威力+')[1].split('%')[0])
        }
        if (OpName.includes('・')) {




          let V = Number(OpName.split('威力+')[1].split('%')[0])
          let OpNameList = OpName.split('威力+')[0].split('・')
          OpNameList.forEach((OpName2) => {
            let OpName3 = OpName2
            if (!OpName2.includes('属性')) OpName3 += '属性'

            C[cNameF].Ally.威力[OpName3] += V
          })
        }

        C[cNameF].Ally.威力[OpName.split('威力+')[0]] += Number(OpName.split('威力+')[1].split('%')[0])

      } else if (isIncludes(RsList, OpName)) {
        if (OpName.includes('・')) {
          let V = Number(OpName.split('耐性+')[1].split('%')[0])
          let OpNameList = OpName.split('耐性+')[0].split('・')
          OpNameList.forEach((OpName2) => {
            let OpName3 = OpName2
            if (!OpName2.includes('属性')) OpName3 += '属性'

            C[cNameF].Ally.耐性[OpName3] += V
          })
        }

        C[cNameF].Ally.耐性[OpName.split('耐性+')[0]] += Number(OpName.split('耐性+')[1].split('%')[0])
      }
    })







    if (data[WAB][WeArBd[WAB]].Srs) {//シリーズ効果の数があるなら
      if (C[cNameF].Ally.Srs[data[WAB][WeArBd[WAB]].Srs]) {//枠があるなら+1
        C[cNameF].Ally.Srs[data[WAB][WeArBd[WAB]].Srs] += 1
      } else {//枠がないなら作成
        C[cNameF].Ally.Srs[data[WAB][WeArBd[WAB]].Srs] = 1
      }
    }
  })

  Object.keys(C[cNameF].Ally.Srs).forEach((SrsName) => {//シリーズ効果があるならforEach
    if (C[cNameF].Ally.Srs[SrsName] >= 2) {//2個以上なら
      Object.keys(data.Srs[SrsName + '1'].St).forEach((S) => {
        C[cNameF].Ally.St.Org[S] += data.Srs[SrsName + '1'].St[S]
      })
      if (C[cNameF].Ally.Srs[SrsName] >= 3 && data.Srs[SrsName + '2']) {//更に3個以上で、効果2があるなら
        Object.keys(data.Srs[SrsName + '2'].St).forEach((S) => {
          C[cNameF].Ally.St.Org[S] += data.Srs[SrsName + '2'].St[S]
        })
      }
    }
  })

  Object.keys(data.Chr[cName1]).forEach((cName2, i) => {//同名キャラforEach
    if (data.Chr[cName1][cName2].UqP) {//効果タイプの固有パッシブがあれば

      data.Chr[cName1][cName2].UqP.forEach((AbName, i) => {//固有パッシブforEach

        EffAdd(C, data, cNameF, t, AbName)


        // if (data.Ab[UqPName].Eff) {//固有パッシブに効果があれば

        //   Object.keys(data.Ab[UqPName].Eff).forEach((EffName) => {//固有パッシブ効果forEach//EffName=攻撃力上昇など
        //     let Trm = data.Ab[UqPName].Eff[EffName].Trm

        //     if (
        //       !Trm ||
        //       (Trm === 't=1|3|5|7|9' && (t === 1 || t === 3 ||t === 5 ||t === 7 ||t === 9 ))
        //     ) {
        //       if (!C[cNameF].Ally.Eff[EffName]) {//枠が無ければ作成
        //         C[cNameF].Ally.Eff[EffName] = []
        //       }
        //       C[cNameF].Ally.Eff[EffName].push({//push
        //         N: UqPName,
        //         FT: t,
        //         JT: data.Ab[UqPName].Eff[EffName].JT,
        //       })
        //     }
        //   })
        // }
      })
    }
  })





}