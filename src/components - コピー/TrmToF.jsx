

export default function TrmToF(props) {
  const { Trm, Awk,t } = props

  let ToF = false

  if (
    (!Trm) ||
    (Trm === 'Awk>=1' && Awk >= 1) ||
    (Trm === 'Awk>=2' && Awk >= 2) ||
    (Trm === 'Awk>=3' && Awk >= 3) ||
    (Trm === 'Awk>=4' && Awk >= 4) ||
    (Trm === 'Awk=5' && Awk >= 5) ||
    (Trm === 'Awk>=3&Awk<=4' && Awk >= 3 && Awk <= 4) ||
    (Trm === 't=1|3|5|7|9' && (t === 1 || t === 3 || t === 5 || t === 7 || t === 9))
    
  ) {
    ToF = true
  }

  return ToF





}