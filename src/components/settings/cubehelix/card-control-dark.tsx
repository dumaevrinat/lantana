import { FC } from 'react'
import { useRecoilState } from 'recoil'
import Card from '../../base/card'
import CardContent from '../../base/card-content'
import LargeControl from '../../base/large-control'
import { dark as cubehelixDark } from '../../../state/cubehelix'

const CardControlDark: FC = () => {
    const [dark, setDark] = useRecoilState(cubehelixDark)

    const handleChangeDark = (dark: number) => {
        setDark(dark)
    }

    return (
        <Card>
            <CardContent>
                <LargeControl
                    title='dark'
                    value={dark}
                    minValue={0}
                    maxValue={1}
                    step={0.01}
                    precision={2}
                    onChange={handleChangeDark}
                />
            </CardContent>
        </Card>
    )
}

export default CardControlDark
