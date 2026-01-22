import React from "react";

export default function HistoryCard({ compact = false }) {
  return (
    <div
      className={[
        "rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md",
        compact ? "p-4" : "p-6",
      ].join(" ")}
    >
      <div className="flex items-center gap-2">
        <span className="text-white/70">📈</span>
        <div className="font-bold text-white/90">Historial y gráficas</div>
      </div>

      <div className="text-white/70 mt-2 text-sm">
        Toque para visualizar la tendencia de las últimas 72 horas y revisar eventos críticos.
      </div>
    </div>
  );
}
