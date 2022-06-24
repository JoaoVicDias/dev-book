import React, { useCallback, useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { toast } from 'react-toastify'

import Header from '../Header'
import Content from '../Content'
import Users from '../Users'

import useSearch from '../../context/useSearch'

import { onGetUserByName } from '../../services/api'

import { Container } from './styles'

import { IUsersItem } from '../../Types/components/Users'

const Layout: React.FC = () => {

    const { onChangeSearchTextHandler, searchText, page, onClearSearchHandler, onSetPage } = useSearch()

    const shouldSearch = page.global && searchText.global.isValid;

    const [data, setData] = useState<IUsersItem[]>([])
    const [searchedText, setSearchedText] = useState('')
    const [loading, setLoading] = useState(true)
    const [searchWasUsed, setsearchWasUsed] = useState(false)

    const onFetchDataHandler = useCallback(async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        if (!searchText.global.isValid) return

        onClearSearchHandler('home')
        onSetPage('global', true)
        setSearchedText(searchText.global.value)
        setsearchWasUsed(true)
        setLoading(true)

        try {
            const res = await onGetUserByName(searchText.global.value)
            setData(res.data.items)
        } catch (err) {
            toast.error('Something went wrong, please try again!')
        }
        setLoading(false)
    }, [onClearSearchHandler, onSetPage, searchText.global.isValid, searchText.global.value])

    useEffect(() => {
        if (!shouldSearch && searchWasUsed) {
            setData([])
            onSetPage('global', false)
        }
    }, [onSetPage, searchWasUsed, shouldSearch])

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
                            loading={loading}
                        />
                        : <Outlet />
                }
            </Content>
        </Container>
    )
}

export default Layout