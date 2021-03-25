import React from 'react'
import HomeScreen from './Screens/HomeScreen'
import { BrowserRouter, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import NewsScreen from './Screens/NewsScreen'
import NavBar from './Components/NavBar'
import Footer from './Components/Footer'

const App = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <main>
                <Route path='/news/:id' component={NewsScreen}></Route>
                <Route path='/' exact component={HomeScreen}></Route>
            </main>
            <Footer />
        </BrowserRouter>
    )
}

export default App
