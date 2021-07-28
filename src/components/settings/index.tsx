import React from 'react'

export interface SettingsProps {
    children: React.ReactNode
}

const style = {
    settings: 'md:max-w-xl flex-1 flex flex-col gap-6'
}

const Settings: React.FC<SettingsProps> = ({children}) => {
    return (
        <div className={style.settings}>
            {children}
        </div>
    )
}

export default Settings