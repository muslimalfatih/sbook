import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    font-family: sans-serif;
    line-height: 1.15;
  }

  article,
  aside,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  main,
  nav,
  section {
    display: block;
  }
  
  body {
    @import url('https://fonts.googleapis.com/css?family=Lato:400,700,900&display=swap');
    margin: 10px;
    font-family: 'Lato', sans-serif;
  }
`

export default GlobalStyle;