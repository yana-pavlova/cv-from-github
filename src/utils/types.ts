// from https://api.github.com/users/yana-pavlova
export type TUserData = {
  name: string;
  public_repos: number;
  followers: number;
  repos_url: string;
  bio: string;
  avatar_url: string;
}

// from https://api.github.com/repos/yana-pavlova/blog-customizer
export type TUserRepo = {
  id: number
  name: string
  html_url: string
  languages_url: string //(each repo stack {string: number})
  description: string | null
  fork: boolean
  stack: TUserRepoLanguages
  created_at: string
}

// при запросе каждого репа, надо дозапросить урл_репа/languages и закинуть приходящий объект в userRepo
// https://api.github.com/repos/yana-pavlova/blog-customizer/languages
export type TUserRepoLanguages = {
  [key: string]: number | undefined
}

// from https://api.github.com/users/yana-pavlova/repos
// export type TUserRepos = {
//   // fork: boolean;
//   repos: TUserRepo[];
//   // ownRepos: TUserRepo[]; //when fork is false
//   // contibutedRepos: TUserRepo[]; //when fork is true
// }
