import { InterpolationMode } from 'chroma-js'
import { Picker, Palette } from '../types/types'

export enum ActionType {
    AddColorPicker,
    UpdateColorPicker,
    DeleteColorPicker,
    SetPalette,
    SetPaletteMode,
    SetPaletteSize,
    SetGamma
}

export interface AddColorPicker {
    type: ActionType.AddColorPicker,
    payload: Picker
}

export interface UpdateColorPicker {
    type: ActionType.UpdateColorPicker,
    payload: Picker
}

export interface DeleteColorPicker {
    type: ActionType.DeleteColorPicker,
    payload: string
}

export interface SetPalette {
    type: ActionType.SetPalette,
    payload: Palette
}

export interface SetPaletteMode {
    type: ActionType.SetPaletteMode,
    payload: InterpolationMode
}

export interface SetPaletteSize {
    type: ActionType.SetPaletteSize,
    payload: number
}

export interface SetGamma {
    type: ActionType.SetGamma,
    payload: number
}

export const addColorPicker = (colorPicker: Picker): AddColorPicker => ({
    type: ActionType.AddColorPicker,
    payload: colorPicker
})

export const updateColorPicker = (colorPicker: Picker): UpdateColorPicker => ({
    type: ActionType.UpdateColorPicker,
    payload: colorPicker
})

export const deleteColorPicker = (id: string): DeleteColorPicker => ({
    type: ActionType.DeleteColorPicker,
    payload: id
})

export const setPalette = (palette: Palette): SetPalette => ({
    type: ActionType.SetPalette,
    payload: palette
})

export const setPaletteMode = (mode: InterpolationMode): SetPaletteMode => ({
    type: ActionType.SetPaletteMode,
    payload: mode
})

export const setPaletteSize = (size: number): SetPaletteSize => ({
    type: ActionType.SetPaletteSize,
    payload: size
})

export const setGamma = (gamma: number): SetGamma => ({
    type: ActionType.SetGamma,
    payload: gamma
})


export type AppActions = AddColorPicker
    | UpdateColorPicker
    | DeleteColorPicker
    | SetPalette
    | SetPaletteMode
    | SetPaletteSize
    | SetGamma
