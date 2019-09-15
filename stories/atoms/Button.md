# Storybook Addon Notes

Storybook Addon Notes allows you to write notes (text or HTML) for your stories in [Storybook](https://storybook.js.org).

[Framework Support](https://github.com/storybookjs/storybook/blob/master/ADDONS_SUPPORT.md)

![Storybook Addon Notes Demo](docs/demo.png)

## Getting Started

**NOTE: Documentation on master branch is for alpha version, stable release is on [master](https://github.com/storybookjs/storybook/tree/master/addons/)**

```sh
yarn add -D @storybook/addon-notes
```

Then create a file called `addons.js` in your Storybook config.

Add following content to it:

```js
// register the notes addon as a tab
import '@storybook/addon-notes/register';
// or register the notes addon as a panel. Only one can be used!
import '@storybook/addon-notes/register-panel';
```