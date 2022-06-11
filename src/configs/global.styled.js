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
    background: rgb(140,130,254);
    background: linear-gradient(90deg, rgba(140,130,254,0.25) 5%, rgba(255,255,255,1) 100%);
  }
  #root {
    min-height: 100vh;
  }
`
