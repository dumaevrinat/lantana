import clsx from 'clsx'
import React, { FC, HTMLAttributes } from 'react'
import './card.css'

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string
    children: React.ReactNode
}

const Card: FC<CardProps> = (props: CardProps) => {
    const { className, children, ...restProps } = props

    return (
        <div
            {...restProps}
            className={clsx('card', className)}
        >
            {children}
        </div>
    )
}

export default Card
