import { ColorBrewerState, SettingsName } from '../../types'
import { ActionType, Actions } from './actions'

const initialPaletteSize = 9
const initialGroupName = 'sequential'
const initialPaletteName = 'YlGnBu'

export const initialState: ColorBrewerState = {
    name: SettingsName.ColorBrewer,
    paletteSize: initialPaletteSize,
    groupName: initialGroupName,
    paletteName: initialPaletteName
}

export const colorBrewerReducer = (state: ColorBrewerState, action: Actions): ColorBrewerState => {
    switch (action.type) {
        case ActionType.SetPaletteSize:
            return {
                ...state,
                paletteSize: action.payload
            }
        case ActionType.SetGroupName:
            return {
                ...state,
                groupName: action.payload
            }
        case ActionType.SetPaletteName:
            return {
                ...state,
                paletteName: action.payload
            }
        default:
            return state
    }
}
