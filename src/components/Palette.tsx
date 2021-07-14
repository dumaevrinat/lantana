import React from 'react'

export interface PaletteProps {
    colors: string[]
}

const Palette: React.FC<PaletteProps> = ({colors}) => {

    return (
        <div className='flex flex-wrap gap-4'>
            {colors.map((color, index) =>
                <div key={index} className='flex flex-col gap-2'>
                    <div className='w-20 h-20 flex rounded-xl transition-all ease-out' style={{ backgroundColor: color }} />
                    <p className='text-base'>
                        {color}
                    </p>
                </div>
            )}
        </div>

    )
}

export default Palette