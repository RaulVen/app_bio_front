import React from "react";

export default function MetricCard({
  title,
  value,
  unit,
  note,
  status,
  tone = "neutral", // "good" | "warn" | "risk" | "neutral"
}) {
  const tones = {
    good: "bg-emerald-500/15 border-emerald-400/20",
    warn: "bg-amber-500/15 border-amber-400/20",
    risk: "bg-rose-500/15 border-rose-400/20",
    neutral: "bg-white/5 border-white/10",
  };

  return (
    <div
      className={[
        "rounded-2xl p-6 border backdrop-blur-md",
        "shadow-[0_10px_30px_rgba(0,0,0,0.35)]",
        tones[tone] || tones.neutral,
      ].join(" ")}
    >
      <div className="text-white/90 text-lg font-bold">{title}</div>

      <div className="mt-2 flex items-end gap-2">
        <div className="text-white text-2xl font-extrabold">{value}</div>
        <div className="text-white/70 text-sm pb-[2px]">{unit}</div>
      </div>

      {note ? <div className="text-white/70 mt-3 text-sm">{note}</div> : null}

      {status ? (
        <div className="text-white/80 mt-2 text-sm">
          <span className="text-white/60">Estado:</span> {status}
        </div>
      ) : null}
    </div>
  );
}
