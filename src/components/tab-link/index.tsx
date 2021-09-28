import React, { ChangeEvent, FC } from 'react'
import { useRecoilState } from 'recoil'
import { currentSettings as globalCurrentSettings } from '../../state/global'
import { SettingsName } from '../../types'
import Radio from '../base/radio-input'
import './tab-link.css'

export interface TabLinkProps {
    settings: SettingsName
    children: React.ReactNode
}

const TabLink: FC<TabLinkProps> = (props: TabLinkProps) => {
    const { settings, children } = props

    const [currentSettings, setCurrentSettings] = useRecoilState(globalCurrentSettings)
    const checked = currentSettings === settings

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const settings = e.target.value

        setCurrentSettings(settings as SettingsName)
    }

    return (
        <Radio
            id={settings}
            className='tab-link'
            value={settings}
            checked={checked}
            onChange={handleChange}
        >
            {children}
        </Radio>
    )
}

export default TabLink
