import React from "react";

export default function PotasioHeaderBar({ title }) {
  return (
    <div className="relative">
      <div className="bg-[#a6c455] rounded-none h-[150px] flex items-center justify-center shadow-[0_20px_40px_rgba(0,0,0,0.12)]">
        <div className="text-black font-extrabold tracking-wide text-[52px] leading-[1] text-center">
          {title}
        </div>
      </div>

      {/* Botones circulares (… y back) dentro del header, arriba-derecha */}
      <div className="absolute top-4 right-6 flex items-center gap-4">
        <div className="h-12 w-12 rounded-full border-2 border-white/70 bg-white/10 flex items-center justify-center shadow-[0_10px_20px_rgba(0,0,0,0.15)]">
          <div className="flex gap-1">
            <span className="h-2 w-2 rounded-full bg-white/80" />
            <span className="h-2 w-2 rounded-full bg-white/80" />
            <span className="h-2 w-2 rounded-full bg-white/80" />
          </div>
        </div>

        <div className="h-12 w-12 rounded-full bg-white/70 flex items-center justify-center shadow-[0_10px_20px_rgba(0,0,0,0.18)]">
          <span className="text-black text-2xl leading-none -mt-[2px]">‹</span>
        </div>
      </div>
    </div>
  );
}
