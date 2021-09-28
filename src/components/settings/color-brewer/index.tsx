import { FC } from 'react'
import CardPaletteSize from './card-palette-size'
import CardPaletteName from './card-palette-name'
import CardGroupName from './card-group-name'

const ColorBrewer: FC = () => {
    return (
        <div className='grid md:grid-cols-7 gap-4'>
            <div className='grid sm:grid-cols-5 md:grid-cols-1 md:col-span-3 gap-4'>
                <CardGroupName />
                <CardPaletteSize />
            </div>

            <CardPaletteName />
        </div>
    )
}

export default ColorBrewer
