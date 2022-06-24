import React, { useCallback, useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'

import Header from '../Header'
import Content from '../Content'
import Users from '../Users'

import useSearch from '../../context/useSearch'

import { Container } from './styles'

import { ITopSalesItem } from '../../Types/components/TopSales'
import { onGetUserByName } from '../../services/api'

const Layout: React.FC = () => {

    const { onChangeSearchTextHandler, searchText, page, onClearSearchHandler, onSetPage } = useSearch()

    const shouldSearch = page.global && searchText.global.isValid;

    const [data, setData] = useState<ITopSalesItem[]>([])
    const [searchedText, setSearchedText] = useState('')

    const onFetchDataHandler = useCallback(async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        if(!searchText.global.isValid) return

        onClearSearchHandler('home')
        onSetPage('global', true)
        setSearchedText(searchText.global.value)

        try {
            const res = await onGetUserByName(searchText.global.value)
            setData(res.data.items)
        } catch (err) {
            console.log(err)
        }
    }, [onClearSearchHandler, onSetPage, searchText.global.isValid, searchText.global.value])

    useEffect(() => {
        if (!shouldSearch) {
            setData([])
            onSetPage('global', false)
        }
    }, [onSetPage, shouldSearch])

    return (
        <Container>
            <Header
                onFetchDataHandler={onFetchDataHandler}
                onChangeSearchTextHandler={(event) => onChangeSearchTextHandler(event, 'global')}
            />
            <Content>
                {
                    shouldSearch
                        ? <Users
                            items={data}
                            title={`Results for ${searchedText}`}
                            className='search_results_container'
                            classNameList='search_results_list'
                            classNameItem='search_results_item'
                            itemsPerRow={4}
                            rows={2}
                        />
                        : <Outlet />
                }
            </Content>
        </Container>
    )
}

export default Layout