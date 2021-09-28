import { FC } from 'react'
import CardPaletteSize from './card-palette-size'
import CardGamma from './card-gamma'
import CardMode from './card-mode'
import ColorPickers from './color-pickers'

const Lantana: FC = () => {
    return (
        <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4'>
            <ColorPickers />

            <div className='grid sm:grid-cols-2 lg:grid-cols-1 sm:col-span-2 lg:col-span-2 gap-4'>
                <CardMode />

                <div className='grid md:grid-cols-2 gap-4'>
                    <CardPaletteSize />

                    <CardGamma />
                </div>
            </div>
        </div>
    )
}

export default Lantana
