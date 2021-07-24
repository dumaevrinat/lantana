import React from 'react'
import { LantanaState } from '../../types/types'
import { Actions } from './actions'
import { initialState } from './reducer'

export const LantanaContext = React.createContext<{
    lantanaState: LantanaState
    dispatch: React.Dispatch<Actions>
}>({
    lantanaState: initialState,
    dispatch: () => undefined
})