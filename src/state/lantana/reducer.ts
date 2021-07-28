import chroma from 'chroma-js'
import { nanoid } from 'nanoid'
import { LantanaState } from '../../types/types'
import { ActionType, Actions } from './actions'

const initialFirstColor = chroma.hsl(347, 1, 0.78)
const initialSecondColor = chroma.hsl(242, 1, 0.16)
const initialPaletteSize = 9
const initialPaletteMode = 'hsi'
const initialGamma = 1


export const initialState: LantanaState = {
    colorPickers: [
        {
            id: nanoid(),
            color: initialFirstColor
        },
        {
            id: nanoid(),
            color: initialSecondColor
        },
    ],
    palette: {
        mode: initialPaletteMode,
        size: initialPaletteSize,
        gamma: initialGamma
    }
}

export const lantanaReducer = (state: LantanaState, action: Actions): LantanaState => {
    switch (action.type) {
        case ActionType.AddColorPicker:
            return {
                ...state,
                colorPickers: [...state.colorPickers, action.payload]
            }
        case ActionType.UpdateColorPicker:
            return {
                ...state,
                colorPickers: state.colorPickers.map(picker =>
                    picker.id === action.payload.id ? { ...picker, ...action.payload } : picker
                )
            }
        case ActionType.DeleteColorPicker:
            return {
                ...state,
                colorPickers: state.colorPickers.filter(picker => picker.id !== action.payload)
            }
        case ActionType.SetPalette:
            return {
                ...state,
                palette: action.payload
            }
        case ActionType.SetPaletteMode:
            return {
                ...state,
                palette: { ...state.palette, mode: action.payload }
            }
        case ActionType.SetPaletteSize:
            return {
                ...state,
                palette: { ...state.palette, size: action.payload }
            }
        case ActionType.SetGamma:
            return {
                ...state,
                palette: { ...state.palette, gamma: action.payload }
            }
        default:
            return state
    }
}
