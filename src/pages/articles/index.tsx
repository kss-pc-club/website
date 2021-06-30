import { graphql } from 'gatsby'
import React from 'react'
import { Card } from 'react-bootstrap'

import Layout from '@components/layout'
import * as Styles from '@styles/pages/articles/index.module.scss'
import SEO from '@utils/seo'

const PostLink = ({ post }: any) => (
  <Card className={Styles.card}>
    <Card.Body>
      <Card.Title className={Styles.h5}>{post.frontmatter.title}</Card.Title>
      <Card.Subtitle className={Styles.h6}>
        {post.frontmatter.date} 公開 ・ {post.frontmatter.last_update} 更新
      </Card.Subtitle>
      <Card.Text className={Styles.cardDescription}>
        {post.frontmatter.description}
      </Card.Text>
      <Card.Link
        className='btn btn-outline-primary'
        href={post.frontmatter.slug}
      >
        記事を読む
      </Card.Link>
    </Card.Body>
  </Card>
)

export default ({
  data: {
    allMarkdownRemark: { edges },
  },
  location,
}: any) => {
  const Posts = edges
    .filter((edge: any) => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map((edge: any) => <PostLink key={edge.node.id} post={edge.node} />)
  return (
    <React.Fragment>
      <Layout location={location}>
        <SEO title='投稿記事一覧' />
        {Posts}
      </Layout>
    </React.Fragment>
  )
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "YYYY.MM.DD")
            last_update(formatString: "YYYY.MM.DD")
            slug
            title
            description
          }
        }
      }
    }
  }
`
