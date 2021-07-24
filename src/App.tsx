import React, { useEffect, useReducer } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { initialState as lantanaInitialState, lantanaReducer } from './state/lantana/reducer'
import { initialState as colorBrewerInitialState, colorBrewerReducer } from './state/color-brewer/reducer'
import { LantanaContext } from './state/lantana/context'
import { ColorBrewerContext } from './state/color-brewer/context'
import ColorBrewer from './pages/ColorBrewer'
import Lantana from './pages/Lantana'

const style = {
    root: 'max-w-screen-2xl sm:min-h-screen m-auto flex flex-col content-stretch',
    content: 'flex flex-1 items-start justify-between p-4 gap-6 sm:gap-10'
}

const App: React.FC = () => {
    const [lantanaState, lantanaDispatch] = useReducer(lantanaReducer, lantanaInitialState)
    const [colorBrewerState, colorBrewerDispatch] = useReducer(colorBrewerReducer, colorBrewerInitialState)

    return (
        <LantanaContext.Provider value={{ lantanaState: lantanaState, dispatch: lantanaDispatch }}>
            <ColorBrewerContext.Provider value={{ colorBrewerState: colorBrewerState, dispatch: colorBrewerDispatch }}>
                <Router>
                    <div className={style.root}>
                        <Header />

                        <div className={style.content}>
                            <Switch>
                                <Route path='/' exact component={Lantana} />
                                <Route path='/colorbrewer' exact component={ColorBrewer} />
                                <Redirect from='/*' to='/' />
                            </Switch>
                        </div>

                        <Footer />
                    </div>
                </Router>
            </ColorBrewerContext.Provider>
        </LantanaContext.Provider>
    )
}

export default App
