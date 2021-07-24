import React, { ChangeEvent, useState } from 'react'
import chroma, { Color } from 'chroma-js'
import { colorToPercentageHsl, formatHexString, isValidHex, percentageHslToColor } from '../utils/color'
import ColorPickerControl from './ColorPickerControl'

export interface ColorPickerProps {
    color: Color
    onChangeColor: (color: Color) => void
}

const style = {
    colorPicker: 'flex-1 flex-col items-start mb-4',
    title: 'text-black transition-all ease-in-out mb-4',
    titleInput: 'uppercase text-3xl font-semibold',
    controls: 'flex flex-col gap-5 w-full'
}

const ColorPicker: React.FC<ColorPickerProps> = ({ color, onChangeColor }) => {
    const [h, s, l] = colorToPercentageHsl(color)

    const [hex, setHex] = useState<string>(color.hex().substring(1))
    const [hue, setHue] = useState<number>(h)
    const [saturation, setSaturation] = useState<number>(s)
    const [lightness, setLightness] = useState<number>(l)

    const handleChangeHex = (e: ChangeEvent<HTMLInputElement>) => {
        const hex = formatHexString(e.target.value)
        setHex(hex)

        if (isValidHex(hex)) {
            const newColor = chroma(hex)
            const [newHue, newSaturation, newLightness] = colorToPercentageHsl(newColor)

            setHue(newHue)
            setSaturation(newSaturation)
            setLightness(newLightness)

            onChangeColor(newColor)
        }
    }

    const handleChangeHue = (newHue: number) => {
        setHue(newHue)
        
        const newColor = percentageHslToColor(newHue, saturation, lightness)
        setHex(newColor.hex().substring(1))
        onChangeColor(newColor)
    }

    const handleChangeSaturation = (newSaturation: number) => {
        setSaturation(newSaturation)

        const newColor = percentageHslToColor(hue, newSaturation, lightness)
        setHex(newColor.hex().substring(1))
        onChangeColor(newColor)
    }

    const handleChangeLightness = (newLightness: number) => {
        setLightness(newLightness)

        const newColor = percentageHslToColor(hue, saturation, newLightness)
        setHex(newColor.hex().substring(1))
        onChangeColor(newColor)
    }


    return (
        <div className={style.colorPicker}>
            <div className={style.title}>
                <input
                    className={style.titleInput}
                    type='text'
                    size={6}
                    value={hex}
                    onChange={handleChangeHex}
                />
            </div>
            <div className={style.controls}>
                <ColorPickerControl
                    title='hue'
                    value={hue}
                    minValue={0}
                    maxValue={360}
                    step={1}
                    precision={0}
                    onChange={handleChangeHue}
                />
                <ColorPickerControl
                    title='saturation'
                    value={saturation}
                    minValue={0}
                    maxValue={100}
                    step={1}
                    precision={0}
                    onChange={handleChangeSaturation}
                />
                <ColorPickerControl
                    title='lightness'
                    value={lightness}
                    minValue={0}
                    maxValue={100}
                    step={1}
                    precision={0}
                    onChange={handleChangeLightness}
                />
            </div>
        </div>
    )
}

export default ColorPicker