import { FC } from 'react'
import copy from 'copy-to-clipboard'
import { usePaletteColors } from '../../hooks/use-palette-colors'
import { SettingsName } from '../../types'
import TabLink from '../tab-link'
import LantanaLogo from '../logo'
import Button from '../button'
import './header.css'

const Header: FC = () => {
    const paletteColors = usePaletteColors()

    const handleClickCopyJsonArray = () => {
        copy(JSON.stringify(paletteColors.map(color => color.hex())))
    }

    const handleClickCopyCssGradient = () => {
        copy(`linear-gradient(to right, ${paletteColors.toString()})`)
    }

    return (
        <header className='header'>
            <div className='header__tabs'>
                <TabLink settings={SettingsName.Lantana}>
                    <LantanaLogo />
                </TabLink>

                <TabLink settings={SettingsName.Cubehelix}>
                    {SettingsName.Cubehelix}
                </TabLink>

                <TabLink settings={SettingsName.ColorBrewer}>
                    {SettingsName.ColorBrewer}
                </TabLink>
            </div>

            <div className='header__actions'>
                <label>
                    copy
                </label>
                <div className='header__actions-buttons'>
                    <Button materialIconName='data_array' title='array' onClick={handleClickCopyJsonArray} />
                    <Button materialIconName='gradient' title='css gradient' onClick={handleClickCopyCssGradient} />
                </div>
            </div>
        </header>
    )
}

export default Header
