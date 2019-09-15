import React from 'react';
import { storiesOf } from '@storybook/react';
import { Text } from '../../src/atoms'
import { colors } from '../../src/variables';

storiesOf('Atoms/Typography', module)
  .add('Text', () => (
    <Text>Lorem ipsum dolor sit amet consectetur.</Text>
  ))
  .add('Text color', () => (
    <Text color={colors.blue}>Lorem ipsum dolor sit amet consectetur.</Text>
  ))