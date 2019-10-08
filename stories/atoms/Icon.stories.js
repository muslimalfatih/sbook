import React from 'react'
import Styled from 'styled-components'
import { storiesOf } from '@storybook/react'
import { Icon } from '../../src'
import { colors } from '../../src/variables'

storiesOf('Atoms/Icon', module)
  .add('List Icon', () => (
    <table>
      <tr>
        <th>name</th>
        <th>icon</th>
      </tr>
      <tbody>
        <tr>
          <td>home</td>
          <td><Icon size='48px' name='home' fill={colors.blue} /></td>
        </tr>
        <tr>
          <td>love</td>
          <td><Icon size='48px' name='love' fill={colors.dark} /></td>
        </tr>
      </tbody>
    </table>
  ))
  .add('Icon with margin and padding', () => (
    <Icon size='48px' name='love' fill={colors.dark} p='48px' m='24px' />
  ))