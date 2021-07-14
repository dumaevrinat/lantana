import { ChangeEvent, useEffect, useState, WheelEvent } from 'react'
import { toPrecision } from '../utils/number'

export interface NumberInputProps {
    className?: string
    value: number
    minValue: number
    maxValue: number
    step: number
    precision: number
    onChange: (value: number) => void
}

const NumberInput: React.FC<NumberInputProps> = ({ className, value, minValue, maxValue, step, precision, onChange }) => {
    const [inputValue, setInputValue] = useState<string>(value.toString())
    const [focus, setFocus] = useState<boolean>(false)

    useEffect(() => {
        setInputValue(value.toString())
    }, [value])

    const setParsedValue = (parsedValue: number) => {
        if (!isNaN(parsedValue)) {
            if (parsedValue > maxValue) {
                onChange(maxValue)
            }

            if (parsedValue < minValue) {
                onChange(minValue)
            }

            if (parsedValue >= minValue && parsedValue <= maxValue) {
                onChange(parsedValue)
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
        const newValue = e.deltaY > 0 ? value + step : value - step

        if (focus) {
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
        <input
            className={className}
            type='number'
            min={minValue}
            max={maxValue}
            step={step}
            value={inputValue}
            onChange={handleChange}
            onBlur={handleBlur}
            onFocus={handleFocus}
            onWheel={handleWheel}
        />
    )
}

export default NumberInput