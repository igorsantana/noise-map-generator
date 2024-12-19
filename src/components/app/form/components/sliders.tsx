import getFormDefaults from "../schema";
import SliderForm from "./slider-form";

export default function Sliders() {
  const form = getFormDefaults();

  return (
    <>
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
    </>
  );
}
