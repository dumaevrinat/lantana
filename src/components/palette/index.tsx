import clsx from 'clsx'
import { FC } from 'react'
import { useRecoilValue } from 'recoil'
import { useInView } from '../../hooks/use-in-view'
import { paletteColors } from '../../state/global'
import PaletteColor from '../palette-color'
import './palette.css'

const Palette: FC = () => {
    const colors = useRecoilValue(paletteColors)

    const [triggerRef, isVisibleTrigger] = useInView<HTMLDivElement>({
        threshold: 1.0
    })

    return (
        <>
            <div ref={triggerRef} />
            <div className={clsx('palette', !isVisibleTrigger && 'palette--sticky')}>
                {colors.map((color, index) =>
                    <PaletteColor
                        key={index}
                        color={color}
                    />
                )}
            </div>
        </>
    )
}

export default Palette
