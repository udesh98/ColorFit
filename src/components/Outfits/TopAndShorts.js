export function TopAndShorts({ topColor, bottomColor }) {
    return (
      <svg width="150" height="200" viewBox="0 0 150 200" xmlns="http://www.w3.org/2000/svg">
        {/* Top */}
        <rect x="25" y="30" width="100" height="50" rx="10" fill={topColor} />
        {/* Shorts */}
        <rect x="49" y="100" width="24" height="25" fill={bottomColor} stroke="black" strokeWidth="2" />
        <rect x="76" y="100" width="24" height="25" fill={bottomColor} stroke="black" strokeWidth="2" />
      </svg>
    );
  }