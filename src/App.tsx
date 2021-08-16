import React, { useReducer } from 'react'
import Footer from './components/footer'
import Header from './components/header'
import { initialState as lantanaInitialState, lantanaReducer } from './state/lantana/reducer'
import { initialState as cubehelixInitialState, cubehelixReducer } from './state/cubehelix/reducer'
import { initialState as colorBrewerInitialState, colorBrewerReducer } from './state/color-brewer/reducer'
import { initialState as globalInitialState, globalReducer } from './state/global/reducer'
import { LantanaContext } from './state/lantana/context'
import { ColorBrewerContext } from './state/color-brewer/context'
import { CubehelixContext } from './state/cubehelix/context'
import { GlobalContext } from './state/global/context'
import ColorBrewer from './settings/ColorBrewer'
import Lantana from './settings/Lantana'
import { SettingsName } from './types'
import Palette from './components/palette'
import Cubehelix from './settings/Cubehelix'

const style = {
    root: 'max-w-screen-xl min-h-full m-auto flex flex-col content-stretch',
    content: 'flex flex-1 flex-col p-3 gap-6',
}

const App: React.FC = () => {
    const [lantanaState, lantanaDispatch] = useReducer(lantanaReducer, lantanaInitialState)
    const [colorBrewerState, colorBrewerDispatch] = useReducer(colorBrewerReducer, colorBrewerInitialState)
    const [cubehelixState, cubehelixDispatch] = useReducer(cubehelixReducer, cubehelixInitialState)
    const [globalState, globalDispatch] = useReducer(globalReducer, globalInitialState)

    return (
        <GlobalContext.Provider value={{ globalState: globalState, dispatch: globalDispatch }}>
            <LantanaContext.Provider value={{ lantanaState: lantanaState, dispatch: lantanaDispatch }}>
                <ColorBrewerContext.Provider value={{ colorBrewerState: colorBrewerState, dispatch: colorBrewerDispatch }}>
                    <CubehelixContext.Provider value={{ cubehelixState: cubehelixState, dispatch: cubehelixDispatch }}>
                        <div className={style.root}>
                            <Header />

                            <div className={style.content}>
                                <Palette />

                                {globalState.currentSettings === SettingsName.Lantana && <Lantana />}
                                {globalState.currentSettings === SettingsName.ColorBrewer && <ColorBrewer />}
                                {globalState.currentSettings === SettingsName.Cubehelix && <Cubehelix />}
                            </div>

                            <Footer />
                        </div>
                    </CubehelixContext.Provider>
                </ColorBrewerContext.Provider>
            </LantanaContext.Provider>
        </GlobalContext.Provider>
    )
}

export default App
