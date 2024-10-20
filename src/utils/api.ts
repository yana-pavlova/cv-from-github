import { baseUrl } from "./constans";
import * as types from './types';

const fetchUserData = async (userName: string, headers?: HeadersInit): Promise<Partial<types.TUserData>> => {
    const urlToFetch = baseUrl + 'users/' + userName;

    try {
      const res = await fetch(urlToFetch, {headers});
      if(!res.ok) throw new Error(`Ошибка при получении данных пользователя: ${res.status}`);
      return await res.json() as Partial<types.TUserData>;
    } catch (err) {
      console.log(err);
      throw err;
    }
}

const fetchUserRepos = async (url: string, headers?: HeadersInit): Promise<Partial<types.TUserRepo>[]> => {
  try {
    const res = await fetch(url, {headers});
    if (!res.ok) throw new Error(`Ошибка при получении репозиториев: ${res.status}`);
    return await res.json() as Partial<types.TUserRepo>[];
  } catch (err) {
    console.log(err);
    throw err;
  }
}

const fetchRepoLanguages = async (url: string, headers?: HeadersInit): Promise<types.TUserRepoLanguages> => {
  try {
    const res = await fetch(url, {headers});
    if(!res.ok) throw new Error(`Ошибка при получении языков репозитория: ${res.status}`);
    return await res.json() as types.TUserRepoLanguages;
  } catch(err) {
    throw err
  }
}

export const fetchAllAndFillReposData = async (userName: string) => {
  try {
    const userData = await fetchUserData(userName);
    
    if(userData.repos_url) { // если у пользователя есть репы, достаём их
      const userReposData = await fetchUserRepos(userData.repos_url) // достаём репы
      const res = await Promise.allSettled( // ждём, пока завершатся все запросы в массиве
        userReposData.map(async (repo) => { // проходим по репам
          try {
            const repoStack = await fetchRepoLanguages(repo.languages_url!) // забираем стэк репа
            return {... repo, stack: repoStack, name: repo.name!.replaceAll("-", " ")}
          } catch(err) { // если промис завершился ошибкой, передаём вместо стэка null
            console.error(`Ошибка при получении языков репозитория ${repo.name}:`, err);
            return {... repo, stack: null, name: repo.name!.replaceAll("-", " ")}
          }
        })
      )

      const repos = res.map(repo => {
        if(repo.status === 'fulfilled') return repo.value;
        return {...repo.reason, stack: null}
      })

      const filteredRepos = repos.filter(repo => {
        return repo.name !== userName.replace('-', ' ');
      })

      return {
        userData: userData as Partial<types.TUserData>,
        filledRepos: filteredRepos as Partial<types.TUserRepo>[]
      };
    };
    return
  } catch(err) {
    throw err
  }
}
