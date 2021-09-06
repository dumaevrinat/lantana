import chroma from 'chroma-js'
import { brewer } from 'chroma-js'
import { ChangeEvent, FC, useContext } from 'react'
import Card from '../components/card'
import CardContent from '../components/card-content'
import CardTitle from '../components/card-title'
import ColorStack from '../components/color-stack'
import NumberInput from '../components/number-input'
import Radio from '../components/radio-input'
import { setGroupName, setPaletteName, setPaletteSize } from '../state/color-brewer/actions'
import { ColorBrewerContext } from '../state/color-brewer/context'
import { selectGroupName, selectPaletteName, selectPaletteSize } from '../state/color-brewer/selectors'
import { ColorBrewerGroupName } from '../types'
import { colorBrewerGroups } from '../utils/color-brewer-groups'

const ColorBrewer: FC = () => {
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
                <Card className='sm:col-span-3 md:col-span-1'>
                    <CardTitle title='nature of data' />
                    <CardContent>
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
                    </CardContent>
                </Card>

                <Card className='sm:col-span-2 md:col-span-1'>
                    <CardTitle title='number of colors' />
                    <CardContent>
                        <NumberInput
                            large
                            value={selectPaletteSize(colorBrewerState)}
                            min={0}
                            max={30}
                            step={1}
                            precision={0}
                            onChangeValue={handleChangePaletteSize}
                        />
                    </CardContent>
                </Card>
            </div>

            <Card className='md:col-span-4'>
                <CardTitle title='color scheme' />
                <CardContent>
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
                </CardContent>
            </Card>
        </div>
    )
}

export default ColorBrewer
