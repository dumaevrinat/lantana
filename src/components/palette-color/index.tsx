import { Color } from 'chroma-js'
import clsx from 'clsx'
import copy from 'copy-to-clipboard'
import React, { useState } from 'react'
import { isLightColor } from '../../utils/color'

interface CopyColorValueProps {
    value: string
    label: string
    className?: string
}

export interface PaletteColorProps {
    color: Color
}

const style = {
    paletteColor: 'group flex flex-1 items-center justify-center tap-highlight-transparent transition-all ease-in-out',
    content: 'h-0 overflow-hidden group-hover:h-auto transition-height ease-in-out select-none',
    values: 'flex flex-col px-2 py-4 sm:py-6 gap-2 sm:gap-3 items-center justify-center opacity-0 group-hover:opacity-100 text-lg transition-opacity ease-in-out',
    cssValues: 'flex flex-col gap-0 sm:gap-3 sm:flex-row items-center',
    value: 'cursor-pointer',
    hexValue: 'font-bold md:text-3xl'
}

const CopyColorValue: React.FC<CopyColorValueProps> = ({ value, label, className }) => {
    const [isCopied, setIsCopied] = useState(false)

    const handleClick = () => {
        copy(value)

        setIsCopied(true)
        setTimeout(() => setIsCopied(false), 800)
    }

    return (
        <>
            <span
                className={clsx(style.value, className)}
                onClick={handleClick}
            >
                {isCopied ? 'Copied!' : label}
            </span>
        </>
    )
}

const PaletteColor: React.FC<PaletteColorProps> = ({ color }) => {
    const label = color.hex().substring(1).toUpperCase()

    const lab = color.lab().map(value => value.toFixed(4))
    const lch = color.lch().map(value => value.toFixed(4))

    const labCss = `lab(${lab[0]}% ${lab[1]} ${lab[2]})`
    const lchCss = `lch(${lch[0]}% ${lch[1]} ${lch[2]})`
    const rgbCss = color.css()
    const hslCss = color.css('hsl')

    return (
        <div
            className={style.paletteColor}
            style={{ backgroundColor: color.hex() }}
        >
            <div className={style.content}>
                <div className={clsx(style.values, isLightColor(color) ? 'text-black' : 'text-white')}>
                    <CopyColorValue className={style.hexValue} label={label} value={color.hex()} />

                    <div className={style.cssValues}>
                        <CopyColorValue label='hsl' value={hslCss} />
                        <CopyColorValue label='rgb' value={rgbCss} />
                        <CopyColorValue label='lab' value={labCss} />
                        <CopyColorValue label='lch' value={lchCss} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PaletteColor