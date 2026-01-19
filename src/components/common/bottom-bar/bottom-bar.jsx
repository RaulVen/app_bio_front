import React from "react";
import Logo from "@/assets/precision-agricola-logo.png"; // tu logo (fondo negro)

export default function BottomBar({
  heightClass = "h-20",
  bgColor = "#a7c653",
  legalText = "© 2025 Precisión Agrícola S.A. de C.V.  Plataforma e interfaz protegidas por leyes de propiedad intelectual. Prohibida su copia, modificación o uso no autorizado.",
}) {
  return (
    <div
      className={`absolute inset-x-0 bottom-0 ${heightClass}`}
      style={{ backgroundColor: bgColor }}
    >
      <div className="h-full w-full flex flex-col items-center justify-center px-6">
        {/* Logo ARRIBA centrado */}
        <img
          src={Logo}
          alt="Precisión Agrícola"
          className="h-9 md:h-10 object-contain opacity-95 mix-blend-screen select-none"
          draggable={false}
        />

        {/* Texto ABAJO centrado */}
        <div className="mt-2 text-center text-white/90 text-[11px] leading-tight max-w-5xl">
          {legalText}
        </div>
      </div>
    </div>
  );
}
