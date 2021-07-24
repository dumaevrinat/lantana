import chroma, { brewer, Color } from 'chroma-js'
import { ColorBrewerGroupName, ColorBrewerState } from '../../types/types'

export const selectPaletteSize = (state: ColorBrewerState): number => state.paletteSize
export const selectGroupName = (state: ColorBrewerState): ColorBrewerGroupName => state.groupName
export const selectPaletteName = (state: ColorBrewerState): keyof typeof brewer => state.paletteName

export const selectPaletteColors = (state: ColorBrewerState): Color[] => {
    return chroma
        .scale(selectPaletteName(state))
        .colors(selectPaletteSize(state), null)
}
