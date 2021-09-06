import { ChangeEvent, FC, useContext } from 'react'
import { LantanaContext } from '../state/lantana/context'
import { selectColorPickers, selectGamma, selectPaletteMode, selectPaletteSize } from '../state/lantana/selectors'
import { setGamma, setPaletteMode, setPaletteSize, updateColorPicker } from '../state/lantana/actions'
import { Color, InterpolationMode } from 'chroma-js'
import ColorPicker from '../components/color-picker'
import Radio from '../components/radio-input'
import NumberInput from '../components/number-input'
import Card from '../components/card'
import CardTitle from '../components/card-title'
import CardContent from '../components/card-content'

const Lantana: FC = () => {
    const { lantanaState, dispatch } = useContext(LantanaContext)

    const modes: Array<InterpolationMode> = ['rgb', 'lrgb', 'hsl', 'hcl', 'hsi', 'lab', 'lch']
    const pickers = selectColorPickers(lantanaState)

    const handleChangeColor = (id: string) => (color: Color) => {
        const updatedColorPicker = { id, color }

        dispatch(updateColorPicker(updatedColorPicker))
    }

    const handleChangePaletteSize = (size: number) => {
        dispatch(setPaletteSize(size))
    }

    const handleChangePaletteMode = (e: ChangeEvent<HTMLInputElement>) => {
        const mode = e.target.value

        dispatch(setPaletteMode(mode as InterpolationMode))
    }

    const handleChangeGamma = (gamma: number) => {
        dispatch(setGamma(gamma))
    }

    return (
        <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4'>
            {pickers.map(picker =>
                <Card key={picker.id}>
                    <CardContent className='content-stretch'>
                        <ColorPicker
                            key={picker.id}
                            color={picker.color}
                            onChangeColor={handleChangeColor(picker.id)}
                        />
                    </CardContent>
                </Card>
            )}

            <div className='grid sm:grid-cols-2 lg:grid-cols-1 sm:col-span-2 lg:col-span-2 gap-4'>
                <Card>
                    <CardTitle title='interpolation mode' />
                    <CardContent>
                        {modes.map(mode =>
                            <Radio
                                key={mode}
                                id={mode}
                                value={mode}
                                checked={selectPaletteMode(lantanaState) === mode}
                                onChange={handleChangePaletteMode}
                            >
                                {mode}
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
                                value={selectPaletteSize(lantanaState)}
                                min={0}
                                max={30}
                                step={1}
                                precision={0}
                                onChangeValue={handleChangePaletteSize}
                            />
                        </CardContent>
                    </Card>

                    <Card>
                        <CardTitle title='center shift' />
                        <CardContent>
                            <NumberInput
                                large
                                value={selectGamma(lantanaState)}
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
