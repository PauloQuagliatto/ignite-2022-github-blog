import { useEffect, useState } from 'react'
import axios from 'axios'

import { HomeHeader } from './components/HomeHeader'
import { SearchForm } from './components/SearchForm'
import { RepositoriesList } from './components/RepositoriesList'

import { HomeContainer } from './styles'

export interface UserData {
  name: string
  userName: string
  bio: string
  profileLink: string
  profileImg: string
  company: string
  followers: string
}

export interface IssueData {
  id: number
  body: string
  comments: number
  createdAt: string
}

export function Home() {
  const [userData, setUserData] = useState<UserData>({
    name: '',
    bio: '',
    userName: '',
    profileLink: '',
    profileImg: '',
    company: '',
    followers: '',
  })
  const [issues, setIssues] = useState<IssueData[]>([])
  const [searchInput, setSearchInput] = useState('')

  async function getUserData() {
    try {
      const userRes = await axios.get(
        'https://api.github.com/users/PauloQuagliatto'
      )
      const resData = userRes.data
      setUserData({
        name: resData.name,
        bio: resData.bio,
        userName: resData.login.toLowerCase(),
        profileLink: resData.html_url,
        profileImg: resData.avatar_url,
        company: resData.company ? resData.company : '---',
        followers: `${resData.followers} seguidores`,
      })
    } catch (e) {
      alert('Não foi possível acessar o github')
    }
  }

  async function getIssuesData() {
    try {
      const issuesRes = await axios.get(
        `https://api.github.com/search/issues?q=${searchInput}repo:rocketseat-education/reactjs-github-blog-challenge`
      )
      const issuesArray = issuesRes.data.items
      setIssues(issuesArray.map((issue: any) => ({
        id: issue.id,
        body: issue.body,
        comments: issue.comments,
        createdAt: issue.created_at
      })))
    } catch (e) {
      alert('Não foi possível acessar o github')
    }
  }

  useEffect(() => {
    getUserData()
    getIssuesData()
  }, [])

  return (
    <>
      <HomeHeader userData={userData} />
      <HomeContainer>
        <SearchForm />
        <RepositoriesList />
      </HomeContainer>
      {
        issues.map((issue) => {
          return (
            <div key={issue.id}>
              <p>{issue.body}</p>
            </div>
          )
        })
      }
    </>
  )
}
