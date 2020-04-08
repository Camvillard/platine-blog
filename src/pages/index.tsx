import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout/Layout.component"
import SEO from "../components/Seo/Seo.component"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>

    <Link to="/contact">Go to page 2</Link>
  </Layout>
)

export default IndexPage
