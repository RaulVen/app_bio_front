import React from "react";

export default function InfoColumn({ title, children }) {
  return (
    <div className="w-full">
      <div className="text-[#4c7f52] font-extrabold uppercase leading-[1.05] text-[34px]">
        {title}
      </div>

      <div className="mt-4 bg-[#cfdad3] border border-black/10 min-h-[360px] p-8">
        <div className="text-[#111] text-[22px] leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}
