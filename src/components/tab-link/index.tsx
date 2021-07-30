import clsx from 'clsx'
import React, { ChangeEvent, useContext } from 'react'
import { setCurrentSettings } from '../../state/global/actions'
import { GlobalContext } from '../../state/global/context'
import { selectCurrentSettings } from '../../state/global/selectors'
import { SettingsName } from '../../types'
import Radio from '../radio'

export interface TabLinkProps {
    description?: string
    settings: SettingsName
    children: React.ReactNode
}

const style = {
    tabLink: 'flex flex-col items-center px-3 scroll-snap-align-start transition-all',
    radioLabel: 'flex flex-nowrap items-center justify-center min-w-max text-3xl sm:text-4xl',
    description: 'text-base text-center cursor-default',
}

const TabLink: React.FC<TabLinkProps> = ({ description, settings, children }) => {
    const { globalState, dispatch } = useContext(GlobalContext)
    
    const checked = selectCurrentSettings(globalState) === settings

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const settings = e.target.value

        dispatch(setCurrentSettings(settings as SettingsName))
    }

    return (
        <div className={style.tabLink}>
            <Radio
                id={settings}
                className={{label: style.radioLabel}}
                value={settings}
                checked={checked}
                onChange={handleChange}
            >
                {children}
            </Radio>

            {description &&
                <span className={clsx(style.description, !checked && 'invisible')}>
                    {description}
                </span>
            }
        </div>
    )
}

export default TabLink
