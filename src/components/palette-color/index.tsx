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
    paletteColor: 'group flex flex-grow items-stretch flex-basis-1 hover:flex-basis-44 h-44 overflow-hidden tap-highlight-transparent cursor-pointer transition-all ease-in-out',
    content: 'flex flex-grow justify-center items-center opacity-0 group-hover:opacity-100 transition-all ease-in-out select-none',
    label: 'font-bold md:text-2xl'
}

const PaletteColor: React.FC<PaletteColorProps> = ({ color }) => {
    const label = color.hex().substring(1).toUpperCase()

    const [isCopied, setIsCopied] = useState(false)

    const handleClick = () => {
        copy(label)

        setIsCopied(true)
    }

    return (
        <div
            className={style.paletteColor}
            style={{ backgroundColor: color.hex() }}
        >
            <div
                className={clsx(style.content, isCopied && 'animate-bounce-1')}
                onClick={handleClick}
                onAnimationEnd={() => setIsCopied(false)}
            >
                <span className={clsx(
                    style.label,
                    isLightColor(color) ? 'text-black' : 'text-white'
                )}
                >
                    {isCopied ? 'Copy!' : label}
                </span>
            </div>
        </div>
    )
}

export default PaletteColor