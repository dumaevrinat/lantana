import React from 'react'
import copy from 'copy-to-clipboard'
import { usePaletteColors } from '../../hooks/use-palette-colors'
import { SettingsName } from '../../types'
import TabLink from '../tab-link'
import { ColorBrewerLogo, LantanaLogo } from '../logos'

const style = {
    header: 'flex flex-nowrap justify-between mb-6 mt-4 no-scrollbar overflow-x-scroll scroll-snap-x',
    tabs: 'flex flex-nowrap',
    actions: 'flex items-start min-w-max px-3 scroll-snap-align-start'
}

const Header: React.FC = () => {
    const paletteColors = usePaletteColors()

    const handleClickCopy = () => {
        copy(JSON.stringify(paletteColors.map(color => color.hex())))
    }

    return (
        <header className={style.header}>
            <div className={style.tabs}>
                <TabLink
                    settings={SettingsName.Lantana}
                    description='tool for creating color schemes'
                >
                    <LantanaLogo />
                </TabLink>

                <TabLink
                    settings={SettingsName.ColorBrewer}
                    description='color schemes by Dr. Cynthia Brewer'
                >
                    <ColorBrewerLogo />
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