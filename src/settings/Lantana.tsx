import React, { ChangeEvent, useContext } from 'react'
import { LantanaContext } from '../state/lantana/context'
import { selectColorPickers, selectGamma, selectPaletteMode, selectPaletteSize } from '../state/lantana/selectors'
import { setGamma, setPaletteMode, setPaletteSize, updateColorPicker } from '../state/lantana/actions'
import { Color, InterpolationMode } from 'chroma-js'
import ColorPicker from '../components/color-picker'
import Radio from '../components/radio'
import NumberInput from '../components/number-input'
import SettingsItem from '../components/settings-item'

const Lantana: React.FC = () => {
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
                <ColorPicker
                    key={picker.id}
                    color={picker.color}
                    onChangeColor={handleChangeColor(picker.id)}
                />
            )}

            <div className='grid sm:grid-cols-2 lg:grid-cols-1 sm:col-span-2 lg:col-span-2 gap-4'>
                <SettingsItem label='interpolation mode'>
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
                </SettingsItem>

                <div className='grid md:grid-cols-2 gap-4'>
                    <SettingsItem label='number of colors'>
                        <NumberInput
                            className={{ input: 'text-3xl' }}
                            value={selectPaletteSize(lantanaState)}
                            minValue={0}
                            maxValue={30}
                            step={1}
                            precision={0}
                            onChange={handleChangePaletteSize}
                        />
                    </SettingsItem>

                    <SettingsItem label='center shift'>
                        <NumberInput
                            className={{ input: 'text-3xl' }}
                            value={selectGamma(lantanaState)}
                            minValue={0}
                            maxValue={5}
                            step={0.1}
                            precision={1}
                            onChange={handleChangeGamma}
                        />
                    </SettingsItem>
                </div>
            </div>
        </div>
    )
}

export default Lantana
