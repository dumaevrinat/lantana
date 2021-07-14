import { ChangeEvent, useContext } from 'react'
import { setGamma, setPaletteMode, setPaletteSize } from '../state/actions'
import { AppContext } from '../state/context'
import { selectColorPickers, selectGamma, selectPaletteMode, selectPaletteSize } from '../state/selectors'
import { InterpolationMode } from 'chroma-js'
import NumberInput from './NumberInput'

const Settings: React.FC = () => {
    const { state, dispatch } = useContext(AppContext)

    const modes: Array<InterpolationMode> = ['rgb', 'lrgb', 'hsl', 'hsi', 'lab', 'lch']

    const handleChangePaletteSize = (size: number) => {
        dispatch(setPaletteSize(size))
    }

    const handleChangePaletteMode = (e: ChangeEvent<HTMLInputElement>) => {
        const mode = e.target.value

        dispatch(setPaletteMode(mode as InterpolationMode))
    }

    const handleChangeGamma = (gamma: number) => {
        dispatch(setGamma(gamma))
    } 

    return (
        <div className='flex flex-col gap-4 mb-12'>
            <div className='flex flex-wrap items-center gap-4'>
                <label>
                    interpolation mode
                </label>
                <div className='flex flex-wrap gap-2'>
                    {modes.map(mode =>
                        <div key={mode} className='flex'>
                            <input
                                id={mode}
                                type='radio'
                                value={mode}
                                checked={selectPaletteMode(state) === mode}
                                onChange={handleChangePaletteMode}
                            />
                            <label htmlFor={mode}>{mode}</label>
                        </div>)
                    }
                </div>
            </div>
            <div className='flex gap-4'>
                <label>
                    number of colors
                </label>
                <NumberInput
                    value={selectPaletteSize(state)}
                    minValue={selectColorPickers(state).length}
                    maxValue={20}
                    step={1}
                    precision={0}
                    onChange={handleChangePaletteSize}
                />
            </div>
            <div className='flex gap-4'>
                <label>
                    center shift
                </label>
                <NumberInput
                    value={selectGamma(state)}
                    minValue={0}
                    maxValue={5}
                    step={0.1}
                    precision={1}
                    onChange={handleChangeGamma}
                />
            </div>
        </div>
    )
}

export default Settings