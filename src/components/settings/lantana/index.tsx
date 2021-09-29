import { ChangeEvent, FC } from 'react'
import { Color, InterpolationMode } from 'chroma-js'
import ColorPicker from '../../color-picker'
import Radio from '../../base/radio-input'
import NumberInput from '../../base/number-input'
import Card from '../../base/card'
import CardTitle from '../../base/card-title'
import CardContent from '../../base/card-content'
import { useRecoilState } from 'recoil'
import { size as lantanaSize } from '../../../state/lantana'
import { gamma as lantanaGamma } from '../../../state/lantana'
import { mode as lantanaMode } from '../../../state/lantana'
import { colorPickers as lantanaColorPickers } from '../../../state/lantana'

const Lantana: FC = () => {
    const availableModes: Array<InterpolationMode> = ['rgb', 'lrgb', 'hsl', 'hcl', 'hsi', 'lab', 'lch']

    const [size, setSize] = useRecoilState(lantanaSize)
    const [gamma, setGamma] = useRecoilState(lantanaGamma)
    const [mode, setMode] = useRecoilState(lantanaMode)
    const [colorPickers, setColorPickers] = useRecoilState(lantanaColorPickers)

    const handleChangeColor = (id: string) => (color: Color) => {
        const updatedColorPicker = { id, color }

        setColorPickers(colorPickers.map(picker =>
            picker.id === id ?
                { ...picker, ...updatedColorPicker } :
                picker
        ))
    }

    const handleChangeSize = (size: number) => {
        setSize(size)
    }

    const handleChangeMode = (e: ChangeEvent<HTMLInputElement>) => {
        const mode = e.target.value

        setMode(mode as InterpolationMode)
    }

    const handleChangeGamma = (gamma: number) => {
        setGamma(gamma)
    }

    return (
        <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4'>
            {colorPickers.map(picker =>
                <ColorPicker
                    key={picker.id}
                    color={picker.color}
                    onChangeColor={handleChangeColor(picker.id)}
                />
            )}

            <div className='grid sm:grid-cols-2 lg:grid-cols-1 sm:col-span-2 lg:col-span-2 gap-4'>
                <Card>
                    <CardTitle title='interpolation mode' />
                    <CardContent>
                        {availableModes.map(availableMode =>
                            <Radio
                                key={availableMode}
                                id={availableMode}
                                value={availableMode}
                                checked={availableMode === mode}
                                onChange={handleChangeMode}
                            >
                                {availableMode}
                            </Radio>
                        )}
                    </CardContent>
                </Card>

                <div className='grid md:grid-cols-2 gap-4'>
                    <Card>
                        <CardTitle title='number of colors' />
                        <CardContent>
                            <NumberInput
                                large
                                value={size}
                                min={0}
                                max={30}
                                step={1}
                                precision={0}
                                onChangeValue={handleChangeSize}
                            />
                        </CardContent>
                    </Card>

                    <Card>
                        <CardTitle title='center shift' />
                        <CardContent>
                            <NumberInput
                                large
                                value={gamma}
                                min={0}
                                max={5}
                                step={0.1}
                                precision={1}
                                onChangeValue={handleChangeGamma}
                            />
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default Lantana
