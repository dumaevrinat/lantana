import { FC, useContext, useState } from 'react'
import { CubehelixContext } from '../state/cubehelix/context'
import { setDark, setGamma, setLight, setPaletteSize, setRotations, setStart } from '../state/cubehelix/actions'
import NumberInput from '../components/number-input'
import { selectDark, selectGamma, selectLight, selectPaletteSize, selectRotations, selectStart } from '../state/cubehelix/selectors'
import LargeControl from '../components/large-control'
import Card from '../components/card'
import CardContent from '../components/card-content'
import CardTitle from '../components/card-title'

const style = {
    basicSettings: 'flex-col content-stretch gap-4 sm:gap-5'
}

const Cubehelix: FC = () => {
    const { cubehelixState, dispatch } = useContext(CubehelixContext)

    const handleChangePaletteSize = (size: number) => {
        dispatch(setPaletteSize(size))
    }

    const handleChangeStart = (start: number) => {
        dispatch(setStart(start))
    }

    const handleChangeRotations = (rotations: number) => {
        dispatch(setRotations(rotations))
    }

    const handleChangeDark = (dark: number) => {
        dispatch(setDark(dark))
    }

    const handleChangeLight = (light: number) => {
        dispatch(setLight(light))
    }

    const handleChangeGamma = (gamma: number) => {
        dispatch(setGamma(gamma))
    }

    return (
        <div className='grid md:grid-cols-2 gap-4'>
            <Card>
                <CardContent className={style.basicSettings}>
                    <LargeControl
                        title='start'
                        value={selectStart(cubehelixState)}
                        minValue={0}
                        maxValue={360}
                        step={1}
                        precision={0}
                        onChange={handleChangeStart}
                    />

                    <LargeControl
                        title='rotations'
                        value={selectRotations(cubehelixState)}
                        minValue={-2}
                        maxValue={2}
                        step={0.01}
                        precision={2}
                        onChange={handleChangeRotations}
                    />

                    <LargeControl
                        title='gamma'
                        value={selectGamma(cubehelixState)}
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
                                value={selectDark(cubehelixState)}
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
                                value={selectLight(cubehelixState)}
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
                            value={selectPaletteSize(cubehelixState)}
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
