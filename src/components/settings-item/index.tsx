import React from 'react'
import Card from '../card'

export interface SettingsItemProps {
    label?: string,
    children: React.ReactNode
}

const style = {
    card: 'flex flex-wrap items-center gap-2',
    label: '',
    content: 'flex flex-wrap flex-grow gap-2'
}

const SettingsItem: React.FC<SettingsItemProps> = ({ label, children }) => {
    return (
        <Card className={style.card}>
            {label &&
                <label className={style.label}>
                    {label}
                </label>
            }

            <div className={style.content}>
                {children}
            </div>
        </Card>
    )
}

export default SettingsItem