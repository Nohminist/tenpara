import TrmToF from "./TrmToF"



export default function EffAdd(C, data, cNameF, t, AbName) {

  if (data.Ab[AbName].Eff) {//効果ありのアビなら
    // console.log(data.Ab[AbName].Eff)

    Object.keys(data.Ab[AbName].Eff).forEach((EffName) => {//固有パッシブ効果forEach//EffName=攻撃力上昇など
      let Trm = data.Ab[AbName].Eff[EffName].Trm

      if (TrmToF({Trm:data.Ab[AbName].Eff[EffName].Trm, t:t})

        // !Trm ||
        // (Trm === 't=1|3|5|7|9' && (t === 1 || t === 3 || t === 5 || t === 7 || t === 9))

      ) {
        if (!C[cNameF].Ally.Eff[EffName]) {//枠が無ければ作成
          C[cNameF].Ally.Eff[EffName] = []
        }
        C[cNameF].Ally.Eff[EffName].push({//push
          N: AbName,
          FT: t,
          V: data.Ab[AbName].Eff[EffName].V,
          JT: data.Ab[AbName].Eff[EffName].JT,

        })
      }
    })
  }
}