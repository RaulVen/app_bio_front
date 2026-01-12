import React from "react";
import { Paper, Text } from "@mantine/core";

export default function MetricCard({
  title,
  value,
  unit,
  note,
  status,
  tone = "neutral", // "good" | "warn" | "risk" | "neutral"
}) {
  const tones = {
    good: "bg-emerald-500/15 border-emerald-400/20",
    warn: "bg-amber-500/15 border-amber-400/20",
    risk: "bg-rose-500/15 border-rose-400/20",
    neutral: "bg-white/5 border-white/10",
  };

  return (
    <Paper
      radius="lg"
      p="lg"
      className={`${tones[tone]} border backdrop-blur-md`}
    >
      <Text fw={700} className="text-white/90 text-lg">
        {title}
      </Text>

      <div className="mt-2 flex items-end gap-2">
        <Text fw={800} className="text-white text-2xl">
          {value}
        </Text>
        <Text className="text-white/70">{unit}</Text>
      </div>

      {note ? <Text className="text-white/70 mt-3 text-sm">{note}</Text> : null}
      {status ? (
        <Text className="text-white/80 mt-2 text-sm">
          <span className="text-white/60">Estado:</span> {status}
        </Text>
      ) : null}
    </Paper>
  );
}
