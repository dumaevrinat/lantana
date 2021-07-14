import chroma, { Color, InterpolationMode } from 'chroma-js'
import { AppState, Palette, Picker } from '../types/types'


export const selectPalette = (state: AppState): Palette => state.palette
export const selectPaletteSize = (state: AppState): number => state.palette.size
export const selectPaletteMode = (state: AppState): InterpolationMode => state.palette.mode
export const selectGamma = (state: AppState): number => state.palette.gamma

export const selectColorPickers = (state: AppState): Picker[] => state.colorPickers

export const selectColorsFromColorPickers = (state: AppState): Color[] => state.colorPickers.map(picker => picker.color)

export const selectPaletteColors = (state: AppState): string[] => {
    const scale = chroma.scale(selectColorsFromColorPickers(state))

    scale.mode(selectPaletteMode(state))
    scale.gamma(selectGamma(state))

    return scale.colors(selectPaletteSize(state))
}
