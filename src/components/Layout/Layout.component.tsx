import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "../Header/Header.component"
import "./layout.css"
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`

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
    color: red;
    font-size: 1.6rem;
  }

  p {
    font-size: 1.6rem;
  }

  img {
    object-fit: cover;
    max-width: 100;
    margin: 0;
  }

  a {
    text-decoration: none;
  }

  a:active,
  a:hover {
    outline-width: 0;
  }
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <GlobalStyle />
      <div>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
