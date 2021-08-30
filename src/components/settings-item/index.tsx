import clsx from 'clsx'
import React, { FC } from 'react'
import Card from '../card'

export interface ClassNameProps {
    card?: string
    label?: string
    content?: string
}

export interface SettingsItemProps {
    label?: string
    children: React.ReactNode
    className?: ClassNameProps
}

const style = {
    card: 'flex flex-col justify-start gap-4',
    label: '',
    content: 'flex flex-wrap gap-2'
}

const SettingsItem: FC<SettingsItemProps> = (props: SettingsItemProps) => {
    const { label, children, className } = props

    return (
        <Card className={clsx(style.card, className?.card)}>
            {label &&
                <label className={clsx(style.label, className?.label)}>
                    {label}
                </label>
            }

            <div className={clsx(style.content, className?.content)}>
                {children}
            </div>
        </Card>
    )
}

export default SettingsItem