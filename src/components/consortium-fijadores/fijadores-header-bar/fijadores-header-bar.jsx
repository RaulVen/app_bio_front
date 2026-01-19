import React from "react";

/**
 * Barra superior verde con título grande,
 * y toolbar alineado arriba derecha (como la imagen).
 */
export default function FijadoresHeaderBar({ title, toolbar }) {
  return (
    <div className="relative w-full">
      {/* toolbar arriba derecha */}
      {toolbar ? (
        <div className="absolute top-6 right-6 z-10">
          {toolbar}
        </div>
      ) : null}

      {/* barra verde */}
      <div className="bg-[#a7c653] h-[240px] w-full rounded-none shadow-[0_18px_45px_rgba(0,0,0,0.10)] flex items-start">
        <div className="pt-20 pl-12">
          <div className="text-[#6d6d6d] font-extrabold tracking-tight text-[56px]">
            {title}
          </div>
        </div>
      </div>
    </div>
  );
}
