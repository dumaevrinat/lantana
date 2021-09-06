import clsx from 'clsx'
import React, { FC } from 'react'
import './card.css'

export interface CardProps {
    className?: string
    children: React.ReactNode
}

const Card: FC<CardProps> = (props: CardProps) => {
    const { className, children } = props

    return (
        <div className={clsx('card', className)}>
            {children}
        </div>
    )
}

export default Card
