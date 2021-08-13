import React, { useContext } from 'react'
import { CubehelixContext } from '../../state/cubehelix/context'
import { selectLogoColors } from '../../state/cubehelix/selectors'

const CubehelixLogo: React.FC = () => {
    const { cubehelixState } = useContext(CubehelixContext)

    const colors = selectLogoColors(cubehelixState).map(color => color.hex())

    return (
        <>
            <span>cubehelix</span>
            
            {colors.map((color, index) =>
                <div key={index} className='flex items-center'>
                    <span style={{ color: color }}>•</span>
                    {index + 1 !== colors.length && <span>{'-->'}</span>}
                </div>
            )}
        </>
    )
}

export default CubehelixLogo
