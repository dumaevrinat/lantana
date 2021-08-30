import { FC } from 'react'
import copy from 'copy-to-clipboard'
import { usePaletteColors } from '../../hooks/use-palette-colors'
import { SettingsName } from '../../types'
import TabLink from '../tab-link'
import LantanaLogo from '../logo/LantanaLogo'

const style = {
    header: 'flex flex-nowrap items-center justify-between pt-3 sm:pt-6 gap-4 sm:gap-8 no-scrollbar overflow-x-scroll scroll-snap-x transition-all animate-fadein',
    tabs: 'flex flex-nowrap gap-4 pl-3 sm:pl-6',
    actions: 'flex items-center gap-4 pr-3 sm:pr-6',
    actionsButtons: 'flex min-w-max gap-2',
    actionsButton: 'px-2 flex items-center justify-center',
    actionsButtonSpan: 'material-icons align-middle md-18 material-icons-round'
}

const Header: FC = () => {
    const paletteColors = usePaletteColors()

    const handleClickCopyJsonArray = () => {
        copy(JSON.stringify(paletteColors.map(color => color.hex())))
    }

    const handleClickCopyCssGradient = () => {
        copy(`linear-gradient(to right, ${paletteColors.toString()})`)
    }

    return (
        <header className={style.header}>
            <div className={style.tabs}>
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

            <div className={style.actions}>
                <label>
                    copy
                </label>
                <div className={style.actionsButtons}>
                    <button className={style.actionsButton} onClick={handleClickCopyJsonArray} title='array'>
                        <span className={style.actionsButtonSpan}>
                            data_array
                        </span>
                    </button>
                    <button className={style.actionsButton} onClick={handleClickCopyCssGradient} title='css gradient'>
                        <span className={style.actionsButtonSpan}>
                            gradient
                        </span>
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header