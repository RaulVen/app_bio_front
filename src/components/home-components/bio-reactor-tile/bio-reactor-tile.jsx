import React from "react";

/**
 * status: "good" | "warn" | "risk"
 * label: "Biorreactor 1"
 */
export default function BioReactorTile({
  label = "Biorreactor",
  status = "good",
  children, // aquí puedes pasar el SVG/icono del biorreactor si quieres
}) {
  const styles = {
    good: {
      ring: "ring-emerald-400/60",
      glow: "shadow-[0_0_0_1px_rgba(52,211,153,0.35),0_12px_35px_rgba(0,0,0,0.35)]",
      bg: "bg-emerald-500/10",
    },
    warn: {
      ring: "ring-amber-300/70",
      glow: "shadow-[0_0_0_1px_rgba(252,211,77,0.35),0_12px_35px_rgba(0,0,0,0.35)]",
      bg: "bg-amber-500/10",
    },
    risk: {
      ring: "ring-rose-400/70",
      glow: "shadow-[0_0_0_1px_rgba(251,113,133,0.35),0_12px_35px_rgba(0,0,0,0.35)]",
      bg: "bg-rose-500/10",
    },
  };

  const s = styles[status] ?? styles.good;

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="text-white/75 text-xs">{label}</div>

      <div
        className={[
          "w-[130px] h-[95px] rounded-xl",
          "ring-1",
          s.ring,
          s.bg,
          s.glow,
          "backdrop-blur-md",
          "flex items-center justify-center",
        ].join(" ")}
      >
        <div className="opacity-95">{children}</div>
      </div>
    </div>
  );
}
