import React from "react";

export default function ConsortiumSideCard({ title, consortiumLetter = "B" }) {
  return (
    <div className="bg-[#cfddd6] border border-black/10">
      <div className="p-4">
        <div className="text-black font-extrabold text-[18px] leading-tight">
          {title}
        </div>
      </div>

      <div className="px-6 pt-6 flex items-center justify-center">
        {/* Icono del bioreactor simple en SVG */}
        <svg width="140" height="140" viewBox="0 0 120 120" fill="none">
          <path
            d="M38 18h44"
            stroke="#000"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            d="M45 18v10h30V18"
            stroke="#000"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            d="M30 36h60"
            stroke="#000"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            d="M32 36v50c0 10 8 18 18 18h20c10 0 18-8 18-18V36"
            stroke="#000"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <circle cx="50" cy="64" r="4" fill="#000" />
          <circle cx="70" cy="70" r="4" fill="#000" />
          <circle cx="60" cy="82" r="4" fill="#000" />
          <path
            d="M44 104v10M76 104v10"
            stroke="#000"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* ✅ Este bloque debe llegar hasta abajo (rectángulo completo) */}
      <div className="mt-4 px-4 pb-6 flex flex-col items-center justify-end">
        <div className="text-black font-extrabold text-[28px] leading-none">
          CONSORCIO
        </div>
        <div className="text-black font-extrabold text-[28px] leading-none mt-1">
          {consortiumLetter}
        </div>
      </div>
    </div>
  );
}
