import React from 'react'
import HomeScreen from './Screen/HomeScreen'
import styled from 'styled-components'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
    const Div = styled.div``
    return (
        <Router>
            <Switch>
                <Route>
                    <Div>
                        <HomeScreen />
                    </Div>
                </Route>
            </Switch>
        </Router>
    )
}

export default App
