import { configure, addParameters } from '@storybook/react';
import { setConsoleOptions } from '@storybook/addon-console';
import theme from './theme';

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addParameters({
  options: {
    theme: theme
  }
})

setConsoleOptions({
  panelExclude: [],
  });

configure(loadStories, module);
