/**
- Use an avatar for attributing actions or content to specific users.
- The user's name should always be present when using Avatar – either printed beside the avatar or in a tooltip.
**/

import React from 'react'
import PropTypes from 'prop-types';
import Styled from 'styled-components'
// import GlobalStyle from '../../global'
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
  background-color: ${({ backgroundColor }) => backgroundColor || colors.black};
  font-size: ${({ fontSize }) => fontSize || '14px'};
`

export const ButtonBorder = Styled(ButtonWrapper)`
  border-radius: 5px;
  border: 1px solid yellow;
  background-color: white;
  color: black;
  width: 250px;
`

export const Button = ({ children, p, m, h, w, fontSize, color, backgroundColor }) => (
  <React.Fragment>
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

// Text.propTypes = {
//   /** Font Weight */
//   fontWeight: PropTypes.number,
//   /** Font SIze Desc */
//   fontSize: PropTypes.string,
//   /** Font Family */
//   fontFamily: PropTypes.string
// }

// Text.defaultProps = {
//   fontWeight: 100,
//   fontSize: '12px',
//   fontFamily: 'Arial'
// }

Button.propTypes = {
  /**  padding */
  fontSize: PropTypes.number
}