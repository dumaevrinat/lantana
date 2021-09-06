import clsx from 'clsx'
import { ButtonHTMLAttributes, FC } from 'react'
import './button.css'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    materialIconName?: string
    label?: string
}

const Button: FC<ButtonProps> = (props) => {
    const { materialIconName, label, className, ...restProps } = props

    return (
        <button
            {...restProps}
            className={clsx('button', className, (materialIconName && !label) && 'button--action')}
        >
            {materialIconName &&
                <span className='button__icon material-icons material-icons-round'>
                    {materialIconName}
                </span>
            }
            {label &&
                <span>
                    {label}
                </span>
            }
        </button>
    )
}

export default Button