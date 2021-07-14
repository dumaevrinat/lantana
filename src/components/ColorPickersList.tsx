import React, { useContext } from 'react'
import { Color } from 'chroma-js'
import { updateColorPicker } from '../state/actions'
import { AppContext } from '../state/context'
import { Picker } from '../types/types'
import ColorPicker from './ColorPicker'

export interface ColorPickersListProps {
    pickers: Picker[]
}

const ColorPickersList: React.FC<ColorPickersListProps> = ({pickers}) => {
    const { dispatch } = useContext(AppContext)


    const handleChangeColor = (id: string) => (color: Color) => {
        const updatedColorPicker = { id, color }
        dispatch(updateColorPicker(updatedColorPicker))
    }

    return (
        <div className='flex flex-wrap gap-14 mb-10'>
            {pickers.map(picker =>
                <ColorPicker
                    key={picker.id}
                    color={picker.color}
                    onChangeColor={handleChangeColor(picker.id)}
                />
            )}
        </div>
    )
}

export default ColorPickersList