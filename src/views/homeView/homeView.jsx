import Gauge from "@/components/home-components/gauge/gauge";
import HistoryCard from "@/components/home-components/history-card/history-card";
import MetricCard from "@/components/home-components/metric-card/metric-card";
import OxygenationPanel from "@/components/home-components/oxygenation-panel/oxygenation-panel";
import React from "react";

export default function HomeView() {
  return (
    <div className="min-h-screen w-full bg-[#212121] p-6">
      {/* Contenedor tipo “dashboard” */}
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-12 gap-6">
          {/* Izquierda: gauges + métricas + historial */}
          <div className="col-span-12 lg:col-span-8 space-y-6">
            {/* Gauges */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Gauge
                title="Temperatura"
                value={27}
                min={0}
                max={40}
                unit="°C"
                subtitle="Estado:"
                footer="Óptimo"
                segments={[
                  { fromPct: 0.0, toPct: 0.55, className: "stroke-emerald-400/90" },
                  { fromPct: 0.55, toPct: 0.8, className: "stroke-amber-300/90" },
                  { fromPct: 0.8, toPct: 1.0, className: "stroke-rose-400/90" },
                ]}
              />

              <Gauge
                title="pH"
                value={6.4}
                min={0}
                max={14}
                unit=""
                subtitle="Nivel de saturación adecuado"
                footer="82"
                segments={[
                  { fromPct: 0.0, toPct: 0.35, className: "stroke-rose-400/90" },
                  { fromPct: 0.35, toPct: 0.7, className: "stroke-emerald-400/90" },
                  { fromPct: 0.7, toPct: 1.0, className: "stroke-amber-300/90" },
                ]}
              />
            </div>

            {/* Métricas */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <MetricCard
                title="CO₂"
                value="480"
                unit="ppm"
                note="Concentración control"
                status="Óptimo"
                tone="good"
              />

              <MetricCard
                title="H₂S"
                value="1,2"
                unit="ppm"
                note="Tendencia a anaerobiosis, revisar aireación"
                tone="warn"
              />

              <MetricCard
                title="NH₃"
                value="0,8"
                unit="ppm"
                note="Acumulación en zona de riesgo, ajustar proceso"
                tone="risk"
              />
            </div>

            {/* Historial inferior */}
            <HistoryCard />
          </div>

          {/* Derecha: panel oxigenación */}
          <div className="col-span-12 lg:col-span-4">
            <OxygenationPanel
              isOn={true}
              timeOnToday="03:25 h"
              lastCycle="10:42 h"
              mode="Automático"
              program="Cada 3 h - 8 h totales diarias"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
