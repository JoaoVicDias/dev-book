import React, { useCallback, useEffect, useState } from 'react'

import StalkPeople from './components/StalkPeople'
import Users from '../../components/Users'

import { onGetPopularUsers, onGetUserByName } from '../../services/api'

import { IUsersItem } from '../../Types/components/Users'
import useSearch from '../../context/useSearch'


const Home: React.FC = () => {

    const { searchText, onChangeSearchTextHandler, onClearSearchHandler, onSetPage, page } = useSearch()

    const shouldSearch = searchText.home.isValid && page.home

    const [data, setData] = useState<IUsersItem[]>([])
    const [searchedtext, setSearchedText] = useState('')
    const [loading, setLoading] = useState(true)

    const onFetchDataHandler = useCallback(async () => {
        setLoading(true)
        try {
            const res = await onGetPopularUsers()
            setData(res.data.items)
        } catch (err) {
            console.log(err)
        }
        setLoading(false)
    }, [])

    const onSearchDataHandler = useCallback(async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (!searchText.home.isValid) return null

        onClearSearchHandler('global')
        onSetPage('home', true)
        setSearchedText(searchText.home.value)
        setLoading(true)

        try {
            const res = await onGetUserByName(searchText.home.value)
            setData(res.data.items)
        } catch (err) {

        }

        setLoading(false)
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
            <Users
                items={data}
                title={searchedtext || 'Top users'}
                loading={loading}
            />
        </>
    )
}

export default Home