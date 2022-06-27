import axios from "axios";

export const githubApi = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`
  }
});

const githubStatusApi = (url: string) => {
 return `https://github-readme-stats.vercel.app${url}`
};

export const onGetPopularUsers = () => {
  return githubApi.get(
    "/search/users?q=+repos:%3E42+followers:%3E1000&per_page=20"
  );
};

export const onGetUsersByName = (name: string) => {
  return githubApi.get(`/search/users?q=${name}&per_page=20`); 
};

export const onGetUserByName = (name: string) => {
  return githubApi.get(`/users/${name}`); 
};

export const onGetUserReposByName = (name: string, per_page: number) => {
  return githubApi.get(`/users/${name}/repos?per_page=${per_page}`); 
};

export const onGetUserStatus = (name: string) => {
  return githubStatusApi(`/api?username=${name}&show_icons=true&theme=dark`)
}

export const onGetUserTopLanguages = (name: string) => {
  return githubStatusApi(`/api/top-langs/?username=${name}&layout=compact&theme=dark`)
}

export const onGetUserRepo = (name: string, repo: string) => {
  return githubStatusApi(`/api/pin/?username=${name}&repo=${repo}&theme=dark`)
}