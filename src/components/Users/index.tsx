import React from 'react'

import TopUserList from '../UsersList'

import { Container, Title } from './styles'

import { IUsers } from '../../Types/components/Users'


const TopUser: React.FC<IUsers> = ({
    items,
    className,
    title,
    classNameItem,
    classNameList,
    itemsPerRow,
    rows,
    loading
}) => (
    <Container className={className}>
        <Title> {title} </Title>
        <TopUserList
            items={items}
            className={classNameList}
            classNameItem={classNameItem}
            itemsPerRow={itemsPerRow}
            rows={rows}
            loading={loading}
        />
    </Container>
)

export default TopUser