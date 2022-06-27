import React from 'react'

import { Container, Title } from './styles'

import { ICard } from '../../../../Types/User'
import CardList from '../CardList'

const Card: React.FC<ICard> = ({ title, images, listClassName }) => {

    return (
        <Container>
            <Title> {title} </Title>
            <CardList
                images={images}
                className={listClassName}
            />
        </Container>
    )
}

export default Card