import React, { ChangeEvent, useState } from 'react'
import chroma, { Color } from 'chroma-js'
import { isValidHex } from '../utils/color'
import ColorPickerDimension from './ColorPickerDimension'

export interface ColorPickerProps {
    color: Color
    onChangeColor: (color: Color) => void
}

const ColorPicker: React.FC<ColorPickerProps> = ({ color, onChangeColor }) => {
    const [h, s, l] = color.hsl()

    const [hex, setHex] = useState<string>(color.hex().substring(1))
    const [hue, setHue] = useState<number>(Math.round(isNaN(h) ? 0 : h))
    const [saturation, setSaturation] = useState<number>(Math.round(s * 100))
    const [lightness, setLightness] = useState<number>(Math.round(l * 100))

    const handleChangeHex = (e: ChangeEvent<HTMLInputElement>) => {
        const hex = e.target.value.replace(/[^0-9A-F]/ig, '').substring(0, 6)
        setHex(hex)

        if (isValidHex(hex)) {
            const newColor = chroma(hex)
            const [newHue, newSaturation, newLightness] = newColor.hsl()

            setHue(Math.round(isNaN(newHue) ? 0 : newHue))
            setSaturation(Math.round(newSaturation * 100))
            setLightness(Math.round(newLightness * 100))

            onChangeColor(newColor)
        }
    }

    const handleChangeHue = (newHue: number) => {
        setHue(newHue)

        const newColor = chroma.hsl(newHue, saturation / 100, lightness / 100)
        setHex(newColor.hex().substring(1))
        onChangeColor(newColor)
    }

    const handleChangeSaturation = (newSaturation: number) => {
        setSaturation(newSaturation)

        const newColor = chroma.hsl(hue, newSaturation / 100, lightness / 100)
        setHex(newColor.hex().substring(1))
        onChangeColor(newColor)
    }

    const handleChangeLightness = (newLightness: number) => {
        setLightness(newLightness)

        const newColor = chroma.hsl(hue, saturation / 100, newLightness / 100)
        setHex(newColor.hex().substring(1))
        onChangeColor(newColor)
    }


    return (
        <div className='flex flex-col items-start max-w-xs'>
            <div className='focus-within:text-gray-100 text-black transition-all ease-in-out flex items-center mb-4'>
                <p className='text-3xl font-semibold text-inherit select-none'>#</p>
                <input
                    className='uppercase text-3xl font-semibold'
                    type='text'
                    size={6}
                    value={hex}
                    onChange={handleChangeHex}
                />
            </div>
            <div className='flex flex-col gap-7 w-full'>
                <ColorPickerDimension
                    title='hue'
                    value={hue}
                    minValue={0}
                    maxValue={360}
                    step={1}
                    precision={0}
                    onChange={handleChangeHue}
                />
                <ColorPickerDimension
                    title='saturation'
                    value={saturation}
                    minValue={0}
                    maxValue={100}
                    step={1}
                    precision={0}
                    onChange={handleChangeSaturation}
                />
                <ColorPickerDimension
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