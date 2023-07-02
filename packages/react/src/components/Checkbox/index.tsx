import { CheckboxContainer } from './styles'
import { ComponentProps } from 'react'

export interface CheckboxProps
  extends ComponentProps<typeof CheckboxContainer> {}

export function Checkbox(props: CheckboxProps) {
  return <CheckboxContainer {...props}></CheckboxContainer>
}
