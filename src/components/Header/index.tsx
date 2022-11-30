import { ReactNode } from 'react'

import coverImg from '../../assets/Cover.svg'

import { HeaderContainer, ChildrenContainer } from './styles'

interface HeaderProps {
  children: ReactNode
}

export function Header({ children }: HeaderProps) {
  return (
    <HeaderContainer>
      <img src={coverImg} alt="" />
      <ChildrenContainer>{children}</ChildrenContainer>
    </HeaderContainer>
  )
}
