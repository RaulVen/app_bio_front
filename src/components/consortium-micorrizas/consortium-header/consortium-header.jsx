import React from "react";

function ReactorIcon() {
  return (
    <svg width="76" height="76" viewBox="0 0 64 64" fill="none">
      <path d="M22 14h20M24 18h16" stroke="rgba(0,0,0,0.55)" strokeWidth="2.6" strokeLinecap="round" />
      <path
        d="M18 22h28v26c0 4-3 7-7 8l-7 3-7-3c-4-1-7-4-7-8V22z"
        stroke="rgba(0,0,0,0.55)"
        strokeWidth="2.6"
        strokeLinejoin="round"
      />
      <circle cx="26" cy="38" r="2.5" stroke="rgba(0,0,0,0.55)" strokeWidth="2" />
      <circle cx="36" cy="42" r="3.2" stroke="rgba(0,0,0,0.55)" strokeWidth="2" />
      <circle cx="40" cy="34" r="2.2" stroke="rgba(0,0,0,0.55)" strokeWidth="2" />
      <path d="M24 52h16" stroke="rgba(0,0,0,0.55)" strokeWidth="2.6" strokeLinecap="round" />
    </svg>
  );
}

export default function ConsortiumHeader({ consortiumLabel = "CONSORCIO", consortiumLetter = "D" }) {
  return (
    <div className="flex flex-col items-start gap-4">
      <div className="w-[110px] h-[110px] bg-white rounded-2xl shadow-[0_18px_40px_rgba(0,0,0,0.20)] border border-black/10 flex items-center justify-center">
        <ReactorIcon />
      </div>

      <div className="leading-none">
        <div className="text-[#4c7f52] font-extrabold text-[34px]">{consortiumLabel}</div>
        <div className="text-[#4c7f52] font-extrabold text-[64px] -mt-1">{consortiumLetter}</div>
      </div>
    </div>
  );
}

