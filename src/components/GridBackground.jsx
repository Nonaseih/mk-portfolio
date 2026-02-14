import React from "react";

// Simple animated grid background using Tailwind and CSS
const GridBackground = () => {
  return (
    <div className="absolute inset-0 -z-10 pointer-events-none select-none overflow-hidden">
      <svg width="100%" height="100%" className="w-full h-full" style={{ minHeight: '100vh' }}>
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#222" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
      <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-transparent via-[#0ff2] to-transparent pointer-events-none" />
    </div>
  );
};

export default GridBackground;
