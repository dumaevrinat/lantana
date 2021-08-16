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
        <div className='grid md:grid-cols-7 gap-4'>
            <div className='grid sm:grid-cols-5 md:grid-cols-1 md:col-span-3 gap-4'>
                <SettingsItem
                    label='nature of data'
                    className={{ card: 'sm:col-span-3 md:col-span-1' }}
                >
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

                <SettingsItem
                    label='number of colors'
                    className={{ card: 'sm:col-span-2 md:col-span-1' }}
                >
                    <NumberInput
                        className={{ input: 'text-3xl' }}
                        value={selectPaletteSize(colorBrewerState)}
                        minValue={0}
                        maxValue={30}
                        step={1}
                        precision={0}
                        onChange={handleChangePaletteSize}
                    />
                </SettingsItem>
            </div>

            <SettingsItem label='color scheme' className={{ card: 'md:col-span-4' }}>
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
        </div>
    )
}

export default ColorBrewer
