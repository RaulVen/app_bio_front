import React from "react";

import BottomBar from "@/components/common/bottom-bar/bottom-bar";
import CalendarBadge from "@/components/common/calendar-badge/calendar-badge";

import ConsortiumSideCard from "@/components/consortium-fosforo/consortium-side-card/consortium-side-card";
import FosforoHeaderBar from "@/components/consortium-fosforo/fosforo-header-bar/fosforo-header-bar";
import FosforoContent from "@/components/consortium-fosforo/fosforo-content/fosforo-content";

export default function FosforoView() {
  return (
    <div className="min-h-screen w-full bg-[#f2f2f2] relative overflow-hidden">
      {/* Fondo suave */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_15%,rgba(255,255,255,1)_0%,rgba(244,244,244,1)_55%,rgba(235,235,235,1)_100%)]" />

      {/* Contenido */}
      <div className="relative z-10 max-w-6xl mx-auto px-10 pt-10 pb-28">
        {/* Row superior: calendario izq + header verde */}
        <div className="flex items-start gap-10">
          {/* Calendario */}
          <div className="pt-2">
            <CalendarBadge month="October" day="10" />
          </div>

          {/* Header verde (con acciones opcionales) */}
          <div className="flex-1">
            <FosforoHeaderBar
              title={"SOLUBILIZADOR DE\nFOSFORO"}
              showHeaderActions={true}
              onBack={() => window.history.back()}
              onMenu={() => console.log("menu")}
            />
          </div>
        </div>

        {/* Body: panel izquierdo + panel derecho */}
        <div className="mt-6 grid grid-cols-12 gap-0 items-stretch">
          <div className="col-span-12 lg:col-span-3 h-full">
            <ConsortiumSideCard
              title={"SOLUBILIZADOR\nDE FOSFORO"}
              consortiumLabel="CONSORCIO"
              consortiumLetter="B"
            />
          </div>

          <div className="col-span-12 lg:col-span-9">
            <FosforoContent />
          </div>
        </div>
      </div>

      {/* BottomBar unificado */}
      <BottomBar />
    </div>
  );
}
