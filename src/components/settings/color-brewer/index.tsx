import { ChangeEvent, FC } from 'react'
import { useRecoilState } from 'recoil'
import Card from '../../base/card'
import CardContent from '../../base/card-content'
import CardTitle from '../../base/card-title'
import ColorStack from '../../base/color-stack'
import NumberInput from '../../base/number-input'
import Radio from '../../base/radio-input'
import { ColorBrewerGroupName, ColorBrewerPaletteName } from '../../../types'
import { colorBrewerGroups } from '../../../utils/color-brewer-groups'
import { paletteNameColors, size as colorBrewerSize} from '../../../state/color-brewer'
import { groupName as colorBrewerGroupName} from '../../../state/color-brewer'
import { paletteName as colorBrewerPaletteName} from '../../../state/color-brewer'

const ColorBrewer: FC = () => {
    const [size, setSize] = useRecoilState(colorBrewerSize)
    const [groupName, setGroupName] = useRecoilState(colorBrewerGroupName)
    const [paletteName, setPaletteName] = useRecoilState(colorBrewerPaletteName)

    const availableGroupNames: Array<ColorBrewerGroupName> = ['sequential', 'diverging', 'qualitative']

    const handleChangePaletteSize = (size: number) => {
        setSize(size)
    }

    const handleChangeGroupName = (e: ChangeEvent<HTMLInputElement>) => {
        const groupName = e.target.value

        setGroupName(groupName as ColorBrewerGroupName)
    }


    const handleChangePaletteName = (e: ChangeEvent<HTMLInputElement>) => {
        const paletteName = e.target.value

        setPaletteName(paletteName as ColorBrewerPaletteName)
    }

    return (
        <div className='grid md:grid-cols-7 gap-4'>
            <div className='grid sm:grid-cols-5 md:grid-cols-1 md:col-span-3 gap-4'>
                <Card className='sm:col-span-3 md:col-span-1'>
                    <CardTitle title='nature of data' />
                    <CardContent>
                        {availableGroupNames.map(availableGroupName =>
                            <Radio
                                key={availableGroupName}
                                id={availableGroupName}
                                value={availableGroupName}
                                checked={availableGroupName === groupName}
                                onChange={handleChangeGroupName}
                            >
                                {availableGroupName}
                            </Radio>
                        )}
                    </CardContent>
                </Card>

                <Card className='sm:col-span-2 md:col-span-1'>
                    <CardTitle title='number of colors' />
                    <CardContent>
                        <NumberInput
                            large
                            value={size}
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
                    {colorBrewerGroups[groupName].map(availablePaletteName =>
                        <Radio
                            key={availablePaletteName}
                            id={availablePaletteName}
                            value={availablePaletteName}
                            checked={availablePaletteName === paletteName}
                            onChange={handleChangePaletteName}
                        >
                            <ColorStack colors={paletteNameColors(5, availablePaletteName)} />
                        </Radio>
                    )}
                </CardContent>
            </Card>
        </div>
    )
}

export default ColorBrewer
