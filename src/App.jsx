import React from "react";

import LandingView from "@/views/landingView/landingView";
import HomeView from "@/views/homeView/homeView";

// Consorcios
import MicorrizasView from "@/views/micorrizasView/micorrizasView";
import FijadoresView from "@/views/fijadoresView/fijadoresView";
import BiofungicidaView from "@/views/biofungicidaView/biofungicidaView";
import FosforoView from "@/views/fosforoView/fosforoView";
import PotasioView from "@/views/potasioView/potasioView";

// ✅ Cambia aquí la pantalla que quieres ver
const SCREEN = "home";
// opciones:
// "landing" | "home" | "micorrizas" | "fijadores" | "biofungicida" | "fosforo" | "potasio"

export default function App() {
  switch (SCREEN) {
    case "landing":
      return <LandingView />;

    case "home":
      return <HomeView />;

    case "micorrizas":
      return <MicorrizasView />;

    case "fijadores":
      return <FijadoresView />;

    case "biofungicida":
      return <BiofungicidaView />;

    case "fosforo":
      return <FosforoView />;

    case "potasio":
      return <PotasioView />;

    default:
      return <HomeView />;
  }
}
