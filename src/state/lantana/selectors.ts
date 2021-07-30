import chroma, { Color, InterpolationMode } from 'chroma-js'
import { LantanaState, Palette, Picker } from '../../types'


export const selectPalette = (state: LantanaState): Palette => state.palette
export const selectPaletteSize = (state: LantanaState): number => state.palette.size
export const selectPaletteMode = (state: LantanaState): InterpolationMode => state.palette.mode
export const selectGamma = (state: LantanaState): number => state.palette.gamma

export const selectColorPickers = (state: LantanaState): Picker[] => state.colorPickers

export const selectColorsFromColorPickers = (state: LantanaState): Color[] => state.colorPickers.map(picker => picker.color)

export const selectPaletteColors = (state: LantanaState): Color[] => {
    return chroma
        .scale(selectColorsFromColorPickers(state))
        .mode(selectPaletteMode(state))
        .gamma(selectGamma(state))
        .colors(selectPaletteSize(state), null)
}
