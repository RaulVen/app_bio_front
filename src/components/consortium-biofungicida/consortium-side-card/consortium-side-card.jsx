import React from "react";

/**
 * Lado izquierdo (como referencia):
 * - Título arriba (BIOFUNGICIDA)
 * - Icono al centro
 * - Bloque inferior "CONSORCIO" + letra que debe llegar HASTA ABAJO
 */
export default function ConsortiumSideCard({
  title = "BIOFUNGICIDA",
  consortiumLabel = "CONSORCIO",
  consortiumLetter = "B",
  icon, // opcional: si luego quieres pasar un icono custom
}) {
  return (
    <div className="h-full bg-[#d7e3da] border-r border-black/10">
      {/* Contenedor interno a altura completa */}
      <div className="h-full flex flex-col">
        {/* Título arriba */}
        <div className="px-8 pt-10 text-left">
          <div className="text-black font-extrabold tracking-wide text-[28px]">
            {title}
          </div>
        </div>

        {/* Zona icono (crece para empujar el bloque inferior hacia abajo) */}
        <div className="flex-1 flex items-center justify-center px-6">
          {icon ? (
            icon
          ) : (
            // Placeholder (tu ícono real va aquí)
            <svg width="160" height="160" viewBox="0 0 200 200" fill="none">
              <path
                d="M100 30c35 0 60 22 60 52 0 15-5 25-12 33-4 5-6 10-6 17v10c0 20-18 35-42 35H100c-24 0-42-15-42-35v-10c0-7-2-12-6-17-7-8-12-18-12-33 0-30 25-52 60-52Z"
                stroke="rgba(0,0,0,0.85)"
                strokeWidth="8"
                strokeLinejoin="round"
              />
              <circle cx="86" cy="96" r="6" fill="rgba(0,0,0,0.85)" />
              <circle cx="114" cy="96" r="6" fill="rgba(0,0,0,0.85)" />
              <circle cx="100" cy="112" r="6" fill="rgba(0,0,0,0.85)" />
            </svg>
          )}
        </div>

        {/* ✅ Bloque inferior que debe llegar hasta abajo */}
        <div className="px-8 pb-10">
          <div className="w-full text-center">
            <div className="text-black font-extrabold text-[34px] leading-none">
              {consortiumLabel}
            </div>
            <div className="text-black font-extrabold text-[34px] leading-none mt-2">
              {consortiumLetter}
            </div>
          </div>
        </div>

        {/* ✅ Este “relleno” hace que el bloque inferior sea rectángulo hasta abajo */}
        <div className="bg-[#d7e3da] flex-0" />
      </div>
    </div>
  );
}
