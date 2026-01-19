import React from "react";

function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n));
}
function lerp(a, b, t) {
  return a + (b - a) * t;
}
function polarToCartesian(cx, cy, r, angleDeg) {
  const a = (((angleDeg % 360) - 90) * Math.PI) / 180;
  return { x: cx + r * Math.cos(a), y: cy + r * Math.sin(a) };
}
function describeArc(cx, cy, r, startAngle, endAngle) {
  let s = startAngle;
  let e = endAngle;

  // ✅ Normaliza: si el arco cruza 0/360, lo hacemos continuo
  if (e < s) e += 360;

  const start = polarToCartesian(cx, cy, r, e);
  const end = polarToCartesian(cx, cy, r, s);
  const largeArcFlag = e - s <= 180 ? "0" : "1";
  return `M ${start.x} ${start.y} A ${r} ${r} 0 ${largeArcFlag} 0 ${end.x} ${end.y}`;
}

function wrapText(text = "", maxChars = 22) {
  if (!text) return [];
  const words = text.split(" ");
  const lines = [];
  let line = "";
  for (const w of words) {
    const next = line ? `${line} ${w}` : w;
    if (next.length <= maxChars) line = next;
    else {
      if (line) lines.push(line);
      line = w;
    }
  }
  if (line) lines.push(line);
  return lines.slice(0, 2); // máximo 2 líneas
}

export default function Gauge({
  title,
  value,
  min = 0,
  max = 100,
  unit = "",
  labels = [],
  segments = [], // (no se usa, lo dejamos por compatibilidad)
  statusLabel = "",
  centerText = "",
  footerValue = "",
}) {
  // ✅ Dial principal (tú confirmaste que esto es óptimo)
  const dialStart = 240;
  const dialEnd = 480;

  // (opcional) arco base tenue "decorativo" arriba
  const arcStart = 260;
  const arcEnd = 380;

  const v = clamp(Number(value), min, max);
  const pct = (v - min) / (max - min || 1);
  const needleAngle = lerp(dialStart, dialEnd, pct);

  const cx = 120;
  const cy = 120;

  // radios (bisel + cara)
  const rOuter = 106;
  const rRing = 96;
  const rFace = 84;

  const rArc = 98;
  const arcW = 10;

  const rTickOuter = 86;
  const rTickInnerMajor = 70;
  const rTickInnerMinor = 76;
  const rLabel = 62;

  const rNeedle = 56;
  const tip = polarToCartesian(cx, cy, rNeedle, needleAngle);

  const valStr = String(value).replace(".", ",");

  const angleForValue = (val) => {
    const t = (val - min) / (max - min || 1);
    return lerp(dialStart, dialEnd, clamp(t, 0, 1));
  };

  const wrappedCenter = wrapText(centerText, 22);

  // ✅ Arco por valores: empieza en 20 (verde) y termina en 30 (rojo)
  const arcGreenFrom = 20;
  const arcGreenTo = 26;
  const arcYellowTo = 29;
  const arcRedTo = 30;

  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.35)] backdrop-blur-md p-6">
      <div className="text-white/90 font-semibold text-lg mb-3">{title}</div>

      <div className="flex justify-center">
        <svg width="260" height="210" viewBox="0 0 240 200">
          <defs>
            <radialGradient id="ring" cx="50%" cy="40%" r="75%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.08)" />
              <stop offset="60%" stopColor="rgba(255,255,255,0.03)" />
              <stop offset="100%" stopColor="rgba(0,0,0,0.35)" />
            </radialGradient>

            <radialGradient id="face" cx="50%" cy="40%" r="80%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.06)" />
              <stop offset="70%" stopColor="rgba(255,255,255,0.02)" />
              <stop offset="100%" stopColor="rgba(0,0,0,0.35)" />
            </radialGradient>

            {/* ✅ Recorte circular para que nada “se salga” */}
            <clipPath id="dialClip">
              <circle cx={cx} cy={cy} r={rOuter + 2} />
            </clipPath>
          </defs>

          <g clipPath="url(#dialClip)">
            {/* bisel */}
            <circle
              cx={cx}
              cy={cy}
              r={rOuter}
              fill="none"
              stroke="rgba(255,255,255,0.12)"
              strokeWidth="10"
            />
            <circle
              cx={cx}
              cy={cy}
              r={rRing}
              fill="url(#ring)"
              stroke="rgba(255,255,255,0.08)"
              strokeWidth="2"
            />
            <circle cx={cx} cy={cy} r={rFace} fill="url(#face)" />

            {/* arco base tenue */}
            <path
              d={describeArc(cx, cy, rArc, arcStart, arcEnd)}
              stroke="rgba(255,255,255,0.14)"
              strokeWidth={arcW}
              fill="none"
              strokeLinecap="round"
            />

            {/* ✅ arco por valores 20->30 */}
            <path
              d={describeArc(cx, cy, rArc, angleForValue(arcGreenFrom), angleForValue(arcGreenTo))}
              stroke="rgba(52,211,153,0.95)"
              strokeWidth={arcW}
              fill="none"
              strokeLinecap="round"
            />
            <path
              d={describeArc(cx, cy, rArc, angleForValue(arcGreenTo), angleForValue(arcYellowTo))}
              stroke="rgba(253,224,71,0.95)"
              strokeWidth={arcW}
              fill="none"
              strokeLinecap="round"
            />
            <path
              d={describeArc(cx, cy, rArc, angleForValue(arcYellowTo), angleForValue(arcRedTo))}
              stroke="rgba(251,146,60,0.95)"
              strokeWidth={arcW}
              fill="none"
              strokeLinecap="round"
            />

            {/* ticks menores */}
            {Array.from({ length: 19 }).map((_, i) => {
              const t = i / 18;
              const a = lerp(dialStart, dialEnd, t);
              const p1 = polarToCartesian(cx, cy, rTickOuter, a);
              const p2 = polarToCartesian(cx, cy, rTickInnerMinor, a);
              return (
                <line
                  key={`mi-${i}`}
                  x1={p1.x}
                  y1={p1.y}
                  x2={p2.x}
                  y2={p2.y}
                  stroke="rgba(255,255,255,0.18)"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              );
            })}

            {/* ticks mayores */}
            {Array.from({ length: 7 }).map((_, i) => {
              const t = i / 6;
              const a = lerp(dialStart, dialEnd, t);
              const p1 = polarToCartesian(cx, cy, rTickOuter, a);
              const p2 = polarToCartesian(cx, cy, rTickInnerMajor, a);
              return (
                <line
                  key={`ma-${i}`}
                  x1={p1.x}
                  y1={p1.y}
                  x2={p2.x}
                  y2={p2.y}
                  stroke="rgba(255,255,255,0.40)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              );
            })}

            {/* labels alrededor */}
            {labels.map((n) => {
              const a = angleForValue(n);
              const p = polarToCartesian(cx, cy, rLabel, a);
              return (
                <text
                  key={n}
                  x={p.x}
                  y={p.y + 6}
                  textAnchor="middle"
                  fontSize="18"
                  fill="rgba(255,255,255,0.90)"
                  style={{ fontWeight: 700 }}
                >
                  {String(n).replace(".", ",")}
                </text>
              );
            })}

            {/* ✅ valor arriba (más pegado a las líneas) */}
            <text
              x={cx + 10}
              y={cy - 34}   // ✅ antes -22
              textAnchor="middle"
              fontSize="16"
              fill="rgba(255,255,255,0.92)"
              style={{ fontWeight: 800 }}
            >
              {valStr}
            </text>

            {/* unidad arriba derecha */}
            {unit ? (
              <text
                x={cx + 44}
                y={cy - 34}  // ✅ alineada con el valor
                fontSize="12"
                fill="rgba(255,255,255,0.55)"
                style={{ fontWeight: 700 }}
              >
                {unit}
              </text>
            ) : null}

            {/* aguja */}
            <line
              x1={cx}
              y1={cy}
              x2={tip.x}
              y2={tip.y}
              stroke="rgba(255,255,255,0.92)"
              strokeWidth="7"
              strokeLinecap="round"
            />
            <circle cx={cx} cy={cy} r="12" fill="rgba(0,0,0,0.28)" />
            <circle cx={cx} cy={cy} r="6" fill="rgba(255,255,255,0.10)" />

            {/* ✅ texto central (más abajo) */}
            {wrappedCenter.length ? (
              <>
                <text
                  x={cx}
                  y={cy + 38} // ✅ antes +28
                  textAnchor="middle"
                  fontSize="12"
                  fill="rgba(255,255,255,0.70)"
                  style={{ fontWeight: 600 }}
                >
                  {wrappedCenter[0]}
                </text>
                {wrappedCenter[1] ? (
                  <text
                    x={cx}
                    y={cy + 54} // ✅ antes +44
                    textAnchor="middle"
                    fontSize="12"
                    fill="rgba(255,255,255,0.70)"
                    style={{ fontWeight: 600 }}
                  >
                    {wrappedCenter[1]}
                  </text>
                ) : null}
              </>
            ) : null}

            {/* Estado + label abajo */}
            {statusLabel ? (
              <>
                <text
                  x={cx}
                  y={cy + 48}
                  textAnchor="middle"
                  fontSize="12"
                  fill="rgba(255,255,255,0.55)"
                  style={{ fontWeight: 700 }}
                >
                  Estado:
                </text>
                <text
                  x={cx}
                  y={cy + 70}
                  textAnchor="middle"
                  fontSize="18"
                  fill="rgba(255,255,255,0.92)"
                  style={{ fontWeight: 800 }}
                >
                  {statusLabel}
                </text>
              </>
            ) : null}

            {/* footer value */}
            {footerValue ? (
              <text
                x={cx + 68}
                y={cy + 58}
                textAnchor="middle"
                fontSize="16"
                fill="rgba(255,255,255,0.85)"
                style={{ fontWeight: 800 }}
              >
                {footerValue}
              </text>
            ) : null}
          </g>
        </svg>
      </div>
    </div>
  );
}
