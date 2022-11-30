import { Header } from '../../../../components/Header'

import arrowIcon from '../../../../assets/arrow-up-right-from-square-solid.svg'
import githubIcon from '../../../../assets/github-brands.svg'
import companyIcon from '../../../../assets/building-solid.svg'
import followersIcon from '../../../../assets/user-group-solid.svg'

import { UserData } from '../..'

import { IconsContainer, InfoContainer, MainUserDataContainer, ProfileContainer } from './styles'

interface HomeHeaderProps {
  userData: UserData
}

export function HomeHeader({ userData }: HomeHeaderProps) {
  return (
    <Header>
      <ProfileContainer>
        <img id="profile-image" src={userData.profileImg} alt="" />
        <InfoContainer>
          <MainUserDataContainer>
            <h1>{userData.name}</h1>
            <a href={userData.profileLink}>
              GITHUB <img src={arrowIcon} alt="arrow up right inside square" />
            </a>
          </MainUserDataContainer>
          <p>{userData.bio}</p>
          <IconsContainer>
            <div>
              <img src={githubIcon} alt="" />
              <span>{userData.userName}</span>
            </div>

            <div>
              <img src={companyIcon} alt="" />
              <span>{userData.company}</span>
            </div>

            <div>
              <img src={followersIcon} alt="" />
              <span>{userData.followers}</span>
            </div>
          </IconsContainer>
        </InfoContainer>
      </ProfileContainer>
    </Header>
  )
}
