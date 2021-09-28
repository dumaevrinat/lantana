import { ChangeEvent, FC, useState } from 'react'
import chroma, { Color } from 'chroma-js'
import { colorToPercentageHsl, formatHexString, isValidHex, percentageHslToColor } from '../../utils/color'
import LargeControl from '../base/large-control'
import Input from '../base/input'
import './color-picker.css'
import Card from '../base/card'
import CardContent from '../base/card-content'

export interface ColorPickerProps {
    color: Color
    onChangeColor: (color: Color) => void
}

const ColorPicker: FC<ColorPickerProps> = (props: ColorPickerProps) => {
    const { color, onChangeColor } = props

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
        <Card className='color-picker'>
            <Input
                className='color-picker__title'
                size={6}
                value={hex}
                onChange={handleChangeHex}
            />
            <CardContent className='color-picker__controls'>
                <LargeControl
                    title='hue'
                    value={hue}
                    minValue={0}
                    maxValue={360}
                    step={1}
                    precision={0}
                    onChange={handleChangeHue}
                />
                <LargeControl
                    title='saturation'
                    value={saturation}
                    minValue={0}
                    maxValue={100}
                    step={1}
                    precision={0}
                    onChange={handleChangeSaturation}
                />
                <LargeControl
                    title='lightness'
                    value={lightness}
                    minValue={0}
                    maxValue={100}
                    step={1}
                    precision={0}
                    onChange={handleChangeLightness}
                />
            </CardContent>
        </Card>
    )
}

export default ColorPicker
