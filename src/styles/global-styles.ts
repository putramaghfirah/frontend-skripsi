import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    font-family: 'Inter','Helvetica Neue', Helvetica, Arial, sans-serif;
  }


  #root {
    min-height: 100%;
    min-width: 100%;
  }

  /* p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  } */

  input, select {
    font-family: inherit;
    font-size: inherit;
  }
`;
