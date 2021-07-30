import { brewer } from 'chroma-js'
import { ColorBrewerGroupName } from '../../types'

export enum ActionType {
    SetPaletteSize,
    SetGroupName,
    SetPaletteName
}

export interface SetPaletteSize {
    type: ActionType.SetPaletteSize,
    payload: number
}

export interface SetGroupName {
    type: ActionType.SetGroupName,
    payload: ColorBrewerGroupName
} 

export interface SetPaletteName {
    type: ActionType.SetPaletteName,
    payload: keyof typeof brewer
} 

export const setPaletteSize = (size: number): SetPaletteSize => ({
    type: ActionType.SetPaletteSize,
    payload: size
})

export const setGroupName = (groupName: ColorBrewerGroupName): SetGroupName => ({
    type: ActionType.SetGroupName,
    payload: groupName
})

export const setPaletteName = (paletteName: keyof typeof brewer): SetPaletteName => ({
    type: ActionType.SetPaletteName,
    payload: paletteName
})

export type Actions = SetPaletteSize | SetGroupName | SetPaletteName
