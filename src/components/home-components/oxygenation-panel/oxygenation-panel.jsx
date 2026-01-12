import React from "react";
import { Paper, Switch, Divider, Text } from "@mantine/core";

function Row({ label, value, valueEmphasis = false }) {
  return (
    <div className="py-3">
      <Text className="text-white/60 text-sm">{label}</Text>
      <Text className={`text-white ${valueEmphasis ? "font-semibold" : ""}`}>
        {value}
      </Text>
    </div>
  );
}

export default function OxygenationPanel({
  isOn = true,
  timeOnToday = "03:25 h",
  lastCycle = "10:42 h",
  mode = "Automático",
  program = "Cada 3 h - 8 h totales diarias",
}) {
  return (
    <Paper radius="lg" p="lg" className="bg-white/5 border border-white/10 backdrop-blur-md">
      <Text fw={700} className="text-white/90 text-lg mb-3">
        Oxigenación y ciclos
      </Text>

      <div className="flex items-center justify-between">
        <Text className="text-white/80">
          Oxigenador:{" "}
          <span className={`${isOn ? "text-emerald-400" : "text-white/60"} font-semibold`}>
            {isOn ? "ENCENDIDO" : "APAGADO"}
          </span>
        </Text>
        <Switch checked={isOn} readOnly />
      </div>

      <Divider my="md" className="border-white/10" />

      <Row label="Tiempo ON acumulado hoy" value={timeOnToday} valueEmphasis />
      <Divider className="border-white/10" />
      <Row label="Último ciclo iniciado" value={lastCycle} valueEmphasis />
      <Divider className="border-white/10" />
      <Row label="Modo de operación" value={mode} valueEmphasis />
      <Divider className="border-white/10" />
      <Row label="Programa de aireación" value={program} valueEmphasis />

      <Divider my="md" className="border-white/10" />

      <div className="mt-2">
        <Text fw={700} className="text-white/90 flex items-center gap-2">
          <span className="text-white/70">📉</span> Historial y gráficas
        </Text>
        <Text className="text-white/70 mt-2 text-sm">
          Toque para visualizar la tendencia de las últimas 72 horas y revisar eventos críticos.
        </Text>
      </div>
    </Paper>
  );
}
