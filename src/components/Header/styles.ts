import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100vw;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    max-height: 296px;
    object-fit: cover;
  }
`

export const ChildrenContainer = styled.div`
width: 100%;
height: 212px;
max-width: 864px;
margin-top: -5.5rem;
padding: 2rem 2.5rem;

background-color: ${props => props.theme['base-profile']};

border-radius: 10px;
`