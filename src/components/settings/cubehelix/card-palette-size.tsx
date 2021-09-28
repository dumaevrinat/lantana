import { FC } from 'react'
import { useRecoilState } from 'recoil'
import Card from '../../base/card'
import CardContent from '../../base/card-content'
import CardTitle from '../../base/card-title'
import NumberInput from '../../base/number-input'
import { size as cubehelixSize } from '../../../state/cubehelix'

const CardPaletteSize: FC = () => {
    const [size, setSize] = useRecoilState(cubehelixSize)

    const handleChangePaletteSize = (size: number) => {
        setSize(size)
    }

    return (
        <Card>
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
