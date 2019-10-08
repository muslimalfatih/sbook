import React from 'react'
import PropTypes from 'prop-types';
import Styled from 'styled-components'
import { colors } from 'sbook/variables'

const TextWrapper = Styled.p`
  font-family: ${({ fontFamily }) => fontFamily || 'Arial'};
  padding: ${({ p }) => p || undefined};
  margin: ${({ m }) => m || 0};
  font-size: ${({ fontSize }) => fontSize || '12px'};
  font-weight: ${({ fontWeight, weightType }) => {
    if (fontWeight) {
      return fontWeight
    } else if (weightType === 'light') {
      return '100'
    } else if (weightType === 'bold') {
      return '600'
    } else {
      return '400'
    }
  }};
  color: ${({ color }) => color || colors.dark};
  text-align: ${({ textAlign }) => textAlign || 'left'};
`

export const Text = ({ p, m, fontSize, fontWeight, weightType, children, color, textAlign, fontFamily }) => (
  <TextWrapper p={p} m={m} fontWeight={fontWeight} fontSize={fontSize} fontFamily={fontFamily} color={color} weightType={weightType} textAlign={textAlign} >
    {children}
  </TextWrapper>
)

Text.propTypes = {
  /** Font Weight */
  fontWeight: PropTypes.number,
  /** Font SIze Desc */
  fontSize: PropTypes.string,
  /** Font Family */
  fontFamily: PropTypes.string
}

Text.defaultProps = {
  fontWeight: 100,
  fontSize: '12px',
  fontFamily: 'Arial'
}