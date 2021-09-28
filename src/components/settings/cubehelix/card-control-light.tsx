import { FC } from 'react'
import { useRecoilState } from 'recoil'
import Card from '../../base/card'
import CardContent from '../../base/card-content'
import LargeControl from '../../base/large-control'
import { light as cubehelixLight } from '../../../state/cubehelix'

const CardControlLight: FC = () => {
    const [light, setLight] = useRecoilState(cubehelixLight)

    const handleChangeLight = (light: number) => {
        setLight(light)
    }

    return (
        <Card>
            <CardContent>
                <LargeControl
                    title='light'
                    value={light}
                    minValue={0}
                    maxValue={1}
                    step={0.01}
                    precision={2}
                    onChange={handleChangeLight}
                />
            </CardContent>
        </Card>
    )
}

export default CardControlLight
