import axios from 'axios'

export const githubApi = axios.create({
    baseURL: 'https://api.github.com'
})


export const onGetPopularUsers = () => {
    return githubApi.get('/search/users?q=+repos:%3E42+followers:%3E1000&per_page=20')
}