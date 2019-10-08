import React from 'react'
import Styled from 'styled-components'
import { Text, Icon } from '../../../src'
import { shadows, colors } from '../../../src/variables'

const CardWrapper = Styled.div`
  padding: ${({ p }) => p || 0};
  margin: ${({ m }) => m || 0};
  display: flex;
  padding: 8px;
  border-radius: 4px 24px 24px 24px;
  box-shadow: ${shadows.idle};
  min-height: 100px;
`
const Avatar = Styled.img`
  width: 24px;
  height: 24px;
  border-radius: 24px;
`
const Menu = Styled.div`
  padding: 0 8px;
  display: flex;
  flex-direction: column;
`

export const Card = ({ images, post, p, m }) => (
  <CardWrapper p={p} m={m}>
    <Menu>
      <Avatar src={images} />
      <Icon name='love' fill={colors.grey} />
    </Menu>
    <Text fontSize='14px'>{post}</Text>
  </CardWrapper>
)