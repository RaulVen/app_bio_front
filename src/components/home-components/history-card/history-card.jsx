import React from "react";
import { Paper, Text } from "@mantine/core";

export default function HistoryCard({ compact = false }) {
  return (
    <Paper
      radius="lg"
      p={compact ? "md" : "lg"}
      className="bg-white/5 border border-white/10 backdrop-blur-md"
    >
      <div className="flex items-center gap-2">
        <span className="text-white/70">📈</span>
        <Text fw={700} className="text-white/90">
          Historial y gráficas
        </Text>
      </div>

      <Text className="text-white/70 mt-2 text-sm">
        Toque para visualizar la tendencia de las últimas 72 horas y revisar eventos críticos.
      </Text>
    </Paper>
  );
}
