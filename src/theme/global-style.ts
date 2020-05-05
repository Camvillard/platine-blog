import { createGlobalStyle } from "styled-components"
import { themeColors, themeFonts, themeBreakpoints } from "./theme"

export const GlobalStyle = createGlobalStyle`

  * {
    box-sizing: inherit;
  }
  *:before {
    box-sizing: inherit;
  }
  *:after {
    box-sizing: inherit;
  }

  html {
    font-family: sans-serif;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    font-size: 62.5%;
  }

  body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${themeColors.mediumGray};
    font-size: 1.6rem;
    font-family: ${themeFonts.body};
    font-weight: 400;
  }

  p {
    font-size: 1.4rem;
    font-family: ${themeFonts.body};
  }

  img {
    object-fit: cover;
    max-width: 100%;
    margin: 0;
  }

  a {
    text-decoration: none;
  }

  a:active,
  a:hover {
    outline-width: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${themeFonts.headers}t;
    text-transform: uppercase;
    line-height: 1.1;
    color: ${themeColors.darkGray};
  }

  @media (min-width: ${themeBreakpoints.mdScreen}) {
    p {
      font-size: 1.6rem;
    }
  }
`
