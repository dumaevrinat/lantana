import { FC, useContext } from 'react'
import { LantanaContext } from '../../state/lantana/context'
import { selectColorsFromColorPickers } from '../../state/lantana/selectors'

const style = {
    'logo': 'text-3xl sm:text-4xl'
}

const LantanaLogo: FC = () => {
    const { lantanaState } = useContext(LantanaContext)

    const colors = selectColorsFromColorPickers(lantanaState)

    return (
        <>
            <span className={style.logo}>lantana</span>

            {colors.map((color, index) =>
                <div key={index} className='flex items-center'>
                    <span
                        className={style.logo}
                        style={{ color: color.hex() }}
                    >
                        •
                    </span>
                    {index + 1 !== colors.length &&
                        <span className={style.logo}>
                            {'->'}
                        </span>
                    }
                </div>
            )}
        </>
    )
}

export default LantanaLogo