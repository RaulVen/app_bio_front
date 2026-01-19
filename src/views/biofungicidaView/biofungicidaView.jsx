import React from "react";

import BottomBar from "@/components/common/bottom-bar/bottom-bar";
import CalendarBadge from "@/components/common/calendar-badge/calendar-badge";

import ConsortiumSideCard from "@/components/consortium-biofungicida/consortium-side-card/consortium-side-card";
import BiofungicidaHeaderBar from "@/components/consortium-biofungicida/biofungicida-header-bar/biofungicida-header-bar";
import BiofungicidaContent from "@/components/consortium-biofungicida/biofungicida-content/biofungicida-content";

export default function BiofungicidaView() {
  return (
    <div className="min-h-screen w-full bg-[#f2f2f2] relative overflow-hidden">
      {/* Fondo suave */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,1)_0%,rgba(241,241,241,1)_55%,rgba(232,232,232,1)_100%)]" />

      {/* Layout principal */}
      <div className="relative z-10 max-w-7xl mx-auto px-10 pt-10 pb-28">
        {/* FILA SUPERIOR: calendario (izq) + header verde (der) */}
        <div className="grid grid-cols-12 gap-6 items-start">
          {/* Calendario a la izquierda */}
          <div className="col-span-12 lg:col-span-2 flex justify-start pt-6">
            <CalendarBadge month="October" day="10" />
          </div>

          {/* Header verde a la derecha (sin toolbar) */}
          <div className="col-span-12 lg:col-span-10">
            <BiofungicidaHeaderBar title="BIOFUNGICIDA" />
          </div>
        </div>

        {/* Cuerpo: tarjeta izquierda + contenido */}
        <div className="mt-6 grid grid-cols-12 gap-0 items-stretch">
          <div className="col-span-12 lg:col-span-3 h-full">
            <ConsortiumSideCard
              title="BIOFUNGICIDA"
              consortiumLabel="CONSORCIO"
              consortiumLetter="B"
            />
          </div>

          <div className="col-span-12 lg:col-span-9">
            <BiofungicidaContent />
          </div>
        </div>
      </div>

      <BottomBar />
    </div>
  );
}
