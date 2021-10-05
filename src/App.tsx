import { FC } from 'react'
import Footer from './components/footer'
import Header from './components/header'
import { SettingsName } from './types'
import Palette from './components/palette'
import { RecoilRoot, useRecoilValue } from 'recoil'
import { currentSettings } from './state/global'
import CardActions from './components/card-actions'
import Lantana from './components/settings/lantana'
import ColorBrewer from './components/settings/color-brewer'
import Cubehelix from './components/settings/cubehelix'
import CardStart from './components/card-start'

const CurrentSettings: FC = () => {
    const settings = useRecoilValue(currentSettings)

    return (
        <>
            {settings === SettingsName.Lantana && <Lantana />}
            {settings === SettingsName.ColorBrewer && <ColorBrewer />}
            {settings === SettingsName.Cubehelix && <Cubehelix />}
        </>
    )
}

const App: FC = () => {
    return (
        <RecoilRoot>

            <div className='max-w-screen-xl m-auto pt-3 sm:pt-6 flex flex-col transition-all content-stretch'>
                <CardStart />
                <Header />

                <div className='flex flex-1 flex-col gap-4 pb-4 px-3 sm:px-6'>
                    <Palette />
                    <CardActions />
                    <CurrentSettings />
                </div>

                <Footer />
            </div>
        </RecoilRoot>
    )
}

export default App
