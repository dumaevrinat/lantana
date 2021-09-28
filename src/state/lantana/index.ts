import chroma, { Color, InterpolationMode } from 'chroma-js'
import { nanoid } from 'nanoid'
import { atom, selector } from 'recoil'
import { Picker } from '../../types'

export const colorPickers = atom<Picker[]>({
    key: 'lantanaColorPickers',
    default: [
        {
            id: nanoid(),
            color: chroma.hsl(358, 1, 0.92)
        },
        {
            id: nanoid(),
            color: chroma.hsl(238, 1, 0.10)
        },
    ]
})

export const mode = atom<InterpolationMode>({
    key: 'lantanaMode',
    default: 'hsl'
})

export const size = atom<number>({
    key: 'lantanaSize',
    default: 9
})

export const gamma = atom<number>({
    key: 'lantanaGamma',
    default: 1
})

export const colorPickersColors = selector<Color[]>({
    key: 'lantanaColorPickersColors',
    get: ({ get }) => {
        return get(colorPickers).map(picker => picker.color)
    }
})

export const lantanaColors = selector<Color[]>({
    key: 'lantanaColors',
    get: ({ get }) => {
        return chroma
            .scale(get(colorPickersColors))
            .mode(get(mode))
            .gamma(get(gamma))
            .colors(get(size), null)
    }
})
