import React from "react";

export default function BiofungicidaHeaderBar({ title = "BIOFUNGICIDA" }) {
  return (
    <div className="relative">
      <div className="bg-[#a7c653] rounded-[2px] h-[170px] w-full relative overflow-hidden">
        {/* Botones top-right dentro de la franja */}
        <div className="absolute top-6 right-7 flex items-center gap-4">
          {/* menú (tres puntos) */}
          <button
            type="button"
            className="h-[64px] w-[64px] rounded-full bg-white/25 border-2 border-white/70 flex items-center justify-center shadow-[0_16px_28px_rgba(0,0,0,0.18)]"
          >
            <div className="flex gap-2">
              <span className="h-2 w-2 rounded-full bg-white/90" />
              <span className="h-2 w-2 rounded-full bg-white/90" />
              <span className="h-2 w-2 rounded-full bg-white/90" />
            </div>
          </button>

          {/* back */}
          <button
            type="button"
            className="h-[64px] w-[64px] rounded-full bg-white/70 border border-black/10 flex items-center justify-center shadow-[0_16px_28px_rgba(0,0,0,0.18)]"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <path
                d="M14.5 5L7.5 12L14.5 19"
                stroke="rgba(0,0,0,0.65)"
                strokeWidth="2.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Título centrado */}
        <div className="h-full flex items-center justify-center">
          <div className="text-black font-extrabold tracking-[0.04em] text-[56px]">
            {title}
          </div>
        </div>
      </div>

      {/* Línea gris debajo */}
      <div className="h-[12px] bg-transparent" />
    </div>
  );
}
