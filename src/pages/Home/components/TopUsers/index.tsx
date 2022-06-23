import React from 'react'

import TopUserList from '../TopUsersList'

import { Container, Title } from './styles'

import { ITopSales } from '../../../../Types/Home'


const TopUser: React.FC<ITopSales> = ({ items }) => (
    <Container>
        <Title> Top users </Title>
        <TopUserList items={items} />
    </Container>
)

export default TopUser