import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    min-height: 100%;
  }
  html{
    /* a cada 1rem será considerado 10px */
    font-size: 62.5%;
  }

  html, body {
    height: 100vh;
    font-family: Arial, Helvetica, sans-serif;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;

  }
  body {
    font-size: 1.6rem;
  }
`;
