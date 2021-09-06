import { ChangeEvent, FC } from 'react'
import NumberInput from '../number-input'
import RangeInput from '../range-input'
import './large-control.css'

export interface LargeControlProps {
    title: string
    value: number
    minValue: number
    maxValue: number
    step: number
    precision: number
    onChange: (value: number) => void
}

const LargeControl: FC<LargeControlProps> = (props: LargeControlProps) => {
    const { title, value, minValue, maxValue, step, precision, onChange } = props

    const handleChangeRangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        const parsedValue = parseFloat(e.target.value)

        onChange(parsedValue)
    }

    return (
        <div className='large-control'>
            <div className='large-control__content'>
                <label className='large-control__content-label'>
                    {title}
                </label>
                <NumberInput
                    className='large-control__content-input'
                    value={value}
                    min={minValue}
                    max={maxValue}
                    step={step}
                    precision={precision}
                    onChangeValue={onChange}
                />
            </div>
            <RangeInput
                value={value}
                min={minValue}
                max={maxValue}
                step={step}
                onChange={handleChangeRangeInput}
            />
        </div>
    )
}

export default LargeControl
