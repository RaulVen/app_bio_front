import React from "react";

function SectionTitle({ children }) {
  return (
    <div className="text-[#4d8a51] font-extrabold text-[30px] leading-none">
      {children}
    </div>
  );
}

function Paragraph({ children }) {
  return <div className="text-black text-[22px] leading-snug">{children}</div>;
}

function Bullets({ items = [] }) {
  return (
    <ul className="list-disc pl-8 space-y-2 text-black text-[22px] leading-snug">
      {items.map((t, i) => (
        <li key={i}>{t}</li>
      ))}
    </ul>
  );
}

export default function BiofungicidaContent() {
  return (
    <div className="bg-[#cfdcd3] min-h-[540px] px-8 py-6">
      <div className="space-y-7">
        {/* 1 */}
        <div className="space-y-2">
          <SectionTitle>1. DEFINICIÓN TÉCNICA</SectionTitle>
          <Paragraph>
            Consorcio de hongos benéficos del suelo con alta capacidad de colonizar la rizósfera y la
            superficie de la raíz. Producen enzimas líticas (quitinasas, glucanasas, celulasas) y
            metabolitos antifúngicos que antagonizan a hongos fitopatógenos.
          </Paragraph>
        </div>

        {/* 2 */}
        <div className="space-y-3">
          <SectionTitle>2. FUNCIÓN AGRONÓMICA</SectionTitle>
          <Bullets
            items={[
              "Desplazan y parasitan hongos fitopatógenos en raíz, cuello y zona de germinación de la semilla.",
              "Degradan estructuras ricas en quitina y otros polímeros presentes en hongos y algunos insectos del suelo.",
              "Inducen respuestas de defensa en la planta (resistencia sistémica inducida, ISR).",
              "Favorecen la descomposición de residuos y la liberación gradual de nutrientes en la rizósfera.",
            ]}
          />
        </div>

        {/* 3 */}
        <div className="space-y-3">
          <SectionTitle>3. VENTAJAS PARA EL CULTIVO</SectionTitle>
          <Bullets
            items={[
              "Reducción de la incidencia y severidad de enfermedades de raíz, tallo y corona.",
              "Disminución del uso y frecuencia de aplicaciones de fungicidas químicos.",
              "Mayor vigor inicial, emergencia más uniforme y raíces más sanas.",
            ]}
          />
        </div>

        {/* 4 */}
        <div className="space-y-3">
          <SectionTitle>4. ROL DEL BIORREACTOR DE PRECISIÓN AGRÍCOLA</SectionTitle>
          <Bullets
            items={[
              "Producción controlada de consorcios fúngicos adaptados a sus condiciones del suelo.",
              "Producción en estado líquido con monitoreo.",
              "Lotes trazables con concentración biológica homogénea.",
            ]}
          />
        </div>
      </div>
    </div>
  );
}
