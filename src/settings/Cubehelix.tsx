import { useContext } from 'react'
import { CubehelixContext } from '../state/cubehelix/context'
import { setDark, setGamma, setLight, setPaletteSize, setRotations, setStart } from '../state/cubehelix/actions'
import SettingsItem from '../components/settings-item'
import NumberInput from '../components/number-input'
import { selectDark, selectGamma, selectLight, selectPaletteSize, selectRotations, selectStart } from '../state/cubehelix/selectors'
import LargeControl from '../components/large-control'
import Card from '../components/card'

const style = {
    row: 'flex flex-col md:flex-row gap-6',
    basicSettings: 'flex flex-col gap-5 sm:gap-6 pb-6'
}

const Cubehelix: React.FC = () => {
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
        <>
            <Card className={style.basicSettings}>
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
            </Card>

            <div className={style.row}>
                <Card className='flex-1 min-w-min'>
                    <LargeControl
                        title='dark'
                        value={selectDark(cubehelixState)}
                        minValue={0}
                        maxValue={1}
                        step={0.01}
                        precision={2}
                        onChange={handleChangeDark}
                    />
                </Card>

                <Card className='flex-1 min-w-min'>
                    <LargeControl
                        title='light'
                        value={selectLight(cubehelixState)}
                        minValue={0}
                        maxValue={1}
                        step={0.01}
                        precision={2}
                        onChange={handleChangeLight}
                    />
                </Card>
            </div>

            <SettingsItem label='number of colors'>
                <NumberInput
                    value={selectPaletteSize(cubehelixState)}
                    minValue={0}
                    maxValue={30}
                    step={1}
                    precision={0}
                    onChange={handleChangePaletteSize}
                />
            </SettingsItem>
        </>
    )
}

export default Cubehelix
