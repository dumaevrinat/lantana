import { Color, InterpolationMode } from 'chroma-js'

export interface Picker {
    id: string
    color: Color
}

export interface Palette {
    size: number,
    mode: InterpolationMode,
    gamma: number
}

export interface AppState {
    colorPickers: Picker[]
    palette: Palette,
}