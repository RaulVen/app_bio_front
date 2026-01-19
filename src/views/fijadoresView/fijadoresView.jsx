import React from "react";

import BottomBar from "@/components/common/bottom-bar/bottom-bar";
import FloatingToolbar from "@/components/consortium-components/floating-toolbar/floating-toolbar";

// Reutilizado (si lo moviste a common, cambia este import)
import CalendarBadge from "@/components/common/calendar-badge/calendar-badge";


import ConsortiumSideCard from "@/components/consortium-fijadores/consortium-side-card/consortium-side-card";
import FijadoresHeaderBar from "@/components/consortium-fijadores/fijadores-header-bar/fijadores-header-bar";
import FijadoresContent from "@/components/consortium-fijadores/fijadores-content/fijadores-content";

export default function FijadoresView() {
  return (
    <div className="min-h-screen w-full bg-[#f2f2f2] relative overflow-hidden">
      {/* Fondo suave */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,1)_0%,rgba(241,241,241,1)_55%,rgba(232,232,232,1)_100%)]" />

      <div className="relative z-10 w-full px-10 pt-10 pb-28">
        {/* Top: calendario (izquierda) + barra verde (derecha) */}
        <div className="flex items-start gap-10">
          {/* Izq: calendario */}
          <div className="shrink-0">
            <CalendarBadge month="October" day="10" />
          </div>

          {/* Der: header verde con toolbar */}
          <div className="flex-1">
            <FijadoresHeaderBar
              title="FIJADORES DE NITRÓGENO"
              toolbar={
                <FloatingToolbar
                  onAdd={() => console.log("add")}
                  onMenu={() => console.log("menu")}
                  onBack={() => console.log("back")}
                />
              }
            />
          </div>
        </div>

        {/* Body: izquierda (card consorcio) + derecha (contenido grande) */}
        <div className="mt-10 grid grid-cols-12 gap-0">
          {/* Izquierda */}
          <div className="col-span-12 lg:col-span-3">
            <ConsortiumSideCard
              title="FIJADORES DE NITRÓGENO"
              consortiumLabel="CONSORCIO"
              consortiumLetter="B"
            />
          </div>

          {/* Derecha */}
          <div className="col-span-12 lg:col-span-9">
            <FijadoresContent />
          </div>
        </div>
      </div>

      {/* BottomBar */}
      <BottomBar />
    </div>
  );
}
