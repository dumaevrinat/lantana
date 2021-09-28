import { ChangeEvent, FC } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { paletteNameColors } from '../../../state/color-brewer'
import { colorBrewerGroups } from '../../../utils/color-brewer-groups'
import Card from '../../base/card'
import CardContent from '../../base/card-content'
import CardTitle from '../../base/card-title'
import ColorStack from '../../base/color-stack'
import Radio from '../../base/radio-input'
import { groupName as colorBrewerGroupName } from '../../../state/color-brewer'
import { paletteName as colorBrewerPaletteName } from '../../../state/color-brewer'
import { ColorBrewerPaletteName } from '../../../types'

const CardPaletteName: FC = () => {
    const groupName = useRecoilValue(colorBrewerGroupName)

    const [paletteName, setPaletteName] = useRecoilState(colorBrewerPaletteName)

    const handleChangePaletteName = (e: ChangeEvent<HTMLInputElement>) => {
        const paletteName = e.target.value

        setPaletteName(paletteName as ColorBrewerPaletteName)
    }

    return (
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
    )
}

export default CardPaletteName
