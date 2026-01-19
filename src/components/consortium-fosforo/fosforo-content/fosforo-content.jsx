import React from "react";

export default function FosforoContent() {
  return (
    <div className="bg-[#d7e3da] border border-black/10 border-l-0 px-6 py-5">
      {/* Secciones */}
      <div className="space-y-8">
        {/* 1 */}
        <div>
          <div className="text-[#4c8f55] font-extrabold text-[26px] leading-none">
            1. DEFINICIÓN TÉCNICA
          </div>
          <div className="mt-2 text-black text-[16px] leading-relaxed">
            Consorcio de bacterias solubilizadoras de fosfatos presentes en la rizósfera,
            capaces de transformar formas insolubles de fósforo del suelo en formas inorgánicas
            disponibles para la planta.
          </div>
        </div>

        {/* 2 */}
        <div>
          <div className="text-[#4c8f55] font-extrabold text-[26px] leading-none">
            2. FUNCIÓN AGRONÓMICA
          </div>
          <ul className="mt-3 list-disc pl-6 text-black text-[16px] leading-relaxed space-y-1">
            <li>Incrementan la fracción de fósforo disponible en la zona de raíz.</li>
            <li>Liberan fósforo fijado en complejos con calcio, hierro y aluminio.</li>
            <li>
              Producen compuestos que favorecen el crecimiento radicular (auxinas y otros metabolitos).
            </li>
            <li>
              Mejoran la eficiencia de uso de fertilizantes fosfatados aplicados al suelo.
            </li>
          </ul>
        </div>

        {/* 3 */}
        <div>
          <div className="text-[#4c8f55] font-extrabold text-[26px] leading-none">
            3. VENTAJAS PARA EL CULTIVO
          </div>
          <ul className="mt-3 list-disc pl-6 text-black text-[16px] leading-relaxed space-y-1">
            <li>Mayor aprovechamiento del fósforo ya presente en el suelo.</li>
            <li>
              Sistemas radicales más activos, con mejor exploración de suelo y mayor absorción de P y micronutrientes asociados.
            </li>
            <li>
              Mejor arranque del cultivo, floración y llenado de frutos o granos, al tener fósforo disponible en momentos críticos.
            </li>
          </ul>
        </div>

        {/* 4 */}
        <div>
          <div className="text-[#4c8f55] font-extrabold text-[26px] leading-none">
            4. ROL DEL BIORREACTOR DE PRECISIÓN AGRÍCOLA
          </div>
          <ul className="mt-3 list-disc pl-6 text-black text-[16px] leading-relaxed space-y-1">
            <li>
              Producción controlada de consorcios solubilizadores de fósforo adaptados al suelo.
            </li>
            <li>
              Integración IoT que registra cada ciclo de producción, parámetros críticos y resultados de control de calidad, asegurando la repetibilidad del desempeño en campo.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
