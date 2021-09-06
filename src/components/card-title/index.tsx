import clsx from 'clsx'
import { FC } from 'react'
import './card-title.css'

export interface CardTitleProps {
    className?: string
    title: string
}

const CardTitle: FC<CardTitleProps> = (props) => {
    const { title, className } = props

    return (
        <label className={clsx('card-title', className)}>
            {title}
        </label>
    )
}

export default CardTitle
