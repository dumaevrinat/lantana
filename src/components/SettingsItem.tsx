import React from 'react'

export interface SettingsItemProps {
    label?: string,
    children: React.ReactNode
}

const style = {
    settingsItem: 'flex flex-wrap items-center gap-2',
    label: '',
    content: 'flex flex-wrap flex-grow gap-2'
}

const SettingsItem: React.FC<SettingsItemProps> = ({ label, children }) => {
    return (
        <div className={style.settingsItem}>
            {label &&
                <label className={style.label}>
                    {label}
                </label>
            }

            <div className={style.content}>
                {children}
            </div>
        </div>
    )
}

export default SettingsItem