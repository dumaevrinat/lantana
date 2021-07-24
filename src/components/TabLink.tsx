import clsx from 'clsx'
import React from 'react'
import { NavLink, useRouteMatch } from 'react-router-dom'

export interface TabLinkProps {
    description?: string
    to: string
    activeOnlyWhenExact: boolean
    className?: string
    children: React.ReactNode
}

const style = {
    tabLink: 'flex flex-col items-center transition-all',
    navLink: 'a-tablink select-none flex flex-nowrap items-center justify-center min-w-max text-3xl sm:text-4xl',
    navLinkActive: 'border-black hover:border-black active:border-black',
    description: 'text-base text-center cursor-default',

}

const TabLink: React.FC<TabLinkProps> = ({ description, to, activeOnlyWhenExact, className, children }) => {
    const match = useRouteMatch({
        path: to,
        exact: activeOnlyWhenExact
    })

    return (
        <div className={clsx(style.tabLink, className)}>
            <NavLink
                exact
                to={to}
                className={style.navLink}
                activeClassName={style.navLinkActive}
            >
                {children}
            </NavLink>

            {description &&
                <span className={clsx(style.description, !match && 'opacity-0')}>
                    {description}
                </span>
            }
        </div>
    )
}

export default TabLink
