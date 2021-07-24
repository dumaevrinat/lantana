import React, { ChangeEvent } from 'react'
import NumberInput from './NumberInput'

export interface ColorPickerControlProps {
    title: string
    value: number
    minValue: number
    maxValue: number
    step: number
    precision: number
    onChange: (value: number) => void
}

const style = {
    control: 'flex flex-col gap-1',
    label: 'flex-grow select-none mr-2',
    numberInput: 'text-right'
}

const ColorPickerControl: React.FC<ColorPickerControlProps> = ({ title, value, minValue, maxValue, step, precision, onChange }) => {
    const handleChangeRangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        const parsedValue = parseFloat(e.target.value)

        onChange(parsedValue)
    }

    return (
        <div className={style.control}>
            <div className='flex'>
                <label className={style.label}>
                    {title}
                </label>
                <NumberInput
                    className={{ input: style.numberInput }}
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
                onChange={handleChangeRangeInput}
            />
        </div>
    )
}

export default ColorPickerControl