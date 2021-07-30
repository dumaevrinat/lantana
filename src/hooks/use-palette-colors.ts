import { useContext } from 'react'
import { ColorBrewerContext } from '../state/color-brewer/context'
import { GlobalContext } from '../state/global/context'
import { selectCurrentSettings } from '../state/global/selectors'
import { LantanaContext } from '../state/lantana/context'
import { SettingsName } from '../types'
import { selectPaletteColors as selectLantanaColors } from '../state/lantana/selectors'
import { selectPaletteColors as selectColorBrewerColors } from '../state/color-brewer/selectors'

export const usePaletteColors = () => {
    const { globalState } = useContext(GlobalContext)
    const { lantanaState } = useContext(LantanaContext)
    const { colorBrewerState } = useContext(ColorBrewerContext)

    switch (selectCurrentSettings(globalState)) {
        case SettingsName.Lantana:
            return selectLantanaColors(lantanaState)
        case SettingsName.ColorBrewer:
            return selectColorBrewerColors(colorBrewerState)
    }
}

