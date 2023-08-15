import { Box, BoxProps } from '@ignite-ui/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
  tittle: 'Surfaces/Box',
  component: Box,
  args: {
    children: (
      <>
        <span>Testando o Elemento Box </span>
      </>
    ),
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
