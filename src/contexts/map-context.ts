import { initialState, MapAction, MapState } from '@/reducers/map';
import { createContext, Dispatch } from 'react';

export const MapContext = createContext<MapState>(initialState);
export const MapDispatchContext = createContext<Dispatch<MapAction>>(() => {});