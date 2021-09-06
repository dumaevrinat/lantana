import clsx from 'clsx'
import { FC, InputHTMLAttributes } from 'react'
import Input from '../input'
import './range-input.css'

export interface RangeInputProps extends InputHTMLAttributes<HTMLInputElement> {

}

const RangeInput: FC<RangeInputProps> = (props: RangeInputProps) => {
    const { className, ...restProps } = props

    return (
        <Input
            {...restProps}
            className={clsx('range-input', className)}
            type='range'
        />
    )
}

export default RangeInput
