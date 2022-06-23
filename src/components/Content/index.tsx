import React from 'react'

import { Container } from './styles'

import { IContent } from '../../Types/components/Layout'

const Content: React.FC<IContent> = ({ children }) => {
    return (
        <Container>
           {children}
        </Container>
    )
}

export default Content