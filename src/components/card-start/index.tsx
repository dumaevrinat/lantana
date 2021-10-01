import clsx from 'clsx'
import { FC, useState } from 'react'
import Card from '../base/card'
import CardContent from '../base/card-content'
import './card-start.css'

const CardStart: FC = () => {
    const [isOpen, setIsOpen] = useState(true)

    const handleClick = () => {
        setIsOpen(false)
    }

    return (
        <div
            className={clsx(
                'card-start-wrapper group',
                isOpen ? 'card-start-wrapper--open' : 'card-start-wrapper--close'
            )}
        >
            <Card
                className='card-start'
                onClick={handleClick}
            >
                <CardContent className='card-start__content'>
                    <span className='card-start__content-icon material-icons material-icons-round'>
                        done
                    </span>
                    <label className='card-start__content-label'>
                        Create color&nbsp;combinations for use in data&nbsp;visualization and information&nbsp;design.
                    </label>
                </CardContent>
            </Card>
        </div>
    )
}

export default CardStart
