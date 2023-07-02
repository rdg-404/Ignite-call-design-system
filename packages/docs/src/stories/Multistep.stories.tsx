import { Meta, StoryObj } from '@storybook/react'
import { Box, Multistep, MultistepProps } from '@ignite-ui/react'

export default {
  title: 'Form/Multistep',
  component: Multistep,

  args: {
    size: 4,
    currentStep: 1,
  },
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<MultistepProps>

export const Primary: StoryObj<MultistepProps> = {}

export const Complete: StoryObj<MultistepProps> = {
  args: {
    currentStep: 4,
  },
}
