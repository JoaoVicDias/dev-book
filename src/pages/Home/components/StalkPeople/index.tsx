import React from 'react'
import { VscSearch } from 'react-icons/vsc'

import InputSearch from '../../../../components/InputSearch'

import Octocat from '../../../../assets/octocat.png'

import { Container, LeftPartContainer, Text } from './styles'

const StalkPeople: React.FC = () => {

    return (
        <Container>
            <LeftPartContainer>
                <Text> Stalk people on github! </Text>
                <InputSearch
                    className='form_input_search-stalk'
                    onChangeSearchTextHandler={() => null}
                    onFetchDataHandler={() => null}
                >
                    <VscSearch />
                </InputSearch>
            </LeftPartContainer>
            <img src={Octocat} alt="Octocat" />
        </Container>
    )
}

export default StalkPeople