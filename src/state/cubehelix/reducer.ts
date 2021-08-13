import { CubehelixState, SettingsName } from '../../types'
import { ActionType, Actions } from './actions'

const initialStart = 300
const initialRotations = -0.4
const initialHue = 1
const initialGamma = 1
const initialDark = 0.1
const initialLight = 0.9
const initialPaletteSize = 9

export const initialState: CubehelixState = {
    name: SettingsName.Cubehelix,
    paletteSize: initialPaletteSize,
    start: initialStart,
    rotations: initialRotations,
    hue: initialHue,
    gamma: initialGamma,
    dark: initialDark,
    light: initialLight
}

export const cubehelixReducer = (state: CubehelixState, action: Actions): CubehelixState => {
    switch (action.type) {
        case ActionType.SetStart:
            return {
                ...state,
                start: action.payload
            }
        case ActionType.SetRotations:
            return {
                ...state,
                rotations: action.payload
            }
        case ActionType.SetHue:
            return {
                ...state,
                hue: action.payload
            }
        case ActionType.SetGamma:
            return {
                ...state,
                gamma: action.payload
            }
        case ActionType.SetDark:
            return {
                ...state,
                dark: action.payload
            }
        case ActionType.SetLight:
            return {
                ...state,
                light: action.payload
            }
        case ActionType.SetPaletteSize:
            return {
                ...state,
                paletteSize: action.payload
            }
        default:
            return state
    }
}
