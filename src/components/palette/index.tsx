import { FC } from 'react'
import PaletteColor from '../palette-color'
import { usePaletteColors } from '../../hooks/use-palette-colors'
import './palette.css'

const Palette: FC = () => {
    const paletteColors = usePaletteColors()

    return (
        <div className='palette'>
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