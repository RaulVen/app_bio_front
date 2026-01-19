import React from "react";

export default function SoilLifeIcon() {
  return (
    <svg width="340" height="340" viewBox="0 0 340 340">
      {/* “microbio” alrededor */}
      <g opacity="0.18" fill="#ffffff">
        <circle cx="170" cy="38" r="26" />
        <circle cx="260" cy="72" r="26" />
        <circle cx="302" cy="160" r="26" />
        <circle cx="266" cy="254" r="26" />
        <circle cx="170" cy="302" r="26" />
        <circle cx="78" cy="266" r="26" />
        <circle cx="38" cy="170" r="26" />
        <circle cx="72" cy="78" r="26" />
      </g>

      {/* brazos */}
      <g opacity="0.18" stroke="#ffffff" strokeWidth="10" strokeLinecap="round">
        <line x1="170" y1="66" x2="170" y2="98" />
        <line x1="240" y1="92" x2="216" y2="116" />
        <line x1="274" y1="170" x2="238" y2="170" />
        <line x1="242" y1="242" x2="216" y2="218" />
        <line x1="170" y1="274" x2="170" y2="242" />
        <line x1="98" y1="242" x2="124" y2="218" />
        <line x1="66" y1="170" x2="98" y2="170" />
        <line x1="92" y1="100" x2="124" y2="124" />
      </g>

      {/* círculo central */}
      <circle cx="170" cy="170" r="105" fill="#5a5a5a" opacity="0.85" />
      <circle cx="170" cy="170" r="108" fill="none" stroke="#ffffff" opacity="0.22" strokeWidth="10" />

      {/* Icono “reactor / recipiente” (simple, estilo flat) */}
      <g transform="translate(118 104)" fill="#f1f1f1">
        {/* tapa */}
        <rect x="24" y="16" width="56" height="10" rx="3" opacity="0.95" />
        <rect x="18" y="30" width="68" height="10" rx="3" opacity="0.95" />
        {/* cuerpo */}
        <path
          d="M26,44 h52 c6,0 10,4 10,10 v58 c0,7 -4,12 -10,14 l-16,6 c-7,3 -13,3 -20,0 l-16,-6 c-6,-2 -10,-7 -10,-14 v-58 c0,-6 4,-10 10,-10 z"
          opacity="0.95"
        />
        {/* “líquido” */}
        <path d="M30,86 c22,14 46,10 60,0 v28 c0,5 -3,9 -8,11 l-14,5 c-6,2 -12,2 -18,0 l-14,-5 c-5,-2 -8,-6 -8,-11 z"
          fill="#e9e9e9"
          opacity="0.95"
        />
        {/* burbujas */}
        <circle cx="44" cy="96" r="4" fill="#5a5a5a" opacity="0.65" />
        <circle cx="62" cy="104" r="6" fill="#5a5a5a" opacity="0.65" />
        <circle cx="76" cy="94" r="3" fill="#5a5a5a" opacity="0.65" />
        <circle cx="54" cy="114" r="3" fill="#5a5a5a" opacity="0.65" />
      </g>
    </svg>
  );
}
