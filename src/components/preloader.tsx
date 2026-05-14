"use client";

import { useState, useEffect } from "react";

export function Preloader() {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Start fade-out after 400ms (leaves 100ms for opacity transition = 500ms total)
    const fadeTimer = setTimeout(() => setFadeOut(true), 400);
    // Fully remove from DOM after transition completes
    const removeTimer = setTimeout(() => setVisible(false), 600);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-[#0B1311] transition-opacity duration-200 ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Animated mountain silhouette loader */}
      <div className="relative flex flex-col items-center">
        {/* Spinning Chakana ring */}
        <div className="relative w-16 h-16 mb-5">
          <svg
            className="animate-spin w-16 h-16"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Outer ring */}
            <circle
              cx="32"
              cy="32"
              r="28"
              stroke="#D4AF37"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeDasharray="44 132"
              className="opacity-90"
            />
            {/* Inner ring - counter-spin */}
            <circle
              cx="32"
              cy="32"
              r="18"
              stroke="#D4AF37"
              strokeWidth="1"
              strokeLinecap="round"
              strokeDasharray="28 85"
              className="opacity-40"
              style={{ animationDirection: "reverse", animationDuration: "1.5s" }}
            />
          </svg>
          {/* Center diamond dot */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-2 h-2 rotate-45 bg-[#D4AF37] rounded-[1px]" />
          </div>
        </div>

        {/* Brand name */}
        <div className="overflow-hidden">
          <span
            className="block text-sm font-black tracking-[0.35em] uppercase bg-gradient-to-r from-white via-[#D4AF37] to-white bg-clip-text text-transparent"
            style={{
              animation: "slideUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards",
            }}
          >
            Intiquilla
          </span>
        </div>
        {/* Thin gold line */}
        <div
          className="mt-2 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-transparent"
          style={{
            animation: "expandLine 0.4s 0.15s cubic-bezier(0.16, 1, 0.3, 1) forwards",
            width: 0,
          }}
        />
      </div>

      <style jsx>{`
        @keyframes slideUp {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        @keyframes expandLine {
          from {
            width: 0;
          }
          to {
            width: 80px;
          }
        }
      `}</style>
    </div>
  );
}
