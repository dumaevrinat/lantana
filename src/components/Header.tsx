import React, { useContext } from 'react'
import { AppContext } from '../state/context'
import { selectColorsFromColorPickers } from '../state/selectors'

export interface HeaderProps {
    title: string,
    subtitle: string
}

const Header: React.FC<HeaderProps> = ({ title, subtitle }) => {
    const { state } = useContext(AppContext)

    const colors = selectColorsFromColorPickers(state)

    return (
        <header className='flex flex-col items-center p-8 pb-10'>
            <div className='group flex flex-wrap justify-center select-none bg-white hover:bg-black transition-all ease-in-out duration-300 border-2 rounded-full py-2 px-6'>
                <h1 className='text-black group-hover:text-white transition-colors ease-in-out duration-300'>
                    {title}
                </h1>
                <div className='flex flex-nowrap'>
                    {colors.map((color, index) =>
                        <div key={index} className='flex items-center'>
                            <h1 style={{ color: color.hex() }}>•</h1>
                            {index + 1 !== colors.length &&
                                <h1 className='text-black group-hover:text-white transition-colors ease-in-out duration-300'>
                                    {'->'}
                                </h1>
                            }
                        </div>
                    )}
                </div>
            </div>

            <p className='text-base text-center'>
                {subtitle}
            </p>
        </header>
    )
}

export default Header