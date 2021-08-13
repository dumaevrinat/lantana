export enum ActionType {
    SetStart,
    SetRotations,
    SetHue,
    SetGamma,
    SetDark,
    SetLight,
    SetPaletteSize
}

export interface SetStart {
    type: ActionType.SetStart,
    payload: number
}

export interface SetRotations {
    type: ActionType.SetRotations,
    payload: number
}

export interface SetHue {
    type: ActionType.SetHue,
    payload: number
}

export interface SetGamma {
    type: ActionType.SetGamma,
    payload: number
}

export interface SetDark {
    type: ActionType.SetDark,
    payload: number
}

export interface SetLight {
    type: ActionType.SetLight,
    payload: number
}

export interface SetPaletteSize {
    type: ActionType.SetPaletteSize,
    payload: number
}

export const setStart = (start: number): SetStart => ({
    type: ActionType.SetStart,
    payload: start
})

export const setRotations = (rotations: number): SetRotations => ({
    type: ActionType.SetRotations,
    payload: rotations
})

export const setHue = (hue: number): SetHue => ({
    type: ActionType.SetHue,
    payload: hue
})

export const setGamma = (gamma: number): SetGamma => ({
    type: ActionType.SetGamma,
    payload: gamma
})

export const setDark = (dark: number): SetDark => ({
    type: ActionType.SetDark,
    payload: dark
})

export const setLight = (light: number): SetLight => ({
    type: ActionType.SetLight,
    payload: light
})

export const setPaletteSize = (size: number): SetPaletteSize => ({
    type: ActionType.SetPaletteSize,
    payload: size
})


export type Actions = SetStart
    | SetRotations
    | SetHue
    | SetGamma
    | SetDark
    | SetLight
    | SetPaletteSize
