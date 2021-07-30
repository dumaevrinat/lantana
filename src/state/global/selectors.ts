import { GlobalState, SettingsName } from '../../types'

export const selectCurrentSettings = (state: GlobalState): SettingsName => state.currentSettings
