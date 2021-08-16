import { useContext } from 'react'
import { CubehelixContext } from '../state/cubehelix/context'
import { setDark, setGamma, setLight, setPaletteSize, setRotations, setStart } from '../state/cubehelix/actions'
import SettingsItem from '../components/settings-item'
import NumberInput from '../components/number-input'
import { selectDark, selectGamma, selectLight, selectPaletteSize, selectRotations, selectStart } from '../state/cubehelix/selectors'
import LargeControl from '../components/large-control'

const style = {
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
        <div className='grid sm:grid-cols-2 gap-4'>
            <SettingsItem className={{content: style.basicSettings}}>
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
            </SettingsItem>

            <div className='grid gap-4'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <SettingsItem>
                        <LargeControl
                            title='dark'
                            value={selectDark(cubehelixState)}
                            minValue={0}
                            maxValue={1}
                            step={0.01}
                            precision={2}
                            onChange={handleChangeDark}
                        />
                    </SettingsItem>

                    <SettingsItem>
                        <LargeControl
                            title='light'
                            value={selectLight(cubehelixState)}
                            minValue={0}
                            maxValue={1}
                            step={0.01}
                            precision={2}
                            onChange={handleChangeLight}
                        />
                    </SettingsItem>
                </div>

                <SettingsItem label='number of colors'>
                    <NumberInput
                        className={{ input: 'text-3xl' }}
                        value={selectPaletteSize(cubehelixState)}
                        minValue={0}
                        maxValue={30}
                        step={1}
                        precision={0}
                        onChange={handleChangePaletteSize}
                    />
                </SettingsItem>
            </div>
        </div>
    )
}

export default Cubehelix
