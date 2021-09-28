import { Color } from 'chroma-js'
import { FC } from 'react'
import { useRecoilState } from 'recoil'
import { colorPickers as lantanaColorPickers } from '../../../state/lantana'
import ColorPicker from '../../color-picker'

const ColorPickers: FC = () => {
    const [colorPickers, setColorPickers] = useRecoilState(lantanaColorPickers)

    const handleChangeColor = (id: string) => (color: Color) => {
        const updatedColorPicker = { id, color }

        setColorPickers(colorPickers.map(picker =>
            picker.id === id ?
                { ...picker, ...updatedColorPicker } :
                picker
        ))
    }

    return (
        <>
            {colorPickers.map(picker =>
                <ColorPicker
                    key={picker.id}
                    color={picker.color}
                    onChangeColor={handleChangeColor(picker.id)}
                />
            )}
        </>
    )
}

export default ColorPickers
