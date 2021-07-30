import React from 'react'
import PaletteColor from '../palette-color'
import { usePaletteColors } from '../../hooks/use-palette-colors'

const style = {
    palette: 'w-1/3 min-w-min sm:w-auto flex flex-col sm:flex-grow self-stretch overflow-hidden rounded-3xl'
}

const Palette: React.FC = () => {
    const paletteColors = usePaletteColors()

    return (
        <div className={style.palette}>
            {paletteColors.map((color, index) =>
                <PaletteColor
                    key={index}
                    color={color}
                />
            )}
        </div>
    )
}

export default Palette