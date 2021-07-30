import { SettingsName } from '../../types'

export enum ActionType {
    SetCurrentSettings
}

export interface SetCurrentSettings {
    type: ActionType.SetCurrentSettings,
    payload: SettingsName
}

export const setCurrentSettings= (settings: SettingsName): SetCurrentSettings => ({
    type: ActionType.SetCurrentSettings,
    payload: settings
})

export type Actions = SetCurrentSettings
