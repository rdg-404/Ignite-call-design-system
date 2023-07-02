import { Label, MultistepContainer } from './style'

export interface MultistepProps {
  size: number
  currentStep?: number
}

export function Multistep({ size, currentStep = 1 }: MultistepProps) {
  return (
    <MultistepContainer>
      <Label>
        Passo {currentStep} de {size}
      </Label>
    </MultistepContainer>
  )
}
