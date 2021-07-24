import { brewer, Color, InterpolationMode } from 'chroma-js'
import React from 'react'

export interface Picker {
    id: string
    color: Color
}

export interface Palette {
    size: number
    mode: InterpolationMode
    gamma: number
}

export interface LantanaState {
    colorPickers: Picker[]
    palette: Palette
}

export interface ColorBrewerState {
    paletteSize: number
    groupName: ColorBrewerGroupName
    paletteName: keyof typeof brewer
}

export interface Route {
    path: string
    component: React.ComponentType
}

export type ColorBrewerGroupName = 'diverging' | 'qualitative' | 'sequential'