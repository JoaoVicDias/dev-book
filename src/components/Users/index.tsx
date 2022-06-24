import React from 'react'

import TopUserList from '../UsersList'

import { Container, Title } from './styles'

import { ITopSales } from '../../Types/components/TopSales'


const TopUser: React.FC<ITopSales> = ({
    items,
    className,
    title,
    classNameItem,
    classNameList,
    itemsPerRow,
    rows
}) => (
    <Container className={className}>
        <Title> {title} </Title>
        <TopUserList 
        items={items} 
        className={classNameList} 
        classNameItem={classNameItem} 
        itemsPerRow={itemsPerRow}
        rows={rows}
        />
    </Container>
)

export default TopUser