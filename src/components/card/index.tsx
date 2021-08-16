import clsx from 'clsx'
import React from 'react'

export interface CardProps {
    className?: string
    children: React.ReactNode
}

const style = {
    card: 'border-2 border-gray-100 rounded-3xl p-4 animate-fadein',
}

const Card: React.FC<CardProps> = ({ className, children }) => {
    return (
        <div className={clsx(style.card, className)}>
            {children}
        </div>
    )
}

export default Card
