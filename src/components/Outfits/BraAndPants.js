export function BraAndPants({ topColor, bottomColor }) {
    return (
      <svg width="150" height="200" viewBox="0 0 150 200" xmlns="http://www.w3.org/2000/svg">
        {/* Bra */}
        <rect x="25" y="30" width="100" height="30" rx="5" fill={topColor} />
        {/* Pants */}
        <rect x="45" y="70" width="25" height="70" fill={bottomColor} />
        <rect x="80" y="70" width="25" height="70" fill={bottomColor} />
      </svg>
    );
  }