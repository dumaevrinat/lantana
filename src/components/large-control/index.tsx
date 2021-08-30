import { ChangeEvent, FC } from 'react'
import NumberInput from '../number-input'

export interface LargeControlProps {
    title: string
    value: number
    minValue: number
    maxValue: number
    step: number
    precision: number
    onChange: (value: number) => void
}

const style = {
    control: 'flex flex-1 flex-col gap-1',
    label: 'select-none mr-2',
    numberInput: 'text-right'
}

const LargeControl: FC<LargeControlProps> = (props: LargeControlProps) => {
    const { title, value, minValue, maxValue, step, precision, onChange } = props

    const handleChangeRangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        const parsedValue = parseFloat(e.target.value)

        onChange(parsedValue)
    }

    return (
        <div className={style.control}>
            <div className='flex justify-between'>
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

export default LargeControl