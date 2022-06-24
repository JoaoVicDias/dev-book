import React from 'react'
import { VscSearch } from 'react-icons/vsc'

import InputSearch from '../../../../components/InputSearch'

import Octocat from '../../../../assets/octocat.png'

import { Container, LeftPartContainer, Text } from './styles'

import { IStalkPeople } from '../../../../Types/Home'

const StalkPeople: React.FC<IStalkPeople> = ({ onChangeSearchTextHandler, onFetchDataHandler }) => {
    return (
        <Container>
            <LeftPartContainer>
                <Text> Stalk people on github! </Text>
                <InputSearch
                    className='form_input_search-stalk'
                    onChangeSearchTextHandler={onChangeSearchTextHandler}
                    onFetchDataHandler={onFetchDataHandler}
                >
                    <VscSearch />
                </InputSearch>
            </LeftPartContainer>
            <img src={Octocat} alt="Octocat" />
        </Container>
    )
}

export default StalkPeople