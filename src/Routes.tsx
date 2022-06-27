import React from 'react'
import { Routes as Switch, Route, Navigate } from 'react-router-dom'

import Layout from './components/Layout'

import Home from './pages/Home'
import User from './pages/User'

const Routes: React.FC = () => {
    return (
        <Switch>
            <Route element={<Layout />} >
                <Route path='/' element={<Home />} />
                <Route path='/:login' element={<User />} />
            </Route>
            <Route path='*' element={<Navigate to={'/'} replace />}/>
        </Switch>
    )
}

export default Routes