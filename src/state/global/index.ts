import { Color } from 'chroma-js'
import { atom, selector } from 'recoil'
import { SettingsName } from '../../types'
import { colorBrewerColors } from '../color-brewer'
import { cubehelixColors } from '../cubehelix'
import { lantanaColors } from '../lantana'

export const currentSettings = atom<SettingsName>({
    key: 'globalCurrentSettings',
    default: SettingsName.Lantana
})

export const paletteColors = selector<Color[]>({
    key: 'globalPaletteColors',
    get: ({ get }) => {
        switch (get(currentSettings)) {
            case SettingsName.Lantana:
                return get(lantanaColors)
            case SettingsName.ColorBrewer:
                return get(colorBrewerColors)
            case SettingsName.Cubehelix:
                return get(cubehelixColors)
            default:
                return []
        }
    }
})

export const paletteColorsString = selector<string>({
    key: 'globalPaletteColorsString',
    get: ({ get }) => {
        return JSON.stringify(get(paletteColors).map(color => color.hex()))
    }
})

export const paletteColorsCssGradient = selector<string>({
    key: 'globalPaletteColorsCssGradient',
    get: ({ get }) => {
        return `linear-gradient(to right, ${get(paletteColors).toString()})`
    }
})
