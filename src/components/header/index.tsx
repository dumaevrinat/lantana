import { FC } from 'react'
import copy from 'copy-to-clipboard'
import { usePaletteColors } from '../../hooks/use-palette-colors'
import { SettingsName } from '../../types'
import TabLink from '../tab-link'
import LantanaLogo from '../logo'
import Button from '../button'
import './header.css'
import Card from '../card'
import CardContent from '../card-content'
import CardTitle from '../card-title'

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

            <Card className='header__actions'>
                <CardTitle title='actions' />
                <CardContent className='header__actions-buttons'>
                    <Button materialIconName='data_array' label='array' onClick={handleClickCopyJsonArray} />
                    <Button materialIconName='gradient' label='css gradient' onClick={handleClickCopyCssGradient} />
                </CardContent>
            </Card>
        </header>
    )
}

export default Header
