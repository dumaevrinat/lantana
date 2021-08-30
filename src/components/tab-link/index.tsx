import clsx from 'clsx'
import React, { ChangeEvent, FC, useContext } from 'react'
import { setCurrentSettings } from '../../state/global/actions'
import { GlobalContext } from '../../state/global/context'
import { selectCurrentSettings } from '../../state/global/selectors'
import { SettingsName } from '../../types'
import Radio from '../radio'

export interface TabLinkProps {
    settings: SettingsName
    children: React.ReactNode
}

const style = {
    radioLabel: 'flex flex-nowrap items-center justify-center min-w-max text-3xl sm:text-4xl',
}

const TabLink: FC<TabLinkProps> = (props: TabLinkProps) => {
    const { settings, children } = props

    const { globalState, dispatch } = useContext(GlobalContext)

    const checked = selectCurrentSettings(globalState) === settings

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const settings = e.target.value

        dispatch(setCurrentSettings(settings as SettingsName))
    }

    return (
        <Radio
            id={settings}
            className={{ label: style.radioLabel }}
            value={settings}
            checked={checked}
            onChange={handleChange}
        >
            {children}
        </Radio>
    )
}

export default TabLink
