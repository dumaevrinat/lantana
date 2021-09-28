import { FC } from 'react'
import { useRecoilState } from 'recoil'
import Card from '../../base/card'
import CardContent from '../../base/card-content'
import CardTitle from '../../base/card-title'
import NumberInput from '../../base/number-input'
import { gamma as lantanaGamma } from '../../../state/lantana'

const CardGamma: FC = () => {
    const [gamma, setGamma] = useRecoilState(lantanaGamma)

    const handleChangeGamma = (gamma: number) => {
        setGamma(gamma)
    }

    return (
        <Card>
            <CardTitle title='center shift' />
            <CardContent>
                <NumberInput
                    large
                    value={gamma}
                    min={0}
                    max={5}
                    step={0.1}
                    precision={1}
                    onChangeValue={handleChangeGamma}
                />
            </CardContent>
        </Card>
    )
}

export default CardGamma
