import React from "react";

import FloatingToolbar from "@/components/consortium-components/floating-toolbar/floating-toolbar";
import BottomBar from "@/components/common/bottom-bar/bottom-bar";

import ConsortiumHeader from "@/components/consortium-micorrizas/consortium-header/consortium-header";
import CalendarBadge from "@/components/common/calendar-badge/calendar-badge";
import InfoColumn from "@/components/consortium-micorrizas/info-column/info-column";

export default function MicorrizasView() {
  return (
    <div className="min-h-screen w-full bg-[#f2f2f2] relative overflow-hidden">
      {/* Fondo suave */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,1)_0%,rgba(241,241,241,1)_55%,rgba(232,232,232,1)_100%)]" />

      {/* Layout principal */}
      <div className="relative z-10 max-w-6xl mx-auto px-10 pt-10 pb-28">
        {/* Top row */}
        <div className="flex items-start justify-between">
          {/* Izq: icono + consorcio */}
          <ConsortiumHeader consortiumLabel="CONSORCIO" consortiumLetter="D" />

          {/* Centro: titulo */}
          <div className="flex-1 flex justify-center">
            <div className="text-[#6d6d6d] font-extrabold text-[64px] tracking-wide">
              MICORRIZAS
            </div>
          </div>

          {/* ✅ Der: calendario con toolbar encima (integrado) */}
          <CalendarBadge
            month="October"
            day="10"
            toolbar={
              <FloatingToolbar
                onAdd={() => console.log("add")}
                onMenu={() => console.log("menu")}
                onBack={() => console.log("back")}
              />
            }
          />
        </div>

        {/* 3 columnas */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          <InfoColumn title={<>DEFINICIÓN<br />TÉCNICA</>}>
            <div className="space-y-8">
              <div>Micorrizas arbusculares (MA)</div>
              <div>
                Hongos simbióticos del suelo que colonizan la raíz y forman una red hifal externa,
                aumentando la zona de absorción de la planta.
              </div>
            </div>
          </InfoColumn>

          <InfoColumn title={<>FUNCIÓN<br />AGRONÓMICA</>}>
            <div className="space-y-8">
              <div>Incrementan la absorción de P, N, Zn, Cu y agua.</div>
              <div>Mejoran la estructura del suelo mediante la formación de agregados estables.</div>
              <div>Contribuyen a la resiliencia frente a estrés hídrico, salino y nutricional.</div>
            </div>
          </InfoColumn>

          <InfoColumn title={<>VENTAJAS PARA EL<br />CULTIVO</>}>
            <div className="space-y-8">
              <div>Mayor eficiencia de uso de fertilizantes fosforados.</div>
              <div>Raíces más profundas y funcionales en menor tiempo.</div>
              <div>Reducción de estrés abiótico y mejor estabilidad del rendimiento.</div>
            </div>
          </InfoColumn>
        </div>
      </div>

      {/* BottomBar unificado */}
      <BottomBar />
    </div>
  );
}
