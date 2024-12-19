import "./App.css";
import Form from "./components/app/form";
import NoiseMap from "./components/app/noise-map";
import { MapProvider } from "./providers/map-provider";

function App() {
  return (
    <MapProvider>
      <main className="flex items-stretch">
        <Form />
        <NoiseMap />
      </main>
    </MapProvider>
  );
}

export default App;
