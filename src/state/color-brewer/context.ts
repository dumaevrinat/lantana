import React from 'react'
import { ColorBrewerState } from '../../types'
import { Actions } from './actions'
import { initialState } from './reducer'

export const ColorBrewerContext = React.createContext<{
    colorBrewerState: ColorBrewerState
    dispatch: React.Dispatch<Actions>
}>({
    colorBrewerState: initialState,
    dispatch: () => undefined
})