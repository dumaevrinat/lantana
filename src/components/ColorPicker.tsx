import React, { useEffect, useState } from 'react'
import chroma, { Color } from 'chroma-js'
import { isValidHex } from '../utils'
import ColorPickerDimension from './ColorPickerDimension'

export interface ColorPickerProps {
    color: Color;
    onChange: (color: Color) => void;
}

const ColorPicker: React.FC<ColorPickerProps> = ({ color, onChange }) => {
    const [hex, setHex] = useState<string>(color.hex().substring(1))

    const [h, s, l] = color.hsl()
    const [hue, setHue] = useState<number>(isNaN(h) ? 0 : h)
    const [saturation, setSaturation] = useState<number>(Math.round(s * 100))
    const [lightness, setLightness] = useState<number>(Math.round(l * 100))

    const handleChangeHex = (hex: string) => {
        setHex(hex)

        if (isValidHex(hex)) {
            const newColor = chroma(hex)
            const [newHue, newSaturation, newLightness] = newColor.hsl()

            setHue(isNaN(newHue) ? 0 : newHue)
            setSaturation(Math.round(newSaturation * 100))
            setLightness(Math.round(newLightness * 100))

            onChange(newColor)
        }
    }

    const handleChangeHue = (newHue: number) => {
        setHue(newHue)

        const newColor = chroma.hsl(newHue, saturation / 100, lightness / 100)
        setHex(newColor.hex().substring(1))
        onChange(newColor)
    }

    const handleChangeSaturation = (newSaturation: number) => {
        setSaturation(newSaturation)

        const newColor = chroma.hsl(hue, newSaturation / 100, lightness / 100)
        setHex(newColor.hex().substring(1))
        onChange(newColor)
    }

    const handleChangeLightness = (newLightness: number) => {
        setLightness(newLightness)

        const newColor = chroma.hsl(hue, saturation / 100, newLightness / 100)
        setHex(newColor.hex().substring(1))
        onChange(newColor)
    }


    return (
        <div className='flex flex-col items-start p-8 w-full max-w-xs'>
            <div className='flex mb-4'>
                <p className='text-4xl font-semibold text-gray-200 select-none' >#</p>
                <input
                    className='uppercase text-4xl font-semibold'
                    type='text'
                    size={3}
                    maxLength={6}
                    value={hex}
                    onChange={(e) => handleChangeHex(e.target.value)}
                />
                <div
                    className='w-4 h-4 rounded-full self-center'
                    style={{ backgroundColor: color.hex() }}
                />
            </div>
            <div className='flex flex-col gap-5 w-full'>
                <ColorPickerDimension
                    title='hue'
                    value={hue}
                    minValue={0}
                    maxValue={360}
                    step={1}
                    onChange={handleChangeHue}
                />
                <ColorPickerDimension
                    title='saturation'
                    value={saturation}
                    minValue={0}
                    maxValue={100}
                    step={1}
                    onChange={handleChangeSaturation}
                />
                <ColorPickerDimension
                    title='lightness'
                    value={lightness}
                    minValue={0}
                    maxValue={100}
                    step={1}
                    onChange={handleChangeLightness}
                />
            </div>
        </div>
    )
}

export default ColorPicker