import clsx from 'clsx'
import { FC, ReactNode } from 'react'
import './card-content.css'

export interface CardContentProps {
    className?: string
    children?: ReactNode
}

const CardContent: FC<CardContentProps> = (props) => {
    const { children, className } = props

    return (
        <div className={clsx('card-content', className)}>
            {children}
        </div>
    )
}

export default CardContent
