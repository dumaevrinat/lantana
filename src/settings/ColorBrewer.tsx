import chroma from 'chroma-js'
import { brewer } from 'chroma-js'
import React, { ChangeEvent, useContext } from 'react'
import ColorStack from '../components/color-stack'
import NumberInput from '../components/number-input'
import Radio from '../components/radio'
import SettingsItem from '../components/settings-item'
import { setGroupName, setPaletteName, setPaletteSize } from '../state/color-brewer/actions'
import { ColorBrewerContext } from '../state/color-brewer/context'
import { selectGroupName, selectPaletteName, selectPaletteSize } from '../state/color-brewer/selectors'
import { ColorBrewerGroupName } from '../types'
import { colorBrewerGroups } from '../utils/color-brewer-groups'

const ColorBrewer: React.FC = () => {
    const { colorBrewerState, dispatch } = useContext(ColorBrewerContext)

    const groupNames: Array<ColorBrewerGroupName> = ['sequential', 'diverging', 'qualitative']

    const handleChangePaletteSize = (size: number) => {
        dispatch(setPaletteSize(size))
    }

    const handleChangeGroupName = (e: ChangeEvent<HTMLInputElement>) => {
        const groupName = e.target.value

        dispatch(setGroupName(groupName as ColorBrewerGroupName))
    }


    const handleChangePaletteName = (e: ChangeEvent<HTMLInputElement>) => {
        const paletteName = e.target.value

        dispatch(setPaletteName(paletteName as keyof typeof brewer))
    }

    return (
        <>
            <SettingsItem label='nature of data'>
                {groupNames.map(groupName =>
                    <Radio
                        key={groupName}
                        id={groupName}
                        value={groupName}
                        checked={selectGroupName(colorBrewerState) === groupName}
                        onChange={handleChangeGroupName}
                    >
                        {groupName}
                    </Radio>
                )}
            </SettingsItem>

            <SettingsItem label='color scheme'>
                {colorBrewerGroups[selectGroupName(colorBrewerState)].map(paletteName =>
                    <Radio
                        key={paletteName}
                        id={paletteName}
                        value={paletteName}
                        checked={selectPaletteName(colorBrewerState) === paletteName}
                        onChange={handleChangePaletteName}
                    >
                        <ColorStack colors={chroma.scale(paletteName).colors(5, null)} />
                    </Radio>
                )}
            </SettingsItem>

            <SettingsItem label='number of colors'>
                <NumberInput
                    value={selectPaletteSize(colorBrewerState)}
                    minValue={0}
                    maxValue={20}
                    step={1}
                    precision={0}
                    onChange={handleChangePaletteSize}
                />
            </SettingsItem>
        </>
    )
}

export default ColorBrewer
