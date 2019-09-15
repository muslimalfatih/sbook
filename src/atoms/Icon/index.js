import React from 'react'
import Styled from 'styled-components'

const SVG = Styled.svg`
  width: ${({ size }) => size || '24px'};
  height: ${({ size }) => size || '24px'};
  padding: ${({ p }) => p || undefined};
  margin: ${({ m }) => m || undefined};
`

const RenderIcon = ({ name, fill }) => {
  switch (name) {
    case 'home':
      return (
        <g>
          <path fill={fill} d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
          <path d="M0 0h24v24H0z" fill='none' />
        </g>
      )
    case 'love':
      return (
        <g>
          <path d="M0 0h24v24H0z" fill="none"/>
          <path fill={fill} d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </g>
      )
    default: 
      return null    
  }
}

export const Icon = ({ fill, name, size, p, m }) => (
  <SVG size={size} viewBox='0 0 24 24' p={p} m={m}>
    <RenderIcon name={name} fill={fill} />
  </SVG>
)