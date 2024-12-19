
interface Map {
    [key: string]: number
}

interface MapState extends Map {
    size: number;
    frequency: number;
    scale: number;
    amplitude: number;
    octave: number;
    persistence: number;
    lacunarity: number;
}
type MapActionType = 'CHANGE_SIZE' | 'CHANGE_FREQUENCY' |
    'CHANGE_SCALE' | 'CHANGE_AMPLITUDE' |
    'CHANGE_OCTAVE' | 'CHANGE_PERSISTENCE' |
    'CHANGE_LACUNARITY' | 'RESET'

interface MapAction {
    type: MapActionType;
    payload: number;
}


function mapReducer(state: MapState, action: MapAction) {
    if (action.type === "CHANGE_SIZE") {
        return { ...state, size: action.payload }
    }
    if (action.type === "CHANGE_FREQUENCY") {
        return { ...state, frequency: action.payload }
    }
    if (action.type === "CHANGE_SCALE") {
        return { ...state, scale: action.payload }
    }
    if (action.type === "CHANGE_AMPLITUDE") {
        return { ...state, amplitude: action.payload }
    }
    if (action.type === "CHANGE_OCTAVE") {
        return { ...state, octave: action.payload }
    }
    if (action.type === "CHANGE_PERSISTENCE") {
        return { ...state, persistence: action.payload }
    }
    if (action.type === "CHANGE_LACUNARITY") {
        return { ...state, lacunarity: action.payload }
    }
    if (action.type === 'RESET') {
        return { ...initialState }
    }
    return state
}


const initialState = {
    size: 256,
    frequency: 1,
    scale: 200,
    amplitude: 1,
    octave: 6,
    persistence: 0.5,
    lacunarity: 2
}

export { initialState };

export type { MapState, MapAction, MapActionType };

export default mapReducer