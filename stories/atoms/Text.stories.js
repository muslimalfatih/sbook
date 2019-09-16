import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info'
import { Text } from '../../src/atoms'
import { colors } from '../../src/variables';

storiesOf('Atoms/Typography', module)
  .addDecorator(withInfo)
  .add('Text', () => (
    <Text>Lorem ipsum dolor sit amet consectetur.</Text>
  ), { info: { inline: true, header: false } })
  .add('Text color', () => (
    <Text color={colors.blue}>Lorem ipsum dolor sit amet consectetur.</Text>
  ))