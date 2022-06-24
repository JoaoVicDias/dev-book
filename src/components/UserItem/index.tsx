import React, { useCallback, useEffect, useState } from 'react'
import axios from 'axios'

import { Container, InformationsContainer } from './styles'

import { ITopSalesItem, ITopSalesItemState } from '../../Types/components/TopSales'
import { Link } from 'react-router-dom'


const TopUserItem: React.FC<ITopSalesItem> = ({ avatar_url, login, url, className }) => {

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
        <Container className={className}>
            <Link to={`/${login}`}>
                <img src={avatar_url} alt={login} />
                <InformationsContainer>
                    <h3>{userData.name}</h3>
                    <p>@{login}</p>
                </InformationsContainer>
            </Link>
        </Container>
    )
}

export default TopUserItem