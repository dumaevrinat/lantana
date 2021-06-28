import chroma, { Color } from 'chroma-js'
import React, { FC, useState } from 'react'
import ColorPicker from './components/ColorPicker'


const App: FC = () => {
    const [color, setColor] = useState<Color>(chroma('#ff1'))

    return (
        <>
            <div className='flex flex-col items-center p-4 mx-auto max-w-6xl gap-6'>
                <div
                    className='rounded-xl w-32 h-32'
                    style={{ backgroundColor: color.hex() }}
                />
                <ColorPicker color={color} onChange={setColor} />
            </div>
        </>
    )
}

export default App
