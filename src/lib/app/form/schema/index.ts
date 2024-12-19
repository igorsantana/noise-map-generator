

const getFormDefaults = () => {
    const prop = (min: number, max: number, step: number, initial: number) => {
        return { min, max, step, initial }
    }
    return {
        size: prop(128, 1024, 128, 256),
        freq: prop(0, 2, 0.2, 1),
        scale: prop(150, 250, 20, 200),
        amplitude: prop(0, 2, 0.2, 1),
        octave: prop(1, 12, 1, 6),
        persistence: prop(0, 1, 0.1, 0.5),
        lacunarity: prop(0, 4, 0.2, 2),
    };
}

export default getFormDefaults