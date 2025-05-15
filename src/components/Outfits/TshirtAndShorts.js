export function TshirtAndShorts({ topColor, bottomColor }) {
  return (
    <svg width="150" height="200" viewBox="0 0 150 200" xmlns="http://www.w3.org/2000/svg">
      {/* Shirt */}
      <path
        d="M50,40 C40,60, 40,70, 50,90 L50,130 L100,130 L100,90 C110,70, 110,60, 100,40 L75,40 L70,60 L60,60 L55,40 Z"
        fill={topColor}
        stroke="black"
        strokeWidth="2"
      />
      
      {/* T-shirt Sleeves */}
      <path
        d="M35,60 L30,80 L50,90 L50,70 L45,60"
        fill={topColor}
        stroke="black"
        strokeWidth="2"
      />
      <path
        d="M115,60 L120,80 L100,90 L100,70 L105,60"
        fill={topColor}
        stroke="black"
        strokeWidth="2"
      />
      {/* Shorts */}
      <rect x="49" y="125" width="24" height="30" fill={bottomColor} stroke="black" strokeWidth="2" />
      <rect x="76" y="125" width="24" height="30" fill={bottomColor} stroke="black" strokeWidth="2" />
    </svg>
  );
}
