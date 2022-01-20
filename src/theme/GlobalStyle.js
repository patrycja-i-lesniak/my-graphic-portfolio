import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';


export const GlobalStyle = createGlobalStyle`
${normalize}

*, ::after, ::before {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;            //CSS antialiasing cheatsheet
  -moz-osx-font-smoothing: grayscale;
}

html  {
  font-size: 62.5%;
}

body {
    font-size: 1.6rem;
    margin: 0 auto;
    font-family: "Poppins", sans-serif;
    background-color: white;
    word-break: break-word;
}
`;

