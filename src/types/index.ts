import { brewer, Color, InterpolationMode } from 'chroma-js'

export interface Picker {
    id: string
    color: Color
}

export interface Palette {
    size: number
    mode: InterpolationMode
    gamma: number
}

export enum SettingsName {
    Lantana = 'lantana',
    ColorBrewer = 'colorbrewer',
    Cubehelix = 'cubehelix'
}

export type ColorBrewerGroupName = 'diverging' | 'qualitative' | 'sequential'

export type ColorBrewerPaletteName = keyof typeof brewer
