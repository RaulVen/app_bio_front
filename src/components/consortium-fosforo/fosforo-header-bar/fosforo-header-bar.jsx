import React from "react";
import { MoreHorizontal, ChevronLeft } from "lucide-react";

export default function FosforoHeaderBar({
  title = "",
  showHeaderActions = false,
  onBack,
  onMenu,
}) {
  return (
    <div className="relative w-full">
      {/* Barra verde */}
      <div className="bg-[#a7c653] rounded-none shadow-[0_18px_40px_rgba(0,0,0,0.25)]">
        <div className="relative px-10 py-10">
          {/* Título centrado */}
          <div className="text-center">
            <div className="text-black font-extrabold tracking-wide leading-[0.95] text-[44px] md:text-[56px] whitespace-pre-line">
              {title}
            </div>
          </div>

          {/* Acciones (arriba derecha) */}
          {showHeaderActions ? (
            <div className="absolute top-6 right-6 flex items-center gap-4">
              {/* Botón "..." */}
              <button
                type="button"
                onClick={onMenu}
                className="h-12 w-12 rounded-full border-2 border-white/90 bg-white/10 backdrop-blur-sm flex items-center justify-center shadow-[0_10px_25px_rgba(0,0,0,0.18)]"
                aria-label="Menu"
              >
                <MoreHorizontal className="h-6 w-6 text-white" />
              </button>

              {/* Botón back */}
              <button
                type="button"
                onClick={onBack}
                className="h-12 w-12 rounded-full bg-white/70 backdrop-blur-sm flex items-center justify-center shadow-[0_10px_25px_rgba(0,0,0,0.18)]"
                aria-label="Back"
              >
                <ChevronLeft className="h-7 w-7 text-gray-700" />
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
