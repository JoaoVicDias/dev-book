import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

import Card from './Components/Card'

import {
    onGetUserReposByName,
    onGetUserByName,
    onGetUserStatus,
    onGetUserTopLanguages,
    onGetUserRepo
} from '../../services/api'

import { Container, Title, LoadingText } from './styles'

import { IUserInformationsState } from '../../Types/User'

const User: React.FC = () => {

    const { login } = useParams()

    const [userInformation, setUserInformations] = useState<IUserInformationsState>({
        name: '',
        repos: []
    })
    const [loading, setLoading] = useState(true)

    const cardImagesInformations = useMemo(() => ({
        firstCard: {
            images: [
                {
                    src: onGetUserStatus(login || '')
                },
                {
                    src: onGetUserTopLanguages(login || '')
                }
            ],
            className: 'ul__userinformation--card'
        },
        secondCard: {
            images: userInformation.repos.map(repo => {
                return {
                    span: 1,
                    src: onGetUserRepo(login || '', repo.name),
                    href: repo.html_url
                }
            })
        }
    }), [login, userInformation.repos])

    const onFetchUserInformation = useCallback(async () => {
        setLoading(true)

        try {
            const [userData, userRepos] = await Promise.all([
                onGetUserByName(login || ''),
                onGetUserReposByName(login || '', 4)
            ])
            setUserInformations({ name: userData.data.name, repos: userRepos.data })
        } catch (err) {
            toast.error('Something went wrong, please try again!')
        }

        setLoading(false)
    }, [login])

    useEffect(() => {
        onFetchUserInformation()
    }, [onFetchUserInformation])

    return loading ? <LoadingText> Loading... </LoadingText> : (
        <Container>
            <Title> {userInformation.name} </Title>
            <Card
                images={cardImagesInformations.firstCard.images}
                listClassName={cardImagesInformations.firstCard.className}
                title="Github stats"
            />
            <Card
                images={cardImagesInformations.secondCard.images}
                title="Repos"
            />
        </Container>
    )
}

export default User