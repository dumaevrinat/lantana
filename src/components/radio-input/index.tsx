import clsx from 'clsx'
import React, { FC, InputHTMLAttributes } from 'react'
import './radio-input.css'

export interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
    children?: React.ReactNode | string
}

const Radio: FC<RadioProps> = (props: RadioProps) => {
    const { className, id, children, value, ...restProps } = props

    return (
        <>
            <input
                {...restProps}
                id={id}
                type='radio'
                value={value}
                className={clsx('radio-input')}
            />
            <label
                htmlFor={id}
                className={clsx('radio-label', className)}
            >
                {children ? children : value}
            </label>
        </>
    )
}

export default Radio
