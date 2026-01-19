import React from "react";

function SectionTitle({ children }) {
  return (
    <div className="text-[#4f8a52] font-extrabold text-[28px] leading-none">
      {children}
    </div>
  );
}

export default function PotasioContent() {
  return (
    <div className="bg-[#cfddd6] border border-black/10 p-5">
      <div className="space-y-7 text-black text-[18px] leading-relaxed">
        {/* 1 */}
        <div>
          <SectionTitle>1. DEFINICIÓN TÉCNICA</SectionTitle>
          <div>
            Microorganismos solubilizadores de potasio presentes en la rizósfera,
            capaces de solubilizar K+ desde minerales del suelo, liberando potasio
            intercambiable y asimilable por la planta.
          </div>
        </div>

        {/* 2 */}
        <div>
          <SectionTitle>2. FUNCIÓN AGRONÓMICA</SectionTitle>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Aumentan la fracción de potasio disponible (K+ intercambiable) en
              la zona de raíz
            </li>
            <li>
              Favorecen la liberación gradual de K a partir de reservas poco
              solubles del suelo.
            </li>
            <li>
              Mejoran la eficiencia de uso de fertilizantes potásicos aplicados.
            </li>
            <li>
              Contribuyen al equilibrio nutricional N–P–K y a la absorción de
              otros cationes (Ca²+, Mg²+).
            </li>
          </ul>
        </div>

        {/* 3 */}
        <div>
          <SectionTitle>3. VENTAJAS PARA EL CULTIVO</SectionTitle>
          <ul className="list-disc pl-6 space-y-2">
            <li>Mejora de la turgencia y regulación hídrica de la planta.</li>
            <li>Incremento en la calidad de fruto o grano</li>
            <li>
              Mayor tolerancia a estrés hídrico, térmico y salino por un mejor
              balance osmótico.
            </li>
            <li>
              Reducción progresiva de la dependencia de fuentes potásicas
              sintéticas de alta dosis.
            </li>
          </ul>
        </div>

        {/* 4 */}
        <div>
          <SectionTitle>4. ROL DEL BIORREACTOR DE PRECISIÓN AGRÍCOLA</SectionTitle>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Producción controlada de consorcios solubilizadores de potasio
              adaptados al suelo.
            </li>
            <li>
              Integración IoT que registra cada ciclo de producción, parámetros
              críticos y resultados de control de calidad, asegurando la
              repetibilidad del desempeño en campo.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
