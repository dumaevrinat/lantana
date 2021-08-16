import React from 'react'
import copy from 'copy-to-clipboard'
import { usePaletteColors } from '../../hooks/use-palette-colors'
import { SettingsName } from '../../types'
import TabLink from '../tab-link'
import LantanaLogo from '../logo/LantanaLogo'

const style = {
    header: 'flex flex-nowrap justify-between gap-4 mb-6 mt-4 no-scrollbar overflow-x-scroll scroll-snap-x',
    tabs: 'flex flex-nowrap',
    actions: 'flex items-start min-w-max px-3 gap-4 scroll-snap-align-start'
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
                    settings={SettingsName.Cubehelix}
                    description='linearly-decreasing brightness'
                >
                    {SettingsName.Cubehelix}
                </TabLink>

                <TabLink
                    settings={SettingsName.ColorBrewer}
                    description='color schemes by Cynthia Brewer'
                >
                    {SettingsName.ColorBrewer}
                </TabLink>
            </div>

            <div className={style.actions}>
                <button onClick={handleClickCopy}>
                    <span className='material-icons align-middle mr-2 md-18 material-icons-round'>
                        content_copy
                    </span>
                    <span>
                        copy all
                    </span>
                </button>
            </div>
        </header>
    )
}

export default Header