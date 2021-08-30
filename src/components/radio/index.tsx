import clsx from 'clsx'
import React, { FC } from 'react'

interface ClassNameProps {
    radio?: string
    label?: string
}

export interface RadioProps {
    id: string
    className?: ClassNameProps
    value: string | number
    checked: boolean
    onChange: React.ChangeEventHandler<HTMLInputElement>
    children?: React.ReactNode | string
}

const style = {
    radio: 'flex',
    label: ''
}

const Radio: FC<RadioProps> = (props: RadioProps) => {
    const { id, className, children, value, checked, onChange } = props

    return (
        <>
            <input
                id={id}
                type='radio'
                value={value}
                checked={checked}
                onChange={onChange}
            />
            <label
                htmlFor={id}
                className={clsx(style.label, className?.label)}
            >
                {children ? children : value}
            </label>
        </>
    )
}

export default Radio