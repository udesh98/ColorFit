export function ShirtAndShorts({ topColor, bottomColor }) {
    return (
      <svg width="150" height="200" viewBox="0 0 150 200" xmlns="http://www.w3.org/2000/svg">
        {/* Shirt */}
        <rect x="25" y="30" width="100" height="60" rx="10" fill={topColor} />
        {/* Shorts */}
        <rect x="45" y="100" width="25" height="40" fill={bottomColor} />
        <rect x="80" y="100" width="25" height="40" fill={bottomColor} />
      </svg>
    );
  }