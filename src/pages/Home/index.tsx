import React, { useCallback, useEffect, useState } from 'react'

import StalkPeople from './components/StalkPeople'
import TopUser from '../../components/Users'

import { onGetPopularUsers } from '../../services/api'

import { } from './styles'

import { IUsersItem } from '../../Types/components/Users'


const Home: React.FC = () => {

    const [data, setData] = useState<IUsersItem[]>([])

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
            <TopUser
                items={data}
                title="Top sales"
            />
        </>
    )
}

export default Home