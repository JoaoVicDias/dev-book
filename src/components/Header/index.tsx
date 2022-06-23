import React from 'react'
import { Link } from 'react-router-dom'

import InputSearch from '../InputSearch'

import { Container, Logo } from './styles'

const Header: React.FC = () => {

    return (
        <Container>
            <Logo>
                <Link to='/'>
                    <span>dev</span>
                    BOOK
                </Link>
            </Logo>

            <InputSearch className='form__input_search-header'/>

            <div></div>

        </Container>
    )
}

export default Header