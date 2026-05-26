export default function Logo502({ size = 36 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Outer hexagonal frame */}
      <polygon
        points="50,4 93,27.5 93,72.5 50,96 7,72.5 7,27.5"
        fill="none"
        stroke="#00E6F7"
        strokeWidth="3"
        opacity="0.7"
      />
      {/* Inner box shape */}
      <polygon
        points="50,18 80,34.5 80,65.5 50,82 20,65.5 20,34.5"
        fill="rgba(0,230,247,0.06)"
        stroke="#00E6F7"
        strokeWidth="2"
      />
      {/* S shape top-left */}
      <path d="M30 38 L44 38 L44 45 L30 45 L30 52 L44 52" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="round" fill="none"/>
      {/* 0 shape top-right (small diamond) */}
      <rect x="54" y="36" width="16" height="16" rx="2" stroke="#00E6F7" strokeWidth="3" fill="none" transform="rotate(0 62 44)"/>
      {/* 2 shape bottom */}
      <path d="M34 60 L34 54 L46 54 L46 60 L34 60 L34 66 L46 66" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" fill="none"/>
      {/* Cyan diamond center */}
      <rect x="46" y="46" width="8" height="8" fill="#00E6F7" transform="rotate(45 50 50)" opacity="0.9"/>
    </svg>
  );
}
