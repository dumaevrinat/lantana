export interface ColorPickerDimensionProps {
    title: string;
    value: number;
    minValue: number;
    maxValue: number;
    step: number;
    onChange: (value: number) => void;
}

const ColorPickerDimension: React.FC<ColorPickerDimensionProps> = ({ title, value, minValue, maxValue, step, onChange }) => {
    return (
        <div className='flex flex-col gap-1'>
            <div className='flex'>
                <label className='text-xl select-none mr-2'>
                    {title + ':'}
                </label>
                <input
                    className='uppercase'
                    type='number'
                    size={3}
                    readOnly
                    min={minValue}
                    max={maxValue}
                    step={step}
                    value={value}
                    onChange={(e) => onChange(parseFloat(e.target.value))}
                />
            </div>
            <input
                type='range'
                value={value}
                min={minValue}
                max={maxValue}
                step={step}
                onChange={(e) => onChange(parseFloat(e.target.value))}
            />
        </div>
    )
}

export default ColorPickerDimension