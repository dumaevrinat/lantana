import { Color } from 'chroma-js'
import clsx from 'clsx'
import copy from 'copy-to-clipboard'
import React, { useState } from 'react'
import { isLightColor } from '../../utils/color'

export interface PaletteColorProps {
    color: Color
}

const style = {
    paletteColor: 'group flex flex-1 items-center justify-center cursor-pointer tap-highlight-transparent transition-all ease-in-out',
    content: 'h-0 overflow-hidden group-hover:h-auto transition-height ease-in-out select-none',
    label: 'py-4 opacity-0 group-hover:opacity-100 text-lg transition-opacity ease-in-out'
}

const PaletteColor: React.FC<PaletteColorProps> = ({ color }) => {
    const [isCopied, setIsCopied] = useState(false)

    const handleClick = () => {
        copy(color.hex())

        setIsCopied(true)
        setTimeout(() => setIsCopied(false), 800)
    }

    return (
        <div
            className={style.paletteColor}
            style={{ backgroundColor: color.hex() }}
            onClick={handleClick}
        >
            <div className={style.content}>
                <div className={clsx(style.label, isLightColor(color) ? 'text-black' : 'text-white')}>
                    {isCopied ?
                        <span>
                            Copied!
                        </span> :
                        <span className='uppercase'>
                            {color.hex()}
                        </span>
                    }
                </div>
            </div>
        </div>
    )
}

export default PaletteColor