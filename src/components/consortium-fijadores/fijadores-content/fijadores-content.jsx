import React from "react";

const green = "#3f7f4b"; // tono verde para títulos enumerados

export default function FijadoresContent() {
  return (
    <div className="bg-[#cfded6] border-l border-black/10 px-10 py-10">
      {/* 1 */}
      <SectionTitle n="1." title="DEFINICIÓN TÉCNICA" />
      <p className="text-black text-[22px] leading-snug">
        Consorcio de bacterias fijadoras de nitrógeno, capaces de colonizar la
        rizosfera y la superficie de la raíz. Transforman nitrógeno atmosférico
        en formas amoniacales asimilables por la planta.
      </p>

      <div className="h-8" />

      {/* 2 */}
      <SectionTitle n="2." title="FUNCIÓN AGRONÓMICA" />
      <ul className="list-disc pl-10 text-black text-[22px] leading-snug space-y-2">
        <li>Aportan nitrógeno biológicamente fijado directamente en la rizósfera.</li>
        <li>Producen fitohormonas que estimulan el crecimiento radicular.</li>
        <li>
          Mejoran la eficiencia de uso del nitrógeno aplicado (menor pérdida por lixiviación y
          volatilización).
        </li>
      </ul>

      <div className="h-10" />

      {/* 3 */}
      <SectionTitle n="3." title="VENTAJAS PARA EL CULTIVO" />
      <ul className="list-disc pl-10 text-black text-[22px] leading-snug space-y-2">
        <li>Disminución progresiva de la dependencia de fertilizantes nitrogenados sintéticos.</li>
        <li>
          Sistemas radicales más densos y profundos, con mayor emisión de raíces finas absorbentes.
        </li>
        <li>
          Mejor establecimiento del cultivo en etapas tempranas y mayor uniformidad de plantas.
        </li>
        <li>
          Mayor resiliencia frente a estrés hídrico y nutricional asociado a deficiencia de N
        </li>
      </ul>

      <div className="h-10" />

      {/* 4 */}
      <SectionTitle n="4." title="ROL DEL BIORREACTOR DE PRECISIÓN AGRÍCOLA" />
      <ul className="list-disc pl-10 text-black text-[22px] leading-snug space-y-2">
        <li>Producción controlada de consorcios adaptados al suelo y clima locales.</li>
        <li>Condiciones de proceso estandarizadas monitoreadas en tiempo real.</li>
        <li>Lotes trazables con concentración biológica homogénea.</li>
        <li>
          Integración IoT que permite registrar ciclos de producción, parámetros críticos y liberar
          solo partidas que cumplen criterios de calidad definidos.
        </li>
      </ul>
    </div>
  );
}

function SectionTitle({ n, title }) {
  return (
    <div className="flex items-baseline gap-3 mb-2">
      <div className="text-[26px] font-extrabold" style={{ color: green }}>
        {n}
      </div>
      <div className="text-[30px] font-extrabold uppercase tracking-wide" style={{ color: green }}>
        {title}
      </div>
    </div>
  );
}
