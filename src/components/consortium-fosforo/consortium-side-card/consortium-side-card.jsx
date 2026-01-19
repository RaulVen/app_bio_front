import React from "react";

/**
 * Lado izquierdo:
 * - Título arriba (SOLUBILIZADOR DE FOSFORO)
 * - Icono biorreactor al centro
 * - CONSORCIO + letra abajo (hasta el fondo)
 */
export default function ConsortiumSideCard({
  title = "SOLUBILIZADOR\nDE FOSFORO",
  consortiumLabel = "CONSORCIO",
  consortiumLetter = "B",
}) {
  return (
    <div className="h-full bg-[#d7e3da] border-r border-black/10">
      <div className="h-full flex flex-col">
        {/* Título */}
        <div className="px-5 pt-8">
          <div className="text-black font-extrabold tracking-wide text-[18px] leading-tight whitespace-pre-line">
            {title}
          </div>
        </div>

        {/* Icono (crece) */}
        <div className="flex-1 flex items-center justify-center px-6">
          {/* Icono tipo biorreactor (vector simple) */}
          <svg width="170" height="170" viewBox="0 0 200 200" fill="none">
            <path
              d="M58 60h84"
              stroke="rgba(0,0,0,0.9)"
              strokeWidth="10"
              strokeLinecap="round"
            />
            <path
              d="M80 40h40"
              stroke="rgba(0,0,0,0.9)"
              strokeWidth="10"
              strokeLinecap="round"
            />
            <path
              d="M60 70c0-10 8-18 18-18h44c10 0 18 8 18 18v60c0 16-13 30-30 30H90c-17 0-30-14-30-30V70Z"
              stroke="rgba(0,0,0,0.9)"
              strokeWidth="10"
              strokeLinejoin="round"
            />
            <path
              d="M70 120c10 6 20 6 30 0s20-6 30 0"
              stroke="rgba(0,0,0,0.35)"
              strokeWidth="8"
              strokeLinecap="round"
            />
            <circle cx="92" cy="105" r="6" fill="rgba(0,0,0,0.9)" />
            <circle cx="120" cy="108" r="6" fill="rgba(0,0,0,0.9)" />
            <circle cx="104" cy="125" r="6" fill="rgba(0,0,0,0.9)" />
            <path
              d="M80 160v18"
              stroke="rgba(0,0,0,0.9)"
              strokeWidth="10"
              strokeLinecap="round"
            />
            <path
              d="M120 160v18"
              stroke="rgba(0,0,0,0.9)"
              strokeWidth="10"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* ✅ Bloque inferior al fondo */}
        <div className="px-6 pb-10 text-center">
          <div className="text-black font-extrabold text-[26px] leading-none">
            {consortiumLabel}
          </div>
          <div className="text-black font-extrabold text-[26px] leading-none mt-2">
            {consortiumLetter}
          </div>
        </div>
      </div>
    </div>
  );
}
