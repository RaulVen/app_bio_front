import React from "react";
import { Box, Paper, Text } from "@mantine/core";

function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n));
}

function polarToCartesian(cx, cy, r, angleDeg) {
  const a = ((angleDeg - 90) * Math.PI) / 180.0;
  return { x: cx + r * Math.cos(a), y: cy + r * Math.sin(a) };
}

function describeArc(cx, cy, r, startAngle, endAngle) {
  const start = polarToCartesian(cx, cy, r, endAngle);
  const end = polarToCartesian(cx, cy, r, startAngle);
  const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
  return `M ${start.x} ${start.y} A ${r} ${r} 0 ${largeArcFlag} 0 ${end.x} ${end.y}`;
}

/**
 * Gauge
 * - min/max/value: valores numéricos
 * - segments: [{ fromPct: 0..1, toPct: 0..1, className: "stroke-..." }]
 * - startAngle/endAngle: por defecto semi-círculo
 */
export default function Gauge({
  title,
  value,
  min = 0,
  max = 100,
  unit = "",
  subtitle,
  footer,
  startAngle = -120,
  endAngle = 120,
  segments = [],
}) {
  const v = clamp(value, min, max);
  const pct = (v - min) / (max - min || 1);
  const angle = startAngle + pct * (endAngle - startAngle);

  const cx = 100;
  const cy = 100;
  const rTrack = 76;
  const rSeg = 76;

  const needleLen = 62;
  const needle = polarToCartesian(cx, cy, needleLen, angle);

  return (
    <Paper
      radius="lg"
      p="lg"
      className="bg-white/5 border border-white/10 backdrop-blur-md"
    >
      <Text fw={700} className="text-white/90 text-lg mb-3">
        {title}
      </Text>

      <Box className="flex items-center justify-center">
        <svg width="220" height="170" viewBox="0 0 200 160" aria-label={title}>
          {/* Track */}
          <path
            d={describeArc(cx, cy, rTrack, startAngle, endAngle)}
            className="stroke-white/15"
            strokeWidth="14"
            fill="none"
            strokeLinecap="round"
          />

          {/* Segments */}
          {segments.map((s, i) => {
            const a0 = startAngle + s.fromPct * (endAngle - startAngle);
            const a1 = startAngle + s.toPct * (endAngle - startAngle);
            return (
              <path
                key={i}
                d={describeArc(cx, cy, rSeg, a0, a1)}
                className={s.className}
                strokeWidth="14"
                fill="none"
                strokeLinecap="round"
              />
            );
          })}

          {/* Ticks (ligeros) */}
          {Array.from({ length: 7 }).map((_, i) => {
            const t = i / 6;
            const a = startAngle + t * (endAngle - startAngle);
            const p1 = polarToCartesian(cx, cy, rTrack - 2, a);
            const p2 = polarToCartesian(cx, cy, rTrack - 14, a);
            return (
              <line
                key={i}
                x1={p1.x}
                y1={p1.y}
                x2={p2.x}
                y2={p2.y}
                className="stroke-white/30"
                strokeWidth="2"
                strokeLinecap="round"
              />
            );
          })}

          {/* Needle */}
          <line
            x1={cx}
            y1={cy}
            x2={needle.x}
            y2={needle.y}
            className="stroke-white"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <circle cx={cx} cy={cy} r="8" className="fill-white/90" />

          {/* Center text */}
          <text
            x="100"
            y="105"
            textAnchor="middle"
            className="fill-white font-semibold"
            fontSize="22"
          >
            {typeof value === "number" ? value.toString().replace(".", ",") : value}
            {unit ? ` ${unit}` : ""}
          </text>

          {subtitle ? (
            <text
              x="100"
              y="130"
              textAnchor="middle"
              className="fill-white/70"
              fontSize="12"
            >
              {subtitle}
            </text>
          ) : null}
        </svg>
      </Box>

      {footer ? (
        <div className="mt-2 text-center">
          <Text className="text-white/70 text-sm">{footer}</Text>
        </div>
      ) : null}
    </Paper>
  );
}
