import React from 'react'
import NumberInput from './NumberInput'

export interface ColorPickerDimensionProps {
    title: string
    value: number
    minValue: number
    maxValue: number
    step: number
    precision: number
    onChange: (value: number) => void
}

const ColorPickerDimension: React.FC<ColorPickerDimensionProps> = ({ title, value, minValue, maxValue, step, precision, onChange }) => {
    const handleChangeRangeInput = (value: string) => {
        const parsedValue = parseFloat(value)

        onChange(parsedValue)
    }

    return (
        <div className='flex flex-col gap-1'>
            <div className='flex'>
                <label className='flex-grow select-none mr-2'>
                    {title}
                </label>
                <NumberInput
                    className='text-right'
                    value={value}
                    minValue={minValue}
                    maxValue={maxValue}
                    step={step}
                    precision={precision}
                    onChange={onChange}
                />
            </div>
            <input
                type='range'
                value={value}
                min={minValue}
                max={maxValue}
                step={step}
                onChange={(e) => handleChangeRangeInput(e.target.value)}
            />
        </div>
    )
}

export default ColorPickerDimension