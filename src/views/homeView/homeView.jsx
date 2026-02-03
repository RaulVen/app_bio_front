import React from "react";
import BottomBar from "@/components/common/bottom-bar/bottom-bar";

/** ---------- Helpers ---------- */
function statusFromValue(value, { goodMax, warnMax }) {
  if (value <= goodMax) return "good";
  if (value <= warnMax) return "warn";
  return "risk";
}

function SwitchRow({ label, on = true }) {
  return (
    <div className="flex items-center justify-between gap-4 py-2">
      <div className="text-white/80 text-sm">{label}</div>

      <div className="flex items-center gap-3">
        <div className={`text-xs font-semibold ${on ? "text-emerald-400" : "text-white/50"}`}>
          {on ? "ENCENDIDO" : "APAGADO"}
        </div>

        {/* Toggle visual (solo UI) */}
        <div
          className={[
            "w-12 h-7 rounded-full border",
            on ? "bg-emerald-500/80 border-emerald-300/40" : "bg-white/10 border-white/15",
            "relative",
          ].join(" ")}
        >
          <div
            className={[
              "absolute top-1 w-5 h-5 rounded-full bg-white",
              on ? "left-6" : "left-1",
              "transition-all",
            ].join(" ")}
          />
        </div>
      </div>
    </div>
  );
}

/** ---------- Components UI (sin Mantine) ---------- */
function GlassCard({ children, className = "" }) {
  return (
    <div
      className={[
        "rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md",
        "shadow-[0_18px_60px_rgba(0,0,0,0.35)]",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}

function MetricTile({ title = "O₂", value = "480", unit = "ppm", note = "Concentración control", status = "Óptimo" }) {
  return (
    <div
      className={[
        "rounded-xl overflow-hidden",
        "bg-emerald-500/15 border border-emerald-300/15 backdrop-blur-md",
        "shadow-[0_12px_40px_rgba(0,0,0,0.35)]",
      ].join(" ")}
    >
      <div className="px-4 py-3 text-center text-white/90 font-extrabold text-xl tracking-wide bg-emerald-500/15">
        {title}
      </div>

      <div className="px-4 py-4 text-center">
        <div className="text-white font-black text-3xl leading-none">
          {value} <span className="text-white/80 text-lg font-bold">{unit}</span>
        </div>

        <div className="mt-3 text-white/80 text-sm">{note}</div>
        <div className="mt-2 text-white/85 text-sm">
          <span className="text-white/60">Estado:</span> {status}
        </div>
      </div>
    </div>
  );
}

/** Placeholder para que compile aunque tu Gauge real aún use Mantine */
function GaugePlaceholder({ title = "Tanque 1", value = "6.4", subtitle = "Nivel de\nsaturación\nadecuado" }) {
  return (
    <div className="flex flex-col items-center">
      <div className="text-white/85 text-sm mb-2">
        {title} <span className="text-white/60">PH</span>
      </div>

      <div className="w-[240px] h-[240px] rounded-full border border-white/10 bg-white/5 backdrop-blur-md relative shadow-[0_18px_60px_rgba(0,0,0,0.35)]">
        {/* aro */}
        <div className="absolute inset-5 rounded-full border border-white/15" />

        {/* aguja simple */}
        <div className="absolute left-1/2 top-1/2 w-[2px] h-[80px] bg-white/80 origin-bottom -translate-x-1/2 -translate-y-full rotate-[35deg]" />
        <div className="absolute left-1/2 top-1/2 w-4 h-4 bg-white/25 rounded-full -translate-x-1/2 -translate-y-1/2 border border-white/10" />

        {/* texto */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="text-white font-black text-2xl">{value}</div>
          <div className="mt-3 text-white/70 text-xs whitespace-pre-line text-center leading-snug">
            {subtitle}
          </div>
        </div>

        {/* marcas laterales (0 y 82 para parecerse) */}
        <div className="absolute left-7 bottom-14 text-white/70 text-xs">0</div>
        <div className="absolute right-7 bottom-14 text-white/70 text-xs">82</div>
      </div>
    </div>
  );
}

function BioReactorTile({ label = "Biorreactor 1", status = "good" }) {
  const styles = {
    good: { ring: "ring-emerald-300/60", bg: "bg-emerald-500/10" },
    warn: { ring: "ring-amber-300/70", bg: "bg-amber-500/10" },
    risk: { ring: "ring-rose-300/70", bg: "bg-rose-500/10" },
  };
  const s = styles[status] ?? styles.good;

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="text-white/70 text-xs">{label}</div>

      <div
        className={[
          "w-[120px] h-[92px] rounded-xl",
          "ring-1",
          s.ring,
          s.bg,
          "border border-white/10 backdrop-blur-md",
          "shadow-[0_12px_40px_rgba(0,0,0,0.35)]",
          "flex items-center justify-center",
        ].join(" ")}
      >
        {/* Icono placeholder. Si ya tienes el SVG del biorreactor, lo ponemos aquí */}
        <div className="text-white/90 text-2xl">🧫</div>
      </div>
    </div>
  );
}

function HistoryMiniCard() {
  return (
    <GlassCard className="p-4">
      <div className="flex items-center gap-2">
        <div className="text-white/80">📈</div>
        <div className="text-white/90 font-bold">Historial y gráficas</div>
      </div>

      <div className="mt-2 grid grid-cols-[1fr_120px] gap-4 items-center">
        <div className="text-white/70 text-sm leading-snug">
          Explora la tendencia de las últimas 72 horas y revisa eventos críticos.
        </div>

        {/* mini chart */}
        <div className="h-12 w-full rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
          <svg viewBox="0 0 120 40" className="w-[110px] h-[34px]">
            <polyline
              fill="none"
              stroke="rgba(255,255,255,0.7)"
              strokeWidth="2"
              points="2,28 18,22 34,26 50,16 66,20 82,12 98,18 118,8"
            />
            <circle cx="118" cy="8" r="2.5" fill="rgba(255,255,255,0.85)" />
          </svg>
        </div>
      </div>
    </GlassCard>
  );
}

function OxygenationPanel() {
  return (
    <GlassCard className="p-6">
      <div className="text-white/95 font-extrabold text-2xl mb-4">
        Oxigenación y ciclos
      </div>

      <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
        <SwitchRow label="Bomba de recirculación:" on />
        <div className="h-px bg-white/10 my-2" />
        <SwitchRow label="Compresor airador A:" on />
        <div className="h-px bg-white/10 my-2" />
        <SwitchRow label="Compresor airador B:" on />
        <div className="h-px bg-white/10 my-2" />
        <SwitchRow label="Paro de emergencia:" on />
      </div>

      <div className="mt-4 space-y-3">
        <div className="h-px bg-white/10" />

        <div>
          <div className="text-white/60 text-sm">Tiempo ON acumulado hoy:</div>
          <div className="text-white font-bold text-lg">03:25 h</div>
        </div>

        <div className="h-px bg-white/10" />

        <div>
          <div className="text-white/60 text-sm">Último ciclo iniciado:</div>
          <div className="text-white font-bold text-lg">10:42 h</div>
        </div>

        <div className="h-px bg-white/10" />
      </div>
    </GlassCard>
  );
}

/** ---------- PAGE ---------- */
export default function HomeView() {
  // Valores mock (listos para conectar luego)
  const readings = [
    { id: 1, value: 12 },
    { id: 2, value: 45 },
    { id: 3, value: 72 },
    { id: 4, value: 90 },
  ];

  const reactorStatus = readings.map((r) => ({
    ...r,
    status: statusFromValue(r.value, { goodMax: 30, warnMax: 70 }),
  }));

  return (
    <div className="min-h-screen w-full relative overflow-hidden bg-[#0b1623]">
      {/* Fondo tipo “neblina/spotlight” */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_35%_20%,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0.04)_35%,rgba(0,0,0,0)_70%)]" />
      <div className="pointer-events-none absolute -top-64 -left-64 h-[720px] w-[720px] rounded-full bg-white/5 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-80 -right-72 h-[820px] w-[820px] rounded-full bg-white/5 blur-3xl" />

      {/* Contenido */}
      <div className="relative z-10 max-w-6xl mx-auto px-10 pt-10 pb-28">
        <div className="grid grid-cols-12 gap-8 items-start">
          {/* LEFT */}
          <div className="col-span-12 lg:col-span-8">
            {/* Gauges */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="flex flex-col items-center gap-6">
                <GaugePlaceholder title="Tanque 1" value="6,4" />
                <MetricTile />
              </div>

              <div className="flex flex-col items-center gap-6">
                <GaugePlaceholder title="Tanque 2" value="6,4" />
                <MetricTile />
              </div>
            </div>

            {/* Reactores */}
            <div className="mt-10">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {reactorStatus.map((r) => (
                  <BioReactorTile
                    key={r.id}
                    label={`Biorreactor ${r.id}`}
                    status={r.status}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="col-span-12 lg:col-span-4 space-y-6">
            <OxygenationPanel />
            <HistoryMiniCard />
          </div>
        </div>
      </div>

      <BottomBar />
    </div>
  );
}
