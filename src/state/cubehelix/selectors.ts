import chroma, { Color, Scale } from 'chroma-js'
import { CubehelixState } from '../../types'

export const selectStart = (state: CubehelixState): number => state.start
export const selectRotations = (state: CubehelixState): number => state.rotations
export const selectHue = (state: CubehelixState): number => state.hue
export const selectGamma = (state: CubehelixState): number => state.gamma
export const selectDark = (state: CubehelixState): number => state.dark
export const selectLight = (state: CubehelixState): number => state.light
export const selectPaletteSize = (state: CubehelixState): number => state.paletteSize

const paletteColorsScale = (state: CubehelixState): Scale => {
    return chroma
        .cubehelix()
        .start(selectStart(state))
        .rotations(selectRotations(state))
        .gamma(selectGamma(state))
        .lightness([selectDark(state), selectLight(state)])
        .scale()
}

export const selectPaletteColors = (state: CubehelixState): Color[] => {
    return paletteColorsScale(state).colors(selectPaletteSize(state), null)
}

export const selectLogoColors = (state: CubehelixState): Color[] => {
    return paletteColorsScale(state).colors(2, null)
}
