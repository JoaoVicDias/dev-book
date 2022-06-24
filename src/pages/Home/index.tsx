import React, { useCallback, useEffect, useState } from 'react'
import { toast } from 'react-toastify'

import StalkPeople from './components/StalkPeople'
import Users from '../../components/Users'

import { onGetPopularUsers, onGetUserByName } from '../../services/api'

import { IUsersItem } from '../../Types/components/Users'
import useSearch from '../../context/useSearch'


const Home: React.FC = () => {
    const { searchText, onChangeSearchTextHandler, onClearSearchHandler, onSetPage, page } = useSearch()

    const shouldSearch = searchText.home.isValid && page.home

    const [data, setData] = useState<IUsersItem[]>([])
    const [searchedData, setSearchedData] = useState<IUsersItem[]>([])
    const [searchedtext, setSearchedText] = useState('')
    const [loading, setLoading] = useState(true)
    const [searchWasUsed, setsearchWasUsed] = useState(false)

    const onFetchDataHandler = useCallback(async () => {
        setLoading(true)
        try {
            const res = await onGetPopularUsers()
            setData(res.data.items)
        } catch (err) {
            toast.error('Something went wrong, please try again!')
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
        setsearchWasUsed(true)

        try {
            const res = await onGetUserByName(searchText.home.value)
            setSearchedData(res.data.items)
        } catch (err) {
            toast.error('Something went wrong, please try again!')
        }

        setLoading(false)
    }, [onClearSearchHandler, onSetPage, searchText.home.isValid, searchText.home.value])

    useEffect(() => {
        onFetchDataHandler()
    }, [onFetchDataHandler])

    useEffect(() => {
        if (!shouldSearch && searchWasUsed) {
            onSetPage('home', false)
            setSearchedText('')
        }
    }, [onFetchDataHandler, onSetPage, searchWasUsed, shouldSearch])

    return (
        <>
            <StalkPeople
                onChangeSearchTextHandler={(event) => onChangeSearchTextHandler(event, 'home')}
                onFetchDataHandler={onSearchDataHandler}
            />
            <Users
                items={page.home ? searchedData : data}
                title={searchedtext || 'Top users'}
                loading={loading}
            />
        </>
    )
}

export default Home