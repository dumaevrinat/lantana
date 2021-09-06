import clsx from 'clsx'
import { ChangeEvent, FC, InputHTMLAttributes, useEffect, useState, WheelEvent } from 'react'
import { toPrecision } from '../../utils/number'
import Input from '../input'
import './number-input.css'

export interface NumberInputProps extends InputHTMLAttributes<HTMLInputElement> {
    large?: boolean
    value: number
    min: number
    max: number
    step: number
    precision: number
    onChangeValue: (value: number) => void
}

const NumberInput: FC<NumberInputProps> = (props: NumberInputProps) => {
    const { className, large = false, value, min, max, step, precision, onChangeValue, ...restProps } = props

    const [inputValue, setInputValue] = useState<string>(value.toString())
    const [focus, setFocus] = useState<boolean>(false)

    useEffect(() => {
        setInputValue(value.toString())
    }, [value])

    const setParsedValue = (parsedValue: number) => {
        if (!isNaN(parsedValue)) {
            if (parsedValue > max) {
                onChangeValue(max)
            }

            if (parsedValue < min) {
                onChangeValue(min)
            }

            if (parsedValue >= min && parsedValue <= max) {
                onChangeValue(parsedValue)
            }
        } else {
            setInputValue('')
        }
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const parsedValue = parseFloat(e.target.value)

        setParsedValue(parsedValue)
    }

    const handleWheel = (e: WheelEvent<HTMLInputElement>) => {
        if (focus) {
            const newValue = e.deltaY > 0 ? value + step : value - step

            setParsedValue(toPrecision(newValue, precision))
        }
    }

    const handleBlur = () => {
        setFocus(false)

        const parsedValue = parseFloat(inputValue)

        if (isNaN(parsedValue)) {
            setInputValue(value.toString())
        }
    }

    const handleFocus = () => {
        setFocus(true)
    }


    return (
        <Input
            {...restProps}
            className={clsx('number-input', large && 'number-input--lg', className)}
            type='number'
            min={min}
            max={max}
            step={step}
            size={1}
            value={inputValue}
            onChange={handleChange}
            onBlur={handleBlur}
            onFocus={handleFocus}
            onWheel={handleWheel}
        />
    )
}

export default NumberInput
