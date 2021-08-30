import clsx from 'clsx'
import React, { FC } from 'react'

export interface CardProps {
    className?: string
    children: React.ReactNode
}

const style = {
    card: 'bg-gray-50 text-black rounded-3xl p-4 sm:p-6 animate-fadein',
}

const Card: FC<CardProps> = (props: CardProps) => {
    const { className, children } = props

    return (
        <div className={clsx(style.card, className)}>
            {children}
        </div>
    )
}

export default Card
