import { Color } from 'chroma-js'
import React from 'react'

export interface ColorStackProps {
    colors: Color[]
}

const style = {
    stack: 'flex items-center py-1 box-content first:ml-1.0 last:-mr-1.5',
    color: 'w-5 h-5 rounded-full -ml-1.5'
}

const ColorStack: React.FC<ColorStackProps> = ({ colors }) => {
    return (
        <div className={style.stack}>
            {colors.map((color, index) =>
                <div
                    key={color.hex()}
                    className={style.color}
                    style={{ backgroundColor: color.hex() }}
                />
            )}
        </div>
    )
}

export default ColorStack