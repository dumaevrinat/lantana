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

export interface SettingsState {
    name: SettingsName
}

export interface LantanaState extends SettingsState {
    name: SettingsName.Lantana
    colorPickers: Picker[]
    palette: Palette
}

export interface ColorBrewerState extends SettingsState {
    name: SettingsName.ColorBrewer
    paletteSize: number
    groupName: ColorBrewerGroupName
    paletteName: keyof typeof brewer
}

export interface CubehelixState extends SettingsState {
    name: SettingsName.Cubehelix
    paletteSize: number
    start: number
    rotations: number
    hue: number
    gamma: number
    dark: number
    light: number
}

export interface GlobalState {
    currentSettings: SettingsName
}

export enum SettingsName {
    Lantana = 'lantana',
    ColorBrewer = 'colorbrewer',
    Cubehelix = 'cubehelix'
}

export type ColorBrewerGroupName = 'diverging' | 'qualitative' | 'sequential'
