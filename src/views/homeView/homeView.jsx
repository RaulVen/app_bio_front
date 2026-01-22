import React from "react";

import Gauge from "@/components/home-components/gauge/gauge";
import HistoryCard from "@/components/home-components/history-card/history-card";
import MetricCard from "@/components/home-components/metric-card/metric-card";
import OxygenationPanel from "@/components/home-components/oxygenation-panel/oxygenation-panel";
import BottomBar from "@/components/common/bottom-bar/bottom-bar";

export default function HomeView() {
  return (
    <div className="min-h-screen w-full bg-[#212121] relative overflow-hidden">
      {/* Glows de fondo */}
      <div className="pointer-events-none absolute -top-48 -left-52 h-[620px] w-[620px] rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-64 -right-52 h-[720px] w-[720px] rounded-full bg-blue-500/10 blur-3xl" />

      {/* ✅ padding-bottom para que BottomBar NO tape el contenido */}
      <div className="relative max-w-6xl mx-auto px-6 py-10 pb-28">
        <div className="grid grid-cols-12 gap-6">
          {/* Izquierda */}
          <div className="col-span-12 lg:col-span-8 space-y-6">
            {/* Gauges */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Gauge
                title="Temperatura"
                value={27}
                min={0}
                max={40}
                unit="°C"
                statusLabel="Óptimo"
                labels={[0, 20, 30, 40]}
                segments={[
                  { from: 0.0, to: 0.55, className: "stroke-emerald-400" },
                  { from: 0.55, to: 0.8, className: "stroke-amber-300" },
                  { from: 0.8, to: 1.0, className: "stroke-orange-400" },
                ]}
              />

              <Gauge
                title="pH"
                value={6.4}
                min={0}
                max={8.2}
                unit=""
                labels={[0, 8.2]}
                statusLabel="" // en pH NO debe decir “Óptimo”
                centerText="Nivel de saturación adecuado"
                footerValue="" // NO debe ir “82”
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

            {/* Historial */}
            <HistoryCard />
          </div>

          {/* Derecha */}
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

      {/* ✅ BottomBar unificado */}
      <BottomBar />
    </div>
  );
}
