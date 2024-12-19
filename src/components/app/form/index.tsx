import { Button } from "@/components/ui/button";
import { Plus, RotateCcw } from "lucide-react";
import { MapDispatchContext } from "@/contexts/map-context";
import { useContext } from "react";
import Sliders from "./components/sliders";
import { Separator } from "@/components/ui/separator";

export default function FormPane() {
  const dispatch = useContext(MapDispatchContext);

  const resetSliders = () => {
    dispatch({ type: "RESET", payload: 0 });
  };

  return (
    <main className="w-3/12 h-screen">
      <div className="w-10/12 m-auto mt-2">
        <>
          <div className="flex items-center justify-between	">
            <h3 className="m-0"> Map Parameters</h3>
            <Button onClick={() => resetSliders()} size="sm">
              <RotateCcw /> Reset
            </Button>
          </div>
          <Sliders />
        </>
        <Separator className="mt-2 mb-2" />
        <>
          <div className="flex items-center justify-between	">
            <h3 className="m-0"> Colors</h3>
            <Button variant="outline" size="icon" className="w-6 h-6">
              <Plus />
            </Button>
          </div>
          <div className="flex items-center justify-between	"></div>
        </>
      </div>
    </main>
  );
}
