import React from "react";

export default function ConsortiumSideCard({
  title = "FIJADORES DE NITRÓGENO",
  consortiumLabel = "CONSORCIO",
  consortiumLetter = "B",
}) {
  return (
    <div className="h-full bg-[#cfded6] border-r border-black/10 flex flex-col items-center justify-between py-10">
      {/* Título arriba */}
      <div className="text-center px-6">
        <div className="text-black font-extrabold text-[26px] leading-tight">
          {title}
        </div>
      </div>

      {/* Icono grande (placeholder tipo biorreactor) */}
      <div className="flex items-center justify-center py-8">
        <svg
          width="190"
          height="190"
          viewBox="0 0 200 200"
          fill="none"
          aria-label="Icono bioreactor"
        >
          <g stroke="rgba(0,0,0,0.85)" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
            {/* tapa */}
            <path d="M70 42 H130" />
            <path d="M82 30 H118" />
            {/* cuerpo */}
            <path d="M60 58 H140" />
            <path d="M65 58 V130 C65 150 80 165 100 165 C120 165 135 150 135 130 V58" />
            {/* “líquido” */}
            <path d="M70 108 C88 96 112 120 130 108" />
            {/* burbujas */}
            <circle cx="86" cy="96" r="6" />
            <circle cx="112" cy="92" r="5" />
            <circle cx="100" cy="116" r="4" />
            {/* patas */}
            <path d="M76 165 L66 186" />
            <path d="M124 165 L134 186" />
          </g>
        </svg>
      </div>

      {/* Consorcio abajo */}
      <div className="text-center pb-6">
        <div className="text-black font-extrabold text-[28px] leading-none">
          {consortiumLabel}
        </div>
        <div className="text-black font-extrabold text-[34px] mt-2 leading-none">
          {consortiumLetter}
        </div>
      </div>
    </div>
  );
}
