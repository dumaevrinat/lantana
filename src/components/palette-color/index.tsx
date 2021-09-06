import { Color } from 'chroma-js'
import clsx from 'clsx'
import copy from 'copy-to-clipboard'
import { FC, useState } from 'react'
import { isLightColor } from '../../utils/color'
import './palette-color.css'

export interface PaletteColorProps {
    color: Color
}

const PaletteColor: FC<PaletteColorProps> = (props: PaletteColorProps) => {
    const { color } = props

    const label = color.hex().substring(1).toUpperCase()

    const [isCopied, setIsCopied] = useState(false)

    const handleClick = () => {
        copy(label)

        setIsCopied(true)
    }

    return (
        <div
            className='palette-color group'
            style={{ backgroundColor: color.hex() }}
        >
            <div
                className={clsx(
                    'palette-color__content',
                    isCopied && 'palette-color__content--copied'
                )}
                onClick={handleClick}
                onAnimationEnd={() => setIsCopied(false)}
            >
                <span className={clsx(
                    'palette-color__label',
                    isLightColor(color) ? 'palette-color__label--dark' : 'palette-color__label--light'
                )}
                >
                    {isCopied ? 'Copy!' : label}
                </span>
            </div>
        </div>
    )
}

export default PaletteColor