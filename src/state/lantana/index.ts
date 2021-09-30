import chroma, { Color, InterpolationMode } from 'chroma-js'
import { nanoid } from 'nanoid'
import { selector } from 'recoil'
import { persistedAtom as atom} from '../persist'
import { Picker } from '../../types'

export const colorPickers = atom<Picker[]>({
    key: 'lantanaColorPickers',
    default: [
        {
            id: nanoid(),
            hex: chroma.hsl(358, 1, 0.92).hex()
        },
        {
            id: nanoid(),
            hex: chroma.hsl(238, 1, 0.10).hex()
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
        return get(colorPickers).map(picker => chroma(picker.hex))
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
