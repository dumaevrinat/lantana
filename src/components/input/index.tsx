import clsx from 'clsx'
import { FC, InputHTMLAttributes } from 'react'
import './input.css'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {

}

const Input: FC<InputProps> = (props) => {
    const { className, ...restProps } = props
    
    return (
        <input {...restProps} className={clsx('input', className)} />
    )
}

export default Input
