import { Color } from 'chroma-js'
import { FC } from 'react'
import './color-stack.css'

export interface ColorStackProps {
    colors: Color[]
}

const ColorStack: FC<ColorStackProps> = (props: ColorStackProps) => {
    const { colors } = props

    return (
        <div className='color-stack'>
            {colors.map((color) =>
                <div
                    key={color.hex()}
                    className='color-stack__circle'
                    style={{ backgroundColor: color.hex() }}
                />
            )}
        </div>
    )
}

export default ColorStack
