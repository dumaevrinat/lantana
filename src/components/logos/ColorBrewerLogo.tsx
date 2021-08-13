import chroma from 'chroma-js'
import React, { useContext } from 'react'
import { ColorBrewerContext } from '../../state/color-brewer/context'
import { selectPaletteName } from '../../state/color-brewer/selectors'

const ColorBrewerLogo: React.FC = () => {
    const { colorBrewerState } = useContext(ColorBrewerContext)

    const colors = chroma
        .scale(selectPaletteName(colorBrewerState))
        .colors(3, null)

    return (
        <>
            <span>colorbrewer</span>

            {colors.map((color, index) =>
                <div key={index}>
                    <span style={{ color: color.hex() }}>•</span>
                </div>
            )}
        </>
    )
}

export default ColorBrewerLogo
