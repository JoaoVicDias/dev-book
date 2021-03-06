import React, { useCallback, useEffect, useState } from 'react'
import axios from 'axios'

import { Container, InformationsContainer } from './styles'

import { IUsersItem, IUsersItemState } from '../../Types/components/Users'
import { Link } from 'react-router-dom'


const TopUserItem: React.FC<IUsersItem> = ({ avatar_url, login, url, className, onClickItem }) => {

    const [userData, setUserData] = useState<IUsersItemState>({ name: '', bio: '' })

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
            <Link to={`/${login}`} onClick={onClickItem}>
                <img src={avatar_url} alt={login} />
                <InformationsContainer>
                    <h3>{userData.name}</h3>
                    <p>@{login}</p>
                    <p>{userData.bio}</p>
                </InformationsContainer>
            </Link>
        </Container>
    )
}

export default TopUserItem