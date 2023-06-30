import { User } from 'phosphor-react'
import { AvatarContainer, AvatarFallback, AvatarImage } from './styles'

export function Avatar() {
  return (
    <AvatarContainer>
      <AvatarImage />

      <AvatarFallback delayMs={600}>
        <User />
      </AvatarFallback>
    </AvatarContainer>
  )
}
