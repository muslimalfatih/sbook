import React from 'react';
import { storiesOf, addDecorator, addParameters } from '@storybook/react'
import { withKnobs, text, number, color, select,  } from '@storybook/addon-knobs'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { Button, ButtonOutline, Text } from '../../src/atoms'
import { colors } from '../../src/variables';
import ButtonMD from './Button.md'


const newViewports = {
  kindleFire2: {
    name: 'Kindle Fire 2',
    styles: {
      width: '600px',
      height: '963px',
    },
  },
  kindleFireHD: {
    name: 'Kindle Fire HD',
    styles: {
      width: '533px',
      height: '801px',
    },
  },
};

addParameters({
  viewport: {
    viewports: {
      ...INITIAL_VIEWPORTS,
      ...newViewports,
    },
  },
});

const heightOpt = {
  range: true,
  min: 24,
  max: 90,
  step: 1,
}

const bColorOpt = {
  ...colors
}

storiesOf('Atoms/Button', module)
  .addDecorator(withKnobs)
  .add('Button', () => (
    <Button 
      color={color('color', colors.white)} 
      backgroundColor={select('background color',  bColorOpt)}
      h={`${number('height', 32, heightOpt)}px`}
      w={`${number('width', 240)}px`}
      fontSize={`${number('font-size', 14)}px`}
      >
        {text('Label', 'Hello Storybook')}
      </Button>
  ),
  {
    notes: 'A very simple example of addon notes',
  }
  )
  .add('Button Outline', () => (
    <ButtonOutline >Hello Button</ButtonOutline>
  ),
  {
    notes: { markdown: ButtonMD },
  }
  )