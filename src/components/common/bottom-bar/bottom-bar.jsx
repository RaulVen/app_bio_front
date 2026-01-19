import React from "react";
import Logo from "@/assets/precision-agricola-logo.png"; // <-- tu logo (fondo negro)

export default function BottomBar({
  heightClass = "h-20",
  bgColor = "#a7c653",
  legalText = "© 2025 Precisión Agrícola S.A. de C.V.  Plataforma e interfaz protegidas por leyes de propiedad intelectual. Prohibida su copia, modificación o uso no autorizado.",
}) {
  return (
    <div className={`absolute inset-x-0 bottom-0 ${heightClass}`} style={{ backgroundColor: bgColor }}>
      <div className="relative h-full w-full">
        {/* Logo CENTRADO */}
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src={Logo}
            alt="Precisión Agrícola"
            className="h-10 md:h-12 object-contain opacity-95 mix-blend-screen select-none"
            draggable={false}
          />
        </div>

        {/* Texto legal IZQUIERDA (abajo) */}
        <div className="absolute left-6 right-6 bottom-3">
          <div className="text-white/90 text-[11px] leading-tight">
            {legalText}
          </div>
        </div>
      </div>
    </div>
  );
}

