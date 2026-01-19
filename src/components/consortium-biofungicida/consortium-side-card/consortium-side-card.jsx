import React from "react";

export default function ConsortiumSideCard({
  title = "BIOFUNGICIDA",
  consortiumLabel = "CONSORCIO",
  consortiumLetter = "B",
}) {
  return (
    <div className="bg-[#cfdcd3] min-h-[540px] border-r border-black/10 flex flex-col justify-between px-8 py-10">
      <div>
        <div className="text-black font-extrabold text-[28px] tracking-wide leading-tight">
          {title}
        </div>
      </div>

      {/* Icono grande */}
      <div className="flex items-center justify-center py-8">
        <svg width="210" height="210" viewBox="0 0 256 256" fill="none">
          {/* contorno simple tipo biorreactor */}
          <path
            d="M72 84c0-14 12-26 26-26h60c14 0 26 12 26 26v10c0 6 4 10 10 10h6c6 0 10 4 10 10v10c0 6-4 10-10 10h-6c-6 0-10 4-10 10v46c0 30-24 54-54 54H116c-30 0-54-24-54-54v-46c0-6-4-10-10-10h-6c-6 0-10-4-10-10v-10c0-6 4-10 10-10h6c6 0 10-4 10-10V84Z"
            stroke="rgba(0,0,0,0.9)"
            strokeWidth="10"
            strokeLinejoin="round"
          />
          <path
            d="M92 58h72"
            stroke="rgba(0,0,0,0.9)"
            strokeWidth="10"
            strokeLinecap="round"
          />
          {/* burbujas */}
          <circle cx="118" cy="140" r="6" fill="rgba(0,0,0,0.85)" />
          <circle cx="146" cy="150" r="5" fill="rgba(0,0,0,0.85)" />
          <circle cx="132" cy="170" r="7" fill="rgba(0,0,0,0.85)" />
        </svg>
      </div>

      {/* Consorcio */}
      <div className="text-center">
        <div className="text-black font-extrabold text-[34px] leading-none">
          {consortiumLabel}
        </div>
        <div className="text-black font-extrabold text-[34px] leading-none mt-2">
          {consortiumLetter}
        </div>
      </div>
    </div>
  );
}
