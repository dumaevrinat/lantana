import { FC, useContext } from 'react'
import { LantanaContext } from '../../state/lantana/context'
import { selectColorsFromColorPickers } from '../../state/lantana/selectors'
import './logo.css'

const LantanaLogo: FC = () => {
    const { lantanaState } = useContext(LantanaContext)

    const colors = selectColorsFromColorPickers(lantanaState)

    return (
        <>
            <span className='logo'>lantana</span>

            {colors.map((color, index) =>
                <div key={index} className='flex items-center'>
                    <span
                        className='logo'
                        style={{ color: color.hex() }}
                    >
                        •
                    </span>
                    {index + 1 !== colors.length &&
                        <span className='logo'>
                            {'->'}
                        </span>
                    }
                </div>
            )}
        </>
    )
}

export default LantanaLogo