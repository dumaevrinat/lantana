import chroma, { Color } from 'chroma-js'
import { Scale } from 'chroma-js'
import { atom, selector } from 'recoil'

export const size = atom<number>({
    key: 'cubehelixSize',
    default: 9
})

export const start = atom<number>({
    key: 'cubehelixStart',
    default: 300
})

export const rotations = atom<number>({
    key: 'cubehelixRotations',
    default: -0.4
})

export const hue = atom<number>({
    key: 'cubehelixHue',
    default: 1
})

export const gamma = atom<number>({
    key: 'cubehelixGamma',
    default: 1
})

export const dark = atom<number>({
    key: 'cubehelixDark',
    default: 0.1
})

export const light = atom<number>({
    key: 'cubehelixLight',
    default: 0.9
})

const cubehelixScale = selector<Scale>({
    key: 'cubehelixScale',
    get: ({ get }) => {
        return chroma
            .cubehelix()
            .start(get(start))
            .rotations(get(rotations))
            .gamma(get(gamma))
            .lightness([get(dark), get(light)])
            .scale()
    }
})

export const cubehelixColors = selector<Color[]>({
    key: 'cubehelixColors',
    get: ({ get }) => {
        return get(cubehelixScale).colors(get(size), null)
    }
})
