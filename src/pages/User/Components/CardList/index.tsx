import React from 'react'

import { Container } from './styles'

import { ICardList } from '../../../../Types/User'

const CardList: React.FC<ICardList> = ({ images, className }) => {

    return (
        <Container className={className}>
            {
                images.map(image => (
                    <li key={image.src}>
                        <a href={image.href} target='_blank' rel="noreferrer">
                            <img src={image.src} alt={image.src} />
                        </a>
                    </li>
                ))
            }
        </Container>
    )
}

export default CardList