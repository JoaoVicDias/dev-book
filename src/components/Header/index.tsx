import React from 'react'
import { Link } from 'react-router-dom'

import InputSearch from '../InputSearch'

import { Container, Logo } from './styles'

import { IHeader } from '../../Types/components/Layout'

const Header: React.FC<IHeader> = ({ onChangeSearchTextHandler, onFetchDataHandler }) => (
    <Container>
        <Logo>
            <Link to='/'>
                <span>dev</span>
                BOOK
            </Link>
        </Logo>

        <InputSearch
            className='form__input_search-header'
            onChangeSearchTextHandler={onChangeSearchTextHandler}
            onFetchDataHandler={onFetchDataHandler}
        />

        <div></div>

    </Container>
)

export default Header