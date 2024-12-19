import { Button } from "@/components/ui/button";
import getFormDefaults from "./schema";
import SliderForm from "./components/slider-form";
import { RotateCcw } from "lucide-react";
import { MapDispatchContext } from "@/contexts/map-context";
import { useContext } from "react";

export default function FormPane() {
  const form = getFormDefaults();
  const dispatch = useContext(MapDispatchContext);

  const resetSliders = () => {
    dispatch({ type: "RESET", payload: 0 });
  };

  return (
    <main className="w-3/12 h-screen">
      <div className="w-10/12 m-auto  mt-2 flex justify-end">
        <Button onClick={() => resetSliders()}>
          <RotateCcw /> Reset
        </Button>
      </div>
      <div className="w-10/12 m-auto">
        {/* <SliderForm
          min={form.size.min}
          max={form.size.max}
          step={form.size.step}
          name="size"
          action="CHANGE_SIZE"
        /> */}
        <SliderForm
          min={form.scale.min}
          max={form.scale.max}
          step={form.scale.step}
          name="scale"
          action="CHANGE_SCALE"
        />
        <SliderForm
          min={form.freq.min}
          max={form.freq.max}
          step={form.freq.step}
          name="frequency"
          action="CHANGE_FREQUENCY"
        />
        <SliderForm
          min={form.octave.min}
          max={form.octave.max}
          step={form.octave.step}
          name="octave"
          action="CHANGE_OCTAVE"
        />
        <SliderForm
          min={form.amplitude.min}
          max={form.amplitude.max}
          step={form.amplitude.step}
          name="amplitude"
          action="CHANGE_AMPLITUDE"
        />
        <SliderForm
          min={form.persistence.min}
          max={form.persistence.max}
          step={form.persistence.step}
          name="persistence"
          action="CHANGE_PERSISTENCE"
        />
        <SliderForm
          min={form.lacunarity.min}
          max={form.lacunarity.max}
          step={form.lacunarity.step}
          name="lacunarity"
          action="CHANGE_LACUNARITY"
        />
      </div>
    </main>
  );
}
