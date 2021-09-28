import { InterpolationMode } from 'chroma-js'
import { ChangeEvent, FC } from 'react'
import { useRecoilState } from 'recoil'
import { mode as lantanaMode } from '../../../state/lantana'
import Card from '../../base/card'
import CardContent from '../../base/card-content'
import CardTitle from '../../base/card-title'
import Radio from '../../base/radio-input'

const CardMode: FC = () => {
    const availableModes: Array<InterpolationMode> = ['rgb', 'lrgb', 'hsl', 'hcl', 'hsi', 'lab', 'lch']
    const [mode, setMode] = useRecoilState(lantanaMode)

    const handleChangeMode = (e: ChangeEvent<HTMLInputElement>) => {
        const mode = e.target.value

        setMode(mode as InterpolationMode)
    }

    return (
        <Card>
            <CardTitle title='interpolation mode' />
            <CardContent>
                {availableModes.map(availableMode =>
                    <Radio
                        key={availableMode}
                        id={availableMode}
                        value={availableMode}
                        checked={availableMode === mode}
                        onChange={handleChangeMode}
                    >
                        {availableMode}
                    </Radio>
                )}
            </CardContent>
        </Card>
    )
}

export default CardMode
