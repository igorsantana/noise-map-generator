import { MapContext, MapDispatchContext } from "@/contexts/map-context";
import mapReducer, { initialState } from "@/reducers/map";
import { ReactNode, useReducer } from "react";

export function MapProvider({ children }: { children: ReactNode }) {
  const [mapData, dispatch] = useReducer(mapReducer, initialState);

  return (
    <MapContext.Provider value={mapData}>
      <MapDispatchContext.Provider value={dispatch}>
        {children}
      </MapDispatchContext.Provider>
    </MapContext.Provider>
  );
}
