import React from "react"
import Layout from "../components/Layout/Layout.component"
import SEO from "../components/Seo/Seo.component"
import PostCard from "../components/Cards/PostCard.component"
import { Grid } from "../components/Containers/GridContainer.ui"
import { graphql } from "gatsby"

type TIndexProps = {
  data: any
}

const IndexPage = (props: TIndexProps) => {
  const { allWordpressPost } = props.data

  return (
    <Layout>
      <SEO title="Home" />
      <Grid columns={{ default: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr" }}>
        {allWordpressPost.edges.map(edge => {
          return <PostCard post={edge.node} key={edge.node.id} />
        })}
      </Grid>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query homePage {
    site {
      siteMetadata {
        title
      }
    }

    allWordpressPost(limit: 8, sort: { fields: [date], order: [DESC] }) {
      edges {
        node {
          id
          slug
          featured_media {
            source_url
          }
          title
          excerpt
          date(formatString: "DD/MM/YYYY")
          categories {
            id
            slug
            name
          }
        }
      }
    }
    wordpressPage(title: { eq: "homepage" }) {
      acf {
        a_propos
        en_ce_moment_lien
        en_ce_moment_text
        newsletter_title
        en_ce_moment_text
      }
    }
  }
`
