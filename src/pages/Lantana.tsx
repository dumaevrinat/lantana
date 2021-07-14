import React, { useEffect, useReducer } from 'react'
import ColorPickersList from '../components/ColorPickersList'
import Palette from '../components/Palette'
import Settings from '../components/Settings'
import { AppContext } from '../state/context'
import { appReducer, initialAppState } from '../state/reducer'
import { selectColorPickers, selectPaletteColors } from '../state/selectors'

const Lantana: React.FC = () => {
    const [state, dispatch] = useReducer(appReducer, initialAppState)

    useEffect(() => {
        console.log(state)
    }, [state])

    return (
        <AppContext.Provider value={{ state, dispatch }}>
            <ColorPickersList pickers={selectColorPickers(state)} />
            <Settings />
            <Palette colors={selectPaletteColors(state)} />
        </AppContext.Provider>
    )
}

export default Lantana
