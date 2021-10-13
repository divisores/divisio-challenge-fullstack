import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
:root{
    --red: #CE1131;
    --grey: #1F1F1F;
    --green: #33CC95;
    --mirror-dark: #009DD4;
    --mirror-normal: #0BCDFF;
    --mirror-light: #9CE8FF;
    --border: #C4C4C4;
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

  body {
    background-image: url('https://i.redd.it/hicwzlb23pm21.png');
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  button{
    cursor: pointer;
}

`
