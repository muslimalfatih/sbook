import { configure, addParameters, addDecorator } from '@storybook/react';
import { setConsoleOptions } from '@storybook/addon-console';
import { withA11y } from '@storybook/addon-a11y'
import GlobalStyle from '../src/global'
import theme from './theme';

// automatically import all files ending in *.stories.js
// const req = require.context('../stories', true, /\.stories\.js$/);
const Stories = require.context('../stories', true, /\.stories\.(js|mdx)$/);
const Intro = require.context('../src', false, /Intro\.stories\.mdx/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

// addDecorator(story => (
//   <>
//     <GlobalStyle />
//     {story()}
//   </>
// ));

addDecorator(withA11y);

addParameters({
  options: {
    theme: theme
  }
})

setConsoleOptions({
  panelExclude: [],
  });

configure([Intro, Stories], module);
