import React, { useContext } from 'react'
import { LantanaContext } from '../../state/lantana/context'
import { selectColorsFromColorPickers } from '../../state/lantana/selectors'

const LantanaLogo: React.FC = () => {
    const { lantanaState } = useContext(LantanaContext)

    const colors = selectColorsFromColorPickers(lantanaState)

    return (
        <>
            <span>lantana</span>

            {colors.map((color, index) =>
                <div key={index} className='flex items-center'>
                    <span style={{ color: color.hex() }}>•</span>
                    {index + 1 !== colors.length && <span>{'->'}</span>}
                </div>
            )}
        </>
    )
}

export default LantanaLogo
