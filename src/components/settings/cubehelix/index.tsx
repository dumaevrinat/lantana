import { FC } from 'react'
import CardControlMain from './card-control-main'
import CardControlDark from './card-control-dark'
import CardControlLight from './card-control-light'
import CardPaletteSize from './card-palette-size'

const Cubehelix: FC = () => {
    return (
        <div className='grid md:grid-cols-2 gap-4'>
            <CardControlMain />

            <div className='grid sm:grid-cols-2 md:grid-cols-1 gap-4'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <CardControlDark />

                    <CardControlLight />
                </div>

                <CardPaletteSize />
            </div>
        </div>
    )
}

export default Cubehelix
