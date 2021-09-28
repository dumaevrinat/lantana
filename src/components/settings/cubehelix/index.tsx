import { FC } from 'react'
import NumberInput from '../../base/number-input'
import LargeControl from '../../base/large-control'
import Card from '../../base/card'
import CardContent from '../../base/card-content'
import CardTitle from '../../base/card-title'
import { useRecoilState } from 'recoil'
import { size as cubehelixSize } from '../../../state/cubehelix'
import { start as cubehelixStart } from '../../../state/cubehelix'
import { rotations as cubehelixRotations } from '../../../state/cubehelix'
import { gamma as cubehelixGamma } from '../../../state/cubehelix'
import { dark as cubehelixDark} from '../../../state/cubehelix'
import { light as cubehelixLight } from '../../../state/cubehelix'

const Cubehelix: FC = () => {
    const [size, setSize] = useRecoilState(cubehelixSize)
    const [start, setStart] = useRecoilState(cubehelixStart)
    const [rotations, setRotations] = useRecoilState(cubehelixRotations)
    const [gamma, setGamma] = useRecoilState(cubehelixGamma)
    const [dark, setDark] = useRecoilState(cubehelixDark)
    const [light, setLight] = useRecoilState(cubehelixLight)

    const handleChangePaletteSize = (size: number) => {
        setSize(size)
    }

    const handleChangeStart = (start: number) => {
        setStart(start)
    }

    const handleChangeRotations = (rotations: number) => {
        setRotations(rotations)
    }

    const handleChangeDark = (dark: number) => {
        setDark(dark)
    }

    const handleChangeLight = (light: number) => {
        setLight(light)
    }

    const handleChangeGamma = (gamma: number) => {
        setGamma(gamma)
    }

    return (
        <div className='grid md:grid-cols-2 gap-4'>
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

            <div className='grid sm:grid-cols-2 md:grid-cols-1 gap-4'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
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
                </div>

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
            </div>
        </div>
    )
}

export default Cubehelix
