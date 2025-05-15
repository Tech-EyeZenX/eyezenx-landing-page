import React, { useId } from 'react';

const GlassCard = ({ children, className, clipPath }) => {
  const uniqueId = useId(); // Generate a unique ID for clipPath

  return (
    <div className={`relative ${className}`}>
      {/* SVG for clip path definition */}
      <svg className="absolute inset-0 w-full h-full" style={{ zIndex: -1 }}>
        <defs>
          <clipPath id={`clip-path-${uniqueId}`}>
            <path d={clipPath} />
          </clipPath>
        </defs>
      </svg>

      {/* Blurred background */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backdropFilter: "blur(15px)",
          clipPath: `url(#clip-path-${uniqueId})`,
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.2) 78%)",
        }}
      ></div>

      {/* Content container */}
      <div className="relative z-10 p-6">
        {children}
      </div>
    </div>
  );
};

export default GlassCard;
