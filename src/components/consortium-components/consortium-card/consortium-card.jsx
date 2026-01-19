import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

function DownloadIcon({ color = "white" }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 3v10m0 0 4-4m-4 4-4-4"
        stroke={color}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 17v3h16v-3"
        stroke={color}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TogglePill({ on }) {
  // Verde cuando ON, rojo cuando OFF (como en tu video)
  const bg = on ? "bg-[#a7c653]" : "bg-[#d95555]";
  const knobX = on ? "translate-x-6" : "translate-x-0";

  return (
    <div className={`w-14 h-7 rounded-full ${bg} relative shadow-inner`}>
      <div
        className={`w-7 h-7 rounded-full bg-[#cfd3d8] shadow-md transition-transform duration-200 ${knobX}`}
      />
    </div>
  );
}

/** “Plato” de arriba con puntos */
function PetriDish({ type, big }) {
  const size = big ? 92 : 72;
  const r = big ? 36 : 28;

  // puntos por tipo
  const dots =
    type === "green"
      ? ["#3aa35c", "#3aa35c", "#3aa35c", "#3aa35c"]
      : type === "red"
      ? ["#d15454", "#d15454", "#d15454", "#d15454"]
      : type === "blue"
      ? ["#3b82f6", "#3b82f6", "#3b82f6", "#3b82f6"]
      : type === "orange"
      ? ["#d98a3a", "#d98a3a", "#d98a3a", "#d98a3a"]
      : ["#6b7280", "#6b7280", "#6b7280", "#6b7280"]; // micro (gris)

  return (
    <svg width={size} height={size} viewBox="0 0 100 100">
      <defs>
        <radialGradient id="dish" cx="50%" cy="40%" r="70%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.85)" />
          <stop offset="65%" stopColor="rgba(230,235,240,0.9)" />
          <stop offset="100%" stopColor="rgba(210,215,220,0.95)" />
        </radialGradient>
      </defs>
      <circle cx="50" cy="50" r={r + 8} fill="rgba(0,0,0,0.08)" />
      <circle cx="50" cy="50" r={r + 5} fill="url(#dish)" />
      <circle cx="50" cy="50" r={r + 5} fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="2" />
      {/* dots */}
      <circle cx="40" cy="44" r="5" fill={dots[0]} opacity="0.9" />
      <circle cx="58" cy="46" r="4.5" fill={dots[1]} opacity="0.9" />
      <circle cx="46" cy="60" r="4.2" fill={dots[2]} opacity="0.9" />
      <circle cx="60" cy="60" r="3.8" fill={dots[3]} opacity="0.9" />
    </svg>
  );
}

/** Icono “reactor” simple */
function ReactorIcon({ active }) {
  const stroke = active ? "rgba(20,20,20,0.85)" : "rgba(255,255,255,0.35)";
  return (
    <svg width="70" height="70" viewBox="0 0 64 64" fill="none">
      <path
        d="M22 14h20M24 18h16"
        stroke={stroke}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M18 22h28v26c0 4-3 7-7 8l-7 3-7-3c-4-1-7-4-7-8V22z"
        stroke={stroke}
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <circle cx="26" cy="38" r="2.5" stroke={stroke} strokeWidth="2" />
      <circle cx="36" cy="42" r="3.2" stroke={stroke} strokeWidth="2" />
      <circle cx="40" cy="34" r="2.2" stroke={stroke} strokeWidth="2" />
      <path d="M24 52h16" stroke={stroke} strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

export default function ConsortiumCard({
  title,
  dish,
  selected,
  enabled,
  onSelect,
  onToggle,
  onDownload,
}) {
  const isActive = selected;

  const cardBg = isActive ? "bg-[#dfe3e6]" : "bg-[#5a5a5a]";
  const titleColor = isActive ? "text-[#3a3a3a]" : "text-white/90";
  const border = isActive ? "border-black/10" : "border-white/10";

  return (
    <motion.div
      layout
      onClick={onSelect}
      className={`relative rounded-xl ${cardBg} border ${border} shadow-[0_10px_30px_rgba(0,0,0,0.18)] cursor-pointer overflow-hidden`}
      animate={{ y: isActive ? -8 : 0, scale: isActive ? 1.04 : 1 }}
      transition={{ type: "spring", stiffness: 220, damping: 18 }}
      style={{ height: isActive ? 360 : 335 }}
    >
      {/* Plato arriba (sobresale) */}
      <div className="absolute -top-10 left-1/2 -translate-x-1/2">
        <PetriDish type={dish} big={isActive} />
      </div>

      {/* Contenido */}
      <div className="pt-16 px-4 pb-4 h-full flex flex-col items-center">
        <div
          className={`text-center font-extrabold uppercase text-[13px] leading-tight tracking-wide whitespace-pre-line ${titleColor}`}
        >
          {title}
        </div>

        <div className="mt-6">
          <ReactorIcon active={isActive} />
        </div>

        <div className="mt-auto w-full flex flex-col items-center gap-4">
          {/* Switch */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onToggle?.();
            }}
            className="outline-none"
          >
            <TogglePill on={enabled} />
          </button>

          {/* Download */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onDownload?.();
            }}
            className={`w-8 h-8 rounded-full flex items-center justify-center ${
              isActive ? "bg-black" : "bg-black/25"
            }`}
          >
            <DownloadIcon color={isActive ? "white" : "rgba(255,255,255,0.85)"} />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
