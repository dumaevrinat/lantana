import React from 'react'
import { AppState } from '../types/types'
import { AppActions } from './actions'
import { initialAppState } from './reducer'

export const AppContext = React.createContext<{
    state: AppState
    dispatch: React.Dispatch<AppActions>
}>({
    state: initialAppState,
    dispatch: () => undefined
})