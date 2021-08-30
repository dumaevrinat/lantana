import { FC } from 'react'
import PaletteColor from '../palette-color'
import { usePaletteColors } from '../../hooks/use-palette-colors'

const style = {
    palette: 'flex w-full overflow-hidden rounded-3xl animate-fadein'
}

const Palette: FC = () => {
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