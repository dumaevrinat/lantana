import { FC } from 'react'
import { useRecoilState } from 'recoil'
import { size as colorBrewerSize} from '../../../state/color-brewer'
import Card from '../../base/card'
import CardContent from '../../base/card-content'
import CardTitle from '../../base/card-title'
import NumberInput from '../../base/number-input'

const CardPaletteSize: FC = () => {
    const [size, setSize] = useRecoilState(colorBrewerSize)

    const handleChangePaletteSize = (size: number) => {
        setSize(size)
    }

    return (
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
    )
}

export default CardPaletteSize
