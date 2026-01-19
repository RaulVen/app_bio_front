import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import ConsortiumCard from "@/components/consortium-components/consortium-card/consortium-card";
import FloatingToolbar from "@/components/consortium-components/floating-toolbar/floating-toolbar";
import BottomBar from "@/components/common/bottom-bar/bottom-bar";

export default function ConsortiumView() {
  const consortia = useMemo(
    () => [
      { id: "k", title: "SOLUBILIZADOR\nDE POTASIO", dish: "green" },
      { id: "n", title: "FIJADORES DE\nNITRÓGENO", dish: "red" },
      { id: "p", title: "SOLUBILIZADOR\nDE FÓSFORO", dish: "blue" },
      { id: "m", title: "MICORRIZAS", dish: "micro" },
      { id: "h", title: "HONGOS\nBIOFUNGICIDAS", dish: "orange" },
    ],
    []
  );

  const [selectedId, setSelectedId] = useState("k");

  const [enabled, setEnabled] = useState({
    k: true,
    n: true,
    p: true,
    m: true,
    h: true,
  });

  const toggle = (id) => {
    setEnabled((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="min-h-screen w-full bg-[#efefef] relative overflow-hidden">
      {/* Fondo suave */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,1)_0%,rgba(238,238,238,1)_45%,rgba(220,220,220,1)_100%)]" />

      {/* ✅ Barra flotante */}
      <FloatingToolbar
        onAdd={() => console.log("add")}
        onMenu={() => console.log("menu")}
        onBack={() => console.log("back")}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-10 pt-16 pb-24">
        {/* Título */}
        <div className="text-[40px] leading-[1.05] font-extrabold tracking-tight text-[#5b5b5b] uppercase">
          QUE CONSORCIO
          <br />
          QUIERES REPRODUCIR?
        </div>

        {/* Contenedor de tarjetas */}
        <div className="mt-10">
          <motion.div
            className="grid grid-cols-5 gap-3 items-end"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {consortia.map((c) => (
              <ConsortiumCard
                key={c.id}
                title={c.title}
                dish={c.dish}
                selected={selectedId === c.id}
                enabled={!!enabled[c.id]}
                onSelect={() => setSelectedId(c.id)}
                onToggle={() => toggle(c.id)}
                onDownload={() => console.log("download", c.id)}
              />
            ))}
          </motion.div>
        </div>
      </div>

      {/* ✅ Franja verde con datos */}
      <BottomBar />
    </div>
  );
}
