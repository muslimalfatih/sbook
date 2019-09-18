import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info'
import { Text } from '../../src/atoms'
import { colors } from '../../src/variables';

storiesOf('Atoms/Typography', module)
  .addDecorator(withInfo)
  .add('Text', () => (
    <>
      <Text fontSize={'34px'}><h1>Heading</h1></Text>
      <Text fontSize={'24px'}><h2>Heading 2</h2></Text>
      <Text fontSize={'18px'}><h2>Heading 3</h2></Text>
    </>
  ), { info: { inline: true, header: false } })
  .add('Text color', () => (
    <Text color={colors.blue}>Lorem ipsum dolor sit amet consectetur.</Text>
  ))