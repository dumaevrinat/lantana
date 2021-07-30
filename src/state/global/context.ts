import React from 'react'
import { GlobalState } from '../../types'
import { Actions } from './actions'
import { initialState } from './reducer'

export const GlobalContext = React.createContext<{
    globalState: GlobalState
    dispatch: React.Dispatch<Actions>
}>({
    globalState: initialState,
    dispatch: () => undefined
})