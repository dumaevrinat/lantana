import { GlobalState, SettingsName } from '../../types'
import { ActionType, Actions } from './actions'

const initialCurrentSettings = SettingsName.Lantana

export const initialState: GlobalState = {
    currentSettings: initialCurrentSettings
}

export const globalReducer = (state: GlobalState, action: Actions): GlobalState => {
    switch (action.type) {
        case ActionType.SetCurrentSettings:
            return {
                ...state,
                currentSettings: action.payload
            }
        default:
            return state
    }
}
