import { createNoise2D } from 'simplex-noise';
import alea from 'alea';


const generateNoiseMap = (size: number, freq: number, scale: number, amp: number, oct: number, pers: number, lacun: number, seed?: number) => {
    const noise2D = seed ? createNoise2D(alea(seed)) : createNoise2D()
    const map = [...Array(size)].map(() => Array(size))
    let min = Number.POSITIVE_INFINITY
    let max = Number.NEGATIVE_INFINITY

    for (let y = 0; y < size; y++) {
        for (let x = 0; x < size; x++) {
            let iAmplitude = amp
            let iFreq = freq
            let noise = 0
            for (let ix = 0; ix < oct; ix++) {
                const sX = x / scale * iFreq
                const sY = y / scale * iFreq

                noise += noise2D(sX, sY) * iAmplitude
                iAmplitude *= pers
                iFreq *= lacun

                max = Math.max(noise, max)
                min = Math.min(noise, min)
                map[y][x] = noise
            }
        }
    }
    return { map, min, max }
}

export default generateNoiseMap
