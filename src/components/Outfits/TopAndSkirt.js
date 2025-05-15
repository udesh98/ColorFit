export function TopAndSkirt({ topColor, bottomColor }) {
  return (
    <svg width="150" height="200" viewBox="0 0 150 200" xmlns="http://www.w3.org/2000/svg">
      {/* Top */}
      <rect x="25" y="30" width="100" height="50" rx="10" fill={topColor} />
      
      {/* Skirt - now more realistic as a solid shape */}
      <path 
        d="M45 90 Q75 130, 105 90 L105 140 H45 Z" 
        fill={bottomColor} 
      />
    </svg>
  );
}
