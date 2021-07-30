import { Color } from 'chroma-js'
import clsx from 'clsx'
import copy from 'copy-to-clipboard'
import React, { useState } from 'react'
import { isLightColor } from '../../utils/color'

interface CopyColorValueProps {
    value: string
    label: string
}

export interface PaletteColorProps {
    color: Color
}

const style = {
    paletteColor: 'group flex flex-1 px-2 py-4 tap-highlight-transparent transition-all ease-in-out',
    content: 'flex-1 h-0 overflow-hidden group-hover:h-auto transition-height ease-in-out select-none',
    values: 'flex flex-1 flex-col items-center justify-center opacity-0 group-hover:opacity-100 text-lg transition-opacity ease-in-out',
    cssValues: 'flex flex-col gap-0 sm:gap-3 sm:flex-row items-center',
    value: 'cursor-pointer'

}

const CopyColorValue: React.FC<CopyColorValueProps> = ({ value, label }) => {
    const [isCopied, setIsCopied] = useState(false)

    const handleClick = () => {
        copy(value)

        setIsCopied(true)
        setTimeout(() => setIsCopied(false), 800)
    }

    return (
        <>
            {isCopied ?
                <span>
                    Copied!
                </span> :
                <span
                    className={style.value}
                    onClick={handleClick}
                >
                    {label}
                </span>
            }
        </>
    )
}

const PaletteColor: React.FC<PaletteColorProps> = ({ color }) => {
    const lab = color.lab().map(value => value.toFixed(4))

    const labCss = `lab(${lab[0]}% ${lab[1]} ${lab[2]})`
    const rgbCss = color.css()
    const hslCss = color.css('hsl')

    return (
        <div
            className={style.paletteColor}
            style={{ backgroundColor: color.hex() }}
        >
            <div className={style.content}>
                <div className={clsx(style.values, isLightColor(color) ? 'text-black' : 'text-white')}>
                    <CopyColorValue label={color.hex().toUpperCase()} value={color.hex()} />

                    <div className={style.cssValues}>
                        <CopyColorValue label='HSL' value={hslCss} />
                        <CopyColorValue label='RGB' value={rgbCss} />
                        <CopyColorValue label='LAB' value={labCss} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PaletteColor