import { FC } from 'react'
import { useRecoilValue } from 'recoil'
import { colorPickersColors } from '../../state/lantana'
import './logo.css'

const LantanaLogo: FC = () => {
    const colors = useRecoilValue(colorPickersColors)

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