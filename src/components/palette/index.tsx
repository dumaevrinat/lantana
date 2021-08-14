import React from 'react'
import PaletteColor from '../palette-color'
import { usePaletteColors } from '../../hooks/use-palette-colors'

const style = {
    palette: 'flex overflow-hidden rounded-3xl'
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