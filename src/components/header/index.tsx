import chroma from 'chroma-js'
import { brewer } from 'chroma-js'
import copy from 'copy-to-clipboard'
import React, { useContext } from 'react'
import { usePaletteColors } from '../../hooks/use-palette-colors'
import { ColorBrewerContext } from '../../state/color-brewer/context'
import { selectPaletteName } from '../../state/color-brewer/selectors'
import { LantanaContext } from '../../state/lantana/context'
import { selectColorsFromColorPickers } from '../../state/lantana/selectors'
import { SettingsName } from '../../types'
import TabLink from '../tab-link'

const style = {
    header: 'flex flex-nowrap justify-between mb-6 mt-4 no-scrollbar overflow-x-scroll scroll-snap-x',
    tabs: 'flex flex-nowrap',
    tabLink: 'px-3 scroll-snap-align-start',
    actions: 'flex items-start min-w-max px-3 scroll-snap-align-start'
}

const Header: React.FC = () => {
    const { lantanaState } = useContext(LantanaContext)
    const { colorBrewerState } = useContext(ColorBrewerContext)

    const lantanaColors = selectColorsFromColorPickers(lantanaState)
    const colorBrewerColors = chroma
        .scale(brewer[selectPaletteName(colorBrewerState)])
        .colors(3, null)

    const paletteColors = usePaletteColors()

    const handleClickCopy = () => {
        copy(JSON.stringify(paletteColors.map(color => color.hex())))
    }

    return (
        <header className={style.header}>
            <div className={style.tabs}>
                <TabLink
                    className={style.tabLink}
                    settings={SettingsName.Lantana}
                    description='tool for creating color schemes'
                >
                    <span>lantana</span>

                    {lantanaColors.map((color, index) =>
                        <div key={index} className='flex items-center'>
                            <span style={{ color: color.hex() }}>•</span>
                            {index + 1 !== lantanaColors.length && <span>{'->'}</span>}
                        </div>
                    )}
                </TabLink>

                <TabLink
                    className={style.tabLink}
                    settings={SettingsName.ColorBrewer}
                    description='color schemes by Dr. Cynthia Brewer'
                >
                    <span>colorbrewer</span>

                    {colorBrewerColors.map((color, index) =>
                        <div key={index}>
                            <span style={{ color: color.hex() }}>•</span>
                        </div>
                    )}

                </TabLink>
            </div>

            <div className={style.actions}>
                <button onClick={handleClickCopy}>
                    copy as array
                </button>
            </div>
        </header>
    )
}

export default Header