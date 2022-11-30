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

  async function getUserData() {
    try {
      const res = await axios.get(
        'https://api.github.com/users/PauloQuagliatto'
      )
      const resData = res.data
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

  useEffect(() => {
    getUserData()
  }, [])

  return (
    <>
      <HomeHeader userData={userData} />
      <HomeContainer>
        <SearchForm />
        <RepositoriesList />
      </HomeContainer>
    </>
  )
}
