import React, { ChangeEvent, InputHTMLAttributes } from 'react'
import NumberInput from '../number-input'

export interface LargeControlProps {
    title: string
    value: number
    minValue: number
    maxValue: number
    step: number
    precision: number
    onChange: (value: number) => void
    rangeInputProps?: InputHTMLAttributes<HTMLInputElement>
}

const style = {
    control: 'flex flex-1 flex-col gap-1',
    label: 'flex-grow select-none mr-2',
    numberInput: 'text-right w-20'
}

const LargeControl: React.FC<LargeControlProps> = ({ title, value, minValue, maxValue, step, precision, onChange, rangeInputProps }) => {
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
                {...rangeInputProps}
            />
        </div>
    )
}

export default LargeControl