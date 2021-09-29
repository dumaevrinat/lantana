import chroma from 'chroma-js'
import { Color } from 'chroma-js'
import { atom, selector } from 'recoil'
import { ColorBrewerGroupName, ColorBrewerPaletteName } from '../../types'

export const size = atom<number>({
    key: 'colorBrewerSize',
    default: 9
})

export const groupName = atom<ColorBrewerGroupName>({
    key: 'colorBrewerStart',
    default: 'sequential'
})

export const paletteName = atom<ColorBrewerPaletteName>({
    key: 'colorBrewerPaletteName',
    default: 'PuRd'
})

export const paletteNameColors = (size: number, paletteName: ColorBrewerPaletteName) => {
    return chroma
        .scale(paletteName)
        .colors(size, null)
}

export const colorBrewerColors = selector<Color[]>({
    key: 'colorBrewerColors',
    get: ({ get }) => {
        return chroma
            .scale(get(paletteName))
            .colors(get(size), null)
    }
})
