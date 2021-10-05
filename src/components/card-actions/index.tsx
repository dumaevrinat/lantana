import copy from 'copy-to-clipboard'
import { FC } from 'react'
import { useRecoilValue } from 'recoil'
import { paletteColorsCssGradient, paletteColorsString } from '../../state/global'
import Button from '../base/button'
import Card from '../base/card'
import CardContent from '../base/card-content'
import CardTitle from '../base/card-title'
import './card-actions.css'

const CardActions: FC = () => {
    const colorsString = useRecoilValue(paletteColorsString)
    const colorsCssGradient = useRecoilValue(paletteColorsCssGradient)

    const handleClickCopyJsonArray = () => {
        copy(colorsString)
    }

    const handleClickCopyCssGradient = () => {
        copy(colorsCssGradient)
    }
    
    return (
        <Card>
            <CardTitle title='copy actions' />
            <CardContent className='action-content'>
                <Button className='action-content__button' materialIconName='data_array' label='array' onClick={handleClickCopyJsonArray} />
                <Button className='action-content__button' materialIconName='gradient' label='css gradient' onClick={handleClickCopyCssGradient} />
            </CardContent>
        </Card>
    )
}

export default CardActions
