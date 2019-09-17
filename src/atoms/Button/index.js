import React from 'react'
import Styled from 'styled-components'
import GlobalStyle from '../../global'
import { colors } from '../../variables'

const ButtonPlain = Styled.button`
  padding: 0;
  margin: 0;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 8px;
`
const ButtonWrapper = Styled(ButtonPlain)`
  padding: ${({ p }) => p || '4px 8px'};
  margin: ${({ m }) => m || undefined};
  height: ${({ h }) => h || '32px'};
  width: ${({ w }) => w || '120px'};
  color: ${({ color }) => color || colors.white};
  background-color: ${({ backgroundColor }) => backgroundColor || colors.blue};
  font-size: ${({ fontSize }) => fontSize || '14px'};
`

export const Button = ({ children, p, m, h, w, fontSize, color, backgroundColor }) => (
  <React.Fragment>
    <GlobalStyle />
    <ButtonWrapper
      p={p}
      m={m}
      h={h}
      w={w}
      color={color}
      fontSize={fontSize}
      backgroundColor={backgroundColor}>
      {children}
    </ButtonWrapper>
  </React.Fragment>
)

const OulineButton = Styled(ButtonWrapper)`
  color: ${({ color }) => color || colors.blue};
  background-color: ${({ backgroundColor }) => backgroundColor || colors.white};
  border: ${({ border }) => border || `1px solid ${colors.blue}`};
`

export const ButtonOutline = ({ children, p, m, h, w, fontSize, color, backgroundColor, border }) => (
  <OulineButton
    p={p}
    m={m}
    h={h}
    w={w}
    color={color}
    fontSize={fontSize}
    backgroundColor={backgroundColor}
    border={border}
    >
    {children}
  </OulineButton>
)