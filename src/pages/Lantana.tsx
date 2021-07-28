import React, { ChangeEvent, useContext } from 'react'
import Palette from '../components/palette'
import { LantanaContext } from '../state/lantana/context'
import { selectColorPickers, selectGamma, selectPaletteColors, selectPaletteMode, selectPaletteSize } from '../state/lantana/selectors'
import { setGamma, setPaletteMode, setPaletteSize, updateColorPicker } from '../state/lantana/actions'
import { Color, InterpolationMode } from 'chroma-js'
import Settings from '../components/settings'
import ColorPicker from '../components/color-picker'
import Radio from '../components/radio'
import NumberInput from '../components/number-input'
import SettingsItem from '../components/settings-item'

const style = {
    colorPickers: 'flex flex-col sm:flex-row gap-8',
}

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
        <>
            <Settings>
                <div className={style.colorPickers}>
                    {pickers.map(picker =>
                        <ColorPicker
                            key={picker.id}
                            color={picker.color}
                            onChangeColor={handleChangeColor(picker.id)}
                        />
                    )}
                </div>

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

                <SettingsItem label='number of colors'>
                    <NumberInput
                        className={{inputWrapper: ' flex-grow'}}
                        value={selectPaletteSize(lantanaState)}
                        minValue={0}
                        maxValue={20}
                        step={1}
                        precision={0}
                        onChange={handleChangePaletteSize}
                    />
                </SettingsItem>

                <SettingsItem label='center shift'>
                    <NumberInput
                        value={selectGamma(lantanaState)}
                        minValue={0}
                        maxValue={5}
                        step={0.1}
                        precision={1}
                        onChange={handleChangeGamma}
                    />
                </SettingsItem>
            </Settings>

            <Palette colors={selectPaletteColors(lantanaState)} />
        </>
    )
}

export default Lantana
