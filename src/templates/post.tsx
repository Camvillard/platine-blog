import React from "react"
import { graphql } from "gatsby"

import { IPageProps } from "../shared/PageProps.type"
import Layout from "../components/Layout/Layout.component"

const Post = (props: IPageProps) => {
  console.log(props)
  const { data } = props
  const { wordpressPost } = data

  const { source_url: source, alt_text: alt } = wordpressPost.featured_media

  return (
    <Layout>
      <img src={source} alt={alt} />
    </Layout>
  )
}

export default Post

export const query = graphql`
  query($id: String!, $postId: Int!, $mainCategory: String!) {
    wordpressPost(id: { eq: $id }) {
      featured_media {
        source_url
        alt_text
      }

      wordpress_id
      title
      date
      content
      slug
      categories {
        id
        name
        slug
      }
    }

    allWordpressWpComments(filter: { post: { eq: $postId } }) {
      totalCount
      edges {
        node {
          id
          post
          content
          author_name
          author_url
          date
          wordpress_parent
          wordpress_id
          author_avatar_urls {
            wordpress_96
          }
        }
      }
    }

    allWordpressPost(
      filter: { categories: { elemMatch: { slug: { eq: $mainCategory } } } }
      limit: 3
    ) {
      edges {
        node {
          id
          comment_status
          excerpt
          slug
          title
          featured_media {
            id
            source_url
          }
        }
      }
    }
  }
`
