import React, { useCallback, useEffect, useState } from 'react'
import axios from 'axios'

import { Container, InformationsContainer } from './styles'

import { ITopSalesItem, ITopSalesItemState } from '../../../../Types/Home'
import { Link } from 'react-router-dom'


const TopUserItem: React.FC<ITopSalesItem> = ({ avatar_url, login, url }) => {

    const [userData, setUserData] = useState<ITopSalesItemState>({ name: '' })

    const onFetchUserDataHandler = useCallback(async () => {
        try {
            const res = await axios.get(url)
            setUserData(res.data)
        } catch (err) {
            console.log(err)
        }
    }, [url])

    useEffect(() => { onFetchUserDataHandler() }, [onFetchUserDataHandler])

    return (
        <Container>
            <Link to={`/${login}`}>
                <img src={avatar_url} alt={login} />
                <InformationsContainer>
                    <h3>{userData.name}</h3>
                    <h3>@{login}</h3>
                </InformationsContainer>
            </Link>
        </Container>
    )
}

export default TopUserItem