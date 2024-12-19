import "./App.css";
import Form from "./lib/app/form";
import NoiseMap from "./lib/app/noise-map";
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
