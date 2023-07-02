import { styled } from '../../styles'
import { Text } from '../Text'

export const MultistepContainer = styled('div', {})

export const Label = styled(Text, {
  color: '$gray200',
  defaultVariants: {
    size: 'xs',
  },
})

export const Step = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(var(--steps-size), 1fr)',
  gap: '$2',
  marginTop: '$1',
})
