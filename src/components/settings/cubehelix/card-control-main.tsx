import { FC } from 'react'
import { useRecoilState } from 'recoil'
import Card from '../../base/card'
import CardContent from '../../base/card-content'
import LargeControl from '../../base/large-control'
import { start as cubehelixStart } from '../../../state/cubehelix'
import { rotations as cubehelixRotations } from '../../../state/cubehelix'
import { gamma as cubehelixGamma } from '../../../state/cubehelix'

const CardControlMain: FC = () => {
    const [start, setStart] = useRecoilState(cubehelixStart)
    const [rotations, setRotations] = useRecoilState(cubehelixRotations)
    const [gamma, setGamma] = useRecoilState(cubehelixGamma)

    const handleChangeStart = (start: number) => {
        setStart(start)
    }

    const handleChangeRotations = (rotations: number) => {
        setRotations(rotations)
    }

    const handleChangeGamma = (gamma: number) => {
        setGamma(gamma)
    }

    return (
        <Card>
            <CardContent className='flex-col content-stretch gap-4 sm:gap-5'>
                <LargeControl
                    title='start'
                    value={start}
                    minValue={0}
                    maxValue={360}
                    step={1}
                    precision={0}
                    onChange={handleChangeStart}
                />

                <LargeControl
                    title='rotations'
                    value={rotations}
                    minValue={-2}
                    maxValue={2}
                    step={0.01}
                    precision={2}
                    onChange={handleChangeRotations}
                />

                <LargeControl
                    title='gamma'
                    value={gamma}
                    minValue={0}
                    maxValue={1}
                    step={0.01}
                    precision={2}
                    onChange={handleChangeGamma}
                />
            </CardContent>
        </Card>
    )
}

export default CardControlMain
