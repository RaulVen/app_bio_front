import React, { useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, MotionConfig } from "framer-motion";
import SoilLifeIcon from "@/components/landing/soil-life-icon";
import BottomBar from "@/components/common/bottom-bar/bottom-bar";

/** Fondo con movimiento suave */
function AnimatedBackdrop() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Base */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_25%,rgba(255,255,255,1)_0%,rgba(235,235,235,1)_45%,rgba(220,220,220,1)_100%)]" />

      {/* Glow grande que se desplaza */}
      <motion.div
        className="absolute -inset-[35%] blur-3xl opacity-[0.55]"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, rgba(0,0,0,0.18), transparent 55%), radial-gradient(circle at 70% 60%, rgba(0,0,0,0.14), transparent 60%)",
        }}
        initial={{ x: -40, y: -20, scale: 1.05 }}
        animate={{
          x: [-40, 30, -40],
          y: [-20, 20, -20],
          scale: [1.05, 1.12, 1.05],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Barrido diagonal suave */}
      <motion.div
        className="absolute -inset-[40%] opacity-[0.22] blur-2xl"
        style={{
          background:
            "linear-gradient(120deg, rgba(0,0,0,0.0) 0%, rgba(0,0,0,0.18) 35%, rgba(0,0,0,0.0) 70%)",
        }}
        initial={{ rotate: -8, x: -120, y: 40 }}
        animate={{ x: [-120, 120, -120] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Viñeta ligera */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(0,0,0,0)_0%,rgba(0,0,0,0.06)_60%,rgba(0,0,0,0.10)_100%)]" />
    </div>
  );
}

/** Onda inferior */
function WaveBackdrop() {
  return (
    <motion.div
      className="absolute inset-x-0 bottom-0 h-[55%] pointer-events-none"
      initial={{ y: 0, x: 0 }}
      animate={{ y: [0, -10, 0], x: [0, 22, 0] }}
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
    >
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 600" preserveAspectRatio="none">
        <defs>
          <filter id="blur" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="18" />
          </filter>
          <linearGradient id="waveGrad" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="rgba(0,0,0,0.12)" />
            <stop offset="50%" stopColor="rgba(0,0,0,0.32)" />
            <stop offset="100%" stopColor="rgba(0,0,0,0.12)" />
          </linearGradient>
        </defs>

        <path
          filter="url(#blur)"
          fill="url(#waveGrad)"
          d="M0,420 C240,520 360,210 600,310 C820,400 930,520 1200,440 L1200,600 L0,600 Z"
        />
        <path
          filter="url(#blur)"
          fill="rgba(0,0,0,0.10)"
          d="M0,520 C260,560 420,420 620,470 C820,520 980,590 1200,520 L1200,600 L0,600 Z"
        />
      </svg>
    </motion.div>
  );
}

export default function LandingView() {
  // fuerza remount para que SIEMPRE se vea la animación al entrar
  const [mountKey, setMountKey] = useState(0);
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMountKey((k) => k + 1), []);

  return (
    <MotionConfig reducedMotion="never">
      <div className="min-h-screen w-full relative overflow-hidden bg-[#f3f3f3]">
        {/* Fondo */}
        <AnimatedBackdrop />

        {/* Onda inferior */}
        <WaveBackdrop />

        {/* Contenido */}
        <motion.div
          key={mountKey}
          className="relative z-10 min-h-screen flex flex-col items-center px-6 pb-24"
          initial={{ scale: 1.28, y: 40, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="w-full max-w-5xl pt-16">
            {/* Títulos */}
            <motion.div
              className="text-center"
              initial={{ y: -18, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.9, ease: "easeOut" }}
            >
              <div className="text-[#a7c653] font-extrabold tracking-tight leading-none">
                <div className="text-[44px] sm:text-[64px]">AQUÍ EMPIEZA LA VIDA</div>
                <div className="text-[44px] sm:text-[64px]">DEL SUELO</div>
              </div>

              <div className="mt-4 text-gray-600 tracking-wide text-[14px] sm:text-[18px]">
                MICROBIOLOGÍA ENDÉMICA ACTIVADA.
              </div>
            </motion.div>

            {/* Icono central */}
            <div className="mt-14 flex justify-center">
              <motion.div
                initial={{ scale: 0.92, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.35, duration: 0.9, ease: "easeOut" }}
                className="relative"
              >
                <motion.div
                  className="absolute inset-0 rounded-full bg-black/5 blur-2xl"
                  animate={{ opacity: [0.35, 0.55, 0.35], scale: [1, 1.05, 1] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                />
                <SoilLifeIcon />
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* ✅ BottomBar unificado */}
        <BottomBar />
      </div>
    </MotionConfig>
  );
}
