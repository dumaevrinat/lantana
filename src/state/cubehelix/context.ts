import React from 'react'
import { CubehelixState } from '../../types'
import { Actions } from './actions'
import { initialState } from './reducer'

export const CubehelixContext = React.createContext<{
    cubehelixState: CubehelixState
    dispatch: React.Dispatch<Actions>
}>({
    cubehelixState: initialState,
    dispatch: () => undefined
})
