import React from 'react'

export interface RadioProps {
    id: string
    value: string | number
    checked: boolean
    onChange: React.ChangeEventHandler<HTMLInputElement>
    children?: React.ReactNode | string
}

const style = {
    radio: 'flex'
}

const Radio: React.FC<RadioProps> = ({ id, children, value, checked, onChange }) => {
    return (
        <div className={style.radio}>
            <input
                id={id}
                type='radio'
                value={value}
                checked={checked}
                onChange={onChange}
            />
            <label htmlFor={id}>
                {children ? children : value}
            </label>
        </div>
    )
}

export default Radio