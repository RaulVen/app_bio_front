import React from "react";

import BottomBar from "@/components/common/bottom-bar/bottom-bar";
import CalendarBadge from "@/components/common/calendar-badge/calendar-badge";

import ConsortiumSideCard from "@/components/consortium-potasio/consortium-side-card/consortium-side-card";
import PotasioHeaderBar from "@/components/consortium-potasio/potasio-header-bar/potasio-header-bar";
import PotasioContent from "@/components/consortium-potasio/potasio-content/potasio-content";

export default function PotasioView() {
  return (
    <div className="min-h-screen w-full bg-[#f2f2f2] relative overflow-hidden">
      {/* Fondo suave */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,1)_0%,rgba(241,241,241,1)_55%,rgba(232,232,232,1)_100%)]" />

      {/* Layout */}
      <div className="relative z-10 max-w-6xl mx-auto px-10 pt-10 pb-28">
        {/* Top: calendario + header verde */}
        <div className="flex items-start gap-8">
          <div className="pt-6">
            <CalendarBadge month="October" day="10" />
          </div>

          <div className="flex-1">
            <PotasioHeaderBar title="SOLUBILIZADOR DE POTASIO" />
          </div>
        </div>

        {/* Body: side card + contenido */}
        <div className="mt-10 grid grid-cols-[220px_1fr] gap-6">
          <ConsortiumSideCard
            title="SOLUBILIZADOR DE POTASIO"
            consortiumLetter="B"
          />

          <PotasioContent />
        </div>
      </div>

      <BottomBar />
    </div>
  );
}
