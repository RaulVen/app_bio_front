import React from "react";
import { MantineProvider } from "@mantine/core";

import BiofungicidaView from "@/views/biofungicidaView/biofungicidaView";

export default function App() {
  return (
    <MantineProvider defaultColorScheme="light">
      <BiofungicidaView />
    </MantineProvider>
  );
}
