import React, { ChangeEvent, useState } from 'react'
import chroma, { Color } from 'chroma-js'
import { colorToPercentageHsl, formatHexString, isValidHex, percentageHslToColor } from '../../utils/color'
import LargeControl from '../large-control'
import Card from '../card'

export interface ColorPickerProps {
    color: Color
    onChangeColor: (color: Color) => void
}

const style = {
    card: 'min-w-min pb-6',
    title: 'text-black transition-all ease-in-out mb-4',
    titleInput: 'uppercase text-3xl font-semibold',
    controls: 'flex flex-col gap-5 sm:gap-6 w-full'
}

const generateGradientByColor = (color: Color, modechan: string, length: number, step: number) => {
    return Array
        .from(Array(length).keys())
        .map(item => color.set(modechan, item * step).css())
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

    const hueGradient = generateGradientByColor(color, 'hsl.h', 9, 45)
    const saturationGradient = generateGradientByColor(color, 'hsl.s', 10, 0.1)
    const lightnessGradient = generateGradientByColor(color, 'hsl.l', 10, 0.1)

    return (
        <Card className={style.card}>
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
                <LargeControl
                    title='hue'
                    value={hue}
                    minValue={0}
                    maxValue={360}
                    step={1}
                    precision={0}
                    onChange={handleChangeHue}
                    rangeInputProps={{ style: { background: `linear-gradient(to right, ${hueGradient.toString()})` } }}
                />
                <LargeControl
                    title='saturation'
                    value={saturation}
                    minValue={0}
                    maxValue={100}
                    step={1}
                    precision={0}
                    onChange={handleChangeSaturation}
                    rangeInputProps={{ style: { background: `linear-gradient(to right, ${saturationGradient.toString()})` } }}
                />
                <LargeControl
                    title='lightness'
                    value={lightness}
                    minValue={0}
                    maxValue={100}
                    step={1}
                    precision={0}
                    onChange={handleChangeLightness}
                    rangeInputProps={{ style: { background: `linear-gradient(to right, ${lightnessGradient.toString()})` } }}
                />
            </div>
        </Card>
    )
}

export default ColorPicker