import { FC } from 'react'
import { useRecoilValue } from 'recoil'
import { paletteColors } from '../../state/global'
import PaletteColor from '../palette-color'
import './palette.css'

const Palette: FC = () => {
    const colors = useRecoilValue(paletteColors)

    return (
        <div className='palette'>
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