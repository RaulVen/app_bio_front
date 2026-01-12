import { MantineProvider, Button } from "@mantine/core";
import HomeView from "./views/homeView/homeView";


export default function App() {
  return (
    <MantineProvider defaultColorScheme="dark">
        <HomeView/>
    </MantineProvider>
  );
}
