import React from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Lantana from './pages/Lantana'
import ColorBrewer from './pages/ColorBrewer'


const App: React.FC = () => {

    return (
        <Router>
            <Header
                title='lantana'
                subtitle='tool for creating color palettes'
            />

            <div className='flex flex-col p-4 mx-auto max-w-7xl gap-6'>
                <Switch>
                    <Route path='/' exact component={Lantana} />
                    <Route path='/colorbrewer' exact component={ColorBrewer} />
                    <Redirect from='/*' to='/' />
                </Switch>
            </div>

            <Footer />
        </Router>
    )
}

export default App
