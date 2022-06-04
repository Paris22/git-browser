import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100vh;
  }
  body {
    margin: 0;
    padding: 0;
    min-height: 100vh;
    font-family:Open-Sans, Helvetica, Sans-Serif, serif;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }
  #root {
    min-height: 100vh;
  }
`