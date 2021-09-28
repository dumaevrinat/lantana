import { ChangeEvent, FC } from 'react'
import { useRecoilState } from 'recoil'
import Card from '../../base/card'
import CardContent from '../../base/card-content'
import CardTitle from '../../base/card-title'
import { groupName as colorBrewerGroupName } from '../../../state/color-brewer'
import { ColorBrewerGroupName } from '../../../types'
import Radio from '../../base/radio-input'

const CardGroupName: FC = () => {
    const [groupName, setGroupName] = useRecoilState(colorBrewerGroupName)

    const availableGroupNames: Array<ColorBrewerGroupName> = ['sequential', 'diverging', 'qualitative']

    const handleChangeGroupName = (e: ChangeEvent<HTMLInputElement>) => {
        const groupName = e.target.value

        setGroupName(groupName as ColorBrewerGroupName)
    }

    return (
        <Card className='sm:col-span-3 md:col-span-1'>
            <CardTitle title='nature of data' />
            <CardContent>
                {availableGroupNames.map(availableGroupName =>
                    <Radio
                        key={availableGroupName}
                        id={availableGroupName}
                        value={availableGroupName}
                        checked={availableGroupName === groupName}
                        onChange={handleChangeGroupName}
                    >
                        {availableGroupName}
                    </Radio>
                )}
            </CardContent>
        </Card>
    )
}

export default CardGroupName
