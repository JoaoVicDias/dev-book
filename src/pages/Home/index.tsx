import React, { useCallback, useEffect, useState } from 'react'

import StalkPeople from './components/StalkPeople'
import TopUser from './components/TopUsers'

import { onGetPopularUsers } from '../../services/api'

import { } from './styles'

import { ITopSalesItem } from '../../Types/Home'


const Home: React.FC = () => {

    const [data, setData] = useState<ITopSalesItem[]>([])

    const onFetchDataHandler = useCallback(async () => {
        try {
            const res = await onGetPopularUsers()
            setData(res.data.items)
        } catch (err) {
            console.log(err)
        }
    }, [])

    useEffect(() => { onFetchDataHandler() }, [onFetchDataHandler])

    return (
        <>
            <StalkPeople />
            <TopUser items={data} />
        </>
    )
}

export default Home