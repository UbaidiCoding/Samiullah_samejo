import React from "react";

export default function LightweightAmbientBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {/* 1. Deep space base */}
      <div className="absolute inset-0 bg-[#07080d]" />

      {/* 2. Optimized Ambient Radial Glow Orbs (GPU composited) */}
      <div 
        className="absolute -top-40 left-1/4 w-[600px] h-[600px] rounded-full bg-cyan-500/10 blur-[130px] animate-pulse-subtle"
        style={{ transform: "translate3d(0,0,0)" }}
      />
      <div 
        className="absolute top-1/3 -right-40 w-[550px] h-[550px] rounded-full bg-purple-600/10 blur-[140px] animate-pulse-subtle"
        style={{ animationDelay: "3s", transform: "translate3d(0,0,0)" }}
      />
      <div 
        className="absolute bottom-10 left-10 w-[500px] h-[500px] rounded-full bg-emerald-500/5 blur-[120px] animate-pulse-subtle"
        style={{ animationDelay: "1.5s", transform: "translate3d(0,0,0)" }}
      />

      {/* 3. Subtle Cybernetic Dot Grid Pattern with linear fade mask */}
      <div 
        className="absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
        }}
      />

      {/* 4. Fine vignette for focus on content */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_0%,rgba(7,8,13,0.75)_80%)]" />
    </div>
  );
}
