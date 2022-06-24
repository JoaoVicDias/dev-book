import React, { useCallback, useEffect, useState } from 'react'

import StalkPeople from './components/StalkPeople'
import TopUser from '../../components/Users'

import { onGetPopularUsers, onGetUserByName } from '../../services/api'

import { } from './styles'

import { IUsersItem } from '../../Types/components/Users'
import useSearch from '../../context/useSearch'


const Home: React.FC = () => {

    const { searchText, onChangeSearchTextHandler, onClearSearchHandler, onSetPage, page } = useSearch()

    const shouldSearch = searchText.home.isValid && page.home

    const [data, setData] = useState<IUsersItem[]>([])
    const [searchedtext, setSearchedText] = useState('')

    const onFetchDataHandler = useCallback(async () => {
        try {
            const res = await onGetPopularUsers()
            setData(res.data.items)
        } catch (err) {
            console.log(err)
        }
    }, [])

    const onSearchDataHandler = useCallback(async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (!searchText.home.isValid) return null

        onClearSearchHandler('global')
        onSetPage('home', true)
        setSearchedText(searchText.home.value)

        try {
            const res = await onGetUserByName(searchText.home.value)
            setData(res.data.items)
        } catch (err) {

        }
    }, [onClearSearchHandler, onSetPage, searchText.home.isValid, searchText.home.value])

    useEffect(() => { onFetchDataHandler() }, [onFetchDataHandler])

    useEffect(() => {
        if (!shouldSearch) {
            onFetchDataHandler()
            onSetPage('home', false)
            setSearchedText('')
        }
    }, [onFetchDataHandler, onSetPage, shouldSearch])

    return (
        <>
            <StalkPeople
                onChangeSearchTextHandler={(event) => onChangeSearchTextHandler(event, 'home')}
                onFetchDataHandler={onSearchDataHandler}
            />
            <TopUser
                items={data}
                title={searchedtext || 'Top users'}
            />
        </>
    )
}

export default Home