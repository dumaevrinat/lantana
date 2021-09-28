import { FC } from 'react'
import { SettingsName } from '../../types'
import TabLink from '../tab-link'
import LantanaLogo from '../logo'
import './header.css'

const Header: FC = () => {
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
        </header>
    )
}

export default Header
