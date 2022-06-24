import React from 'react'
import { Routes as Switch, Route } from 'react-router-dom'

import Layout from './components/Layout'

import Home from './pages/Home'

const Routes: React.FC = () => {
    return (
        <Switch>
            <Route element={<Layout />} >
                <Route path='/' element={<Home />} />
            </Route>
        </Switch>
    )
}

export default Routes