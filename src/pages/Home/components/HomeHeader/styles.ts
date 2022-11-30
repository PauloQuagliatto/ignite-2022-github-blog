import styled from 'styled-components'

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  #profile-image {
    width: 148px;
    height: 148px;
    border-radius: 8px;
    object-fit: cover;
  }
`

export const InfoContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const MainUserDataContainer = styled.div`
    width: 100%;
    margin-bottom: 0.5rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
  
    h1 {
      color: ${props => props.theme['base-title']};
      font-size: 1.5rem;
      font-weight: 600;
    }

    a {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      
      font-size: 0.75rem;
      font-weight: 600;

      color: ${props => props.theme['blue']};
      text-decoration: none;

      img {
        width: 14px;
        height: 14px;
      }

      &:hover {
        text-decoration: underline;
      }
    }
`
export const IconsContainer = styled.div`
  margin-top: 1.5rem;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1.5rem;

  div {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0.5rem;

    span {
      color: ${props => props.theme['base-subtitle']};
      font-size: 1rem;
    }

    img {
      width: 18px;
      height: 18px;
    }
  }
`
