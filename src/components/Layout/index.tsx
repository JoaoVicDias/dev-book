import React from 'react'
import { Outlet } from 'react-router-dom'

import Header from '../Header'
import Content from '../Content'

import { Container } from './styles'

const Layout: React.FC = () => {
    return (
        <Container>
            <Header />
            <Content>
                <Outlet />
            </Content>
        </Container>
    )
}

export default Layout