import React, { useReducer } from 'react'
import Footer from './components/footer'
import Header from './components/header'
import { initialState as lantanaInitialState, lantanaReducer } from './state/lantana/reducer'
import { initialState as colorBrewerInitialState, colorBrewerReducer } from './state/color-brewer/reducer'
import { initialState as globalInitialState, globalReducer } from './state/global/reducer'
import { LantanaContext } from './state/lantana/context'
import { ColorBrewerContext } from './state/color-brewer/context'
import ColorBrewer from './settings/ColorBrewer'
import Lantana from './settings/Lantana'
import { GlobalContext } from './state/global/context'
import { default as SettingsLayout } from './components/settings'
import { SettingsName } from './types'
import Palette from './components/palette'


const style = {
    root: 'max-w-screen-2xl min-h-full m-auto flex flex-col content-stretch',
    content: 'flex flex-1 items-start justify-between p-3 gap-6 sm:gap-10'
}

const App: React.FC = () => {
    const [lantanaState, lantanaDispatch] = useReducer(lantanaReducer, lantanaInitialState)
    const [colorBrewerState, colorBrewerDispatch] = useReducer(colorBrewerReducer, colorBrewerInitialState)
    const [globalState, globalDispatch] = useReducer(globalReducer, globalInitialState)

    return (
        <GlobalContext.Provider value={{ globalState: globalState, dispatch: globalDispatch }}>
            <LantanaContext.Provider value={{ lantanaState: lantanaState, dispatch: lantanaDispatch }}>
                <ColorBrewerContext.Provider value={{ colorBrewerState: colorBrewerState, dispatch: colorBrewerDispatch }}>
                    <div className={style.root}>
                        <Header />

                        <div className={style.content}>
                            <SettingsLayout>
                                {globalState.currentSettings === SettingsName.Lantana && <Lantana />}
                                {globalState.currentSettings === SettingsName.ColorBrewer && <ColorBrewer />}
                            </SettingsLayout>

                            <Palette />
                        </div>

                        <Footer />
                    </div>
                </ColorBrewerContext.Provider>
            </LantanaContext.Provider>
        </GlobalContext.Provider>
    )
}

export default App
