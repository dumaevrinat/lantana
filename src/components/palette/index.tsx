import React from 'react'
import { Color } from 'chroma-js'
import PaletteColor from '../palette-color'

export interface PaletteProps {
    colors: Color[]
}

const style = {
    palette: 'w-1/3 min-w-min sm:w-auto flex flex-col sm:flex-grow self-stretch overflow-hidden rounded-3xl'
}

const Palette: React.FC<PaletteProps> = ({ colors }) => {
    return (
        <div className={style.palette}>
            {colors.map((color, index) =>
                <PaletteColor
                    key={index}
                    color={color}
                />
            )}
        </div>
    )
}

export default Palette