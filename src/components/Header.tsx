import chroma from 'chroma-js'
import { brewer } from 'chroma-js'
import React, { useContext } from 'react'
import { ColorBrewerContext } from '../state/color-brewer/context'
import { selectPaletteName } from '../state/color-brewer/selectors'
import { LantanaContext } from '../state/lantana/context'
import { selectColorsFromColorPickers } from '../state/lantana/selectors'
import TabLink from './TabLink'

const style = {
    header: 'flex flex-nowrap mb-6 mt-4 no-scrollbar overflow-x-scroll scroll-snap-x',
    tabLink: 'px-3 scroll-snap-align-start'
}

const Header: React.FC = () => {
    const { lantanaState } = useContext(LantanaContext)
    const { colorBrewerState } = useContext(ColorBrewerContext)

    const lantanaColors = selectColorsFromColorPickers(lantanaState)

    const colorBrewerColors = chroma
        .scale(brewer[selectPaletteName(colorBrewerState)])
        .colors(3, null)

    return (
        <header className={style.header}>
            <TabLink
                className={style.tabLink}
                description='tool for creating color schemes'
                to='/'
                activeOnlyWhenExact
            >
                <span>lantana</span>

                {lantanaColors.map((color, index) =>
                    <div key={index} className='flex items-center'>
                        <span style={{ color: color.hex() }}>•</span>
                        {index + 1 !== lantanaColors.length && <span>{'->'}</span>}
                    </div>
                )}
            </TabLink>

            <TabLink
                className={style.tabLink}
                description='color schemes by Dr. Cynthia Brewer'
                to='/colorbrewer'
                activeOnlyWhenExact
            >
                <span>colorbrewer</span>
                
                {colorBrewerColors.map((color, index) =>
                    <div key={index}>
                        <span style={{ color: color.hex() }}>•</span>
                    </div>
                )}

            </TabLink>
        </header>
    )
}

export default Header