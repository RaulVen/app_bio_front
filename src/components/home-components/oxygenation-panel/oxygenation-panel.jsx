import React from "react";

function Row({ label, value, valueEmphasis = false }) {
  return (
    <div className="py-3">
      <div className="text-white/60 text-sm">{label}</div>
      <div className={`text-white ${valueEmphasis ? "font-semibold" : ""}`}>
        {value}
      </div>
    </div>
  );
}

function Divider() {
  return <div className="h-px w-full bg-white/10" />;
}

/** Switch simple estilo Mantine */
function Toggle({ checked }) {
  return (
    <button
      type="button"
      aria-pressed={checked}
      className={[
        "relative inline-flex h-7 w-12 items-center rounded-full transition",
        checked ? "bg-emerald-500/80" : "bg-white/15",
      ].join(" ")}
    >
      <span
        className={[
          "inline-block h-5 w-5 transform rounded-full bg-white shadow transition",
          checked ? "translate-x-6" : "translate-x-1",
        ].join(" ")}
      />
    </button>
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
    <div className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md p-6">
      <div className="text-white/90 text-lg font-bold mb-3">
        Oxigenación y ciclos
      </div>

      <div className="flex items-center justify-between">
        <div className="text-white/80">
          Oxigenador:{" "}
          <span
            className={[
              "font-semibold",
              isOn ? "text-emerald-400" : "text-white/60",
            ].join(" ")}
          >
            {isOn ? "ENCENDIDO" : "APAGADO"}
          </span>
        </div>

        {/* Solo visual (readOnly como antes) */}
        <Toggle checked={isOn} />
      </div>

      <div className="my-4">
        <Divider />
      </div>

      <Row label="Tiempo ON acumulado hoy" value={timeOnToday} valueEmphasis />
      <Divider />
      <Row label="Último ciclo iniciado" value={lastCycle} valueEmphasis />
      <Divider />
      <Row label="Modo de operación" value={mode} valueEmphasis />
      <Divider />
      <Row label="Programa de aireación" value={program} valueEmphasis />

      <div className="my-4">
        <Divider />
      </div>

      <div className="mt-2">
        <div className="text-white/90 font-bold flex items-center gap-2">
          <span className="text-white/70">📉</span> Historial y gráficas
        </div>
        <div className="text-white/70 mt-2 text-sm">
          Toque para visualizar la tendencia de las últimas 72 horas y revisar eventos críticos.
        </div>
      </div>
    </div>
  );
}
