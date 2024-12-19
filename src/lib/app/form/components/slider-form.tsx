import { Slider } from "@/components/ui/slider";
import { MapContext, MapDispatchContext } from "@/contexts/map-context";
import { MapActionType } from "@/reducers/map";
import { useContext, useMemo } from "react";

export default function SliderForm({
  min,
  max,
  step,
  name,
  action,
}: {
  min: number;
  max: number;
  step: number;
  name: string;
  action: MapActionType;
}) {
  const state = useContext(MapContext);
  const dispatch = useContext(MapDispatchContext);
  const formatTitle = () => name.charAt(0).toUpperCase() + name.slice(1);

  const value = useMemo(() => state[name], [name, state[name]]);
  const title = useMemo(() => formatTitle(), [name]);

  return (
    <div className="mt-2">
      {title}
      <Slider
        min={min}
        max={max}
        step={step}
        value={[value]}
        onValueChange={([payload]) => dispatch({ type: action, payload })}
      />
      <div className="flex justify-between mt-1">
        <p className="text-sm font-semibold antialiased">{min}</p>
        <p className="text-sm">{value}</p>
        <p className="text-sm font-semibold antialiased">{max}</p>
      </div>
    </div>
  );
}
