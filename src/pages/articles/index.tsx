import { graphql } from 'gatsby'
import React from 'react'
import { Breadcrumb, Card } from 'react-bootstrap'

import Layout from 'src/components/layout'
import * as Styles from 'src/styles/pages/articles/index.module.scss'
import SEO from 'src/utils/seo'

const PostLink = ({ post }: any) => (
  <Card className={Styles.card}>
    <Card.Body>
      <Card.Title className={Styles.h5}>{post.fields.title}</Card.Title>
      <Card.Subtitle className={Styles.h6}>
        {post.fields.date} 公開 ・ {post.fields.last_update} 更新
      </Card.Subtitle>
      <Card.Text className={Styles.cardDescription}>
        {post.fields.description}
      </Card.Text>
      <Card.Link className='btn btn-outline-primary' href={post.fields.slug}>
        記事を読む
      </Card.Link>
    </Card.Body>
  </Card>
)

const Articles_Index_page: React.FC<any> = ({
  location,
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter((edge: any) => !!edge.node.fields.date) // You can filter your posts based on some criteria
    .map((edge: any) => <PostLink key={edge.node.id} post={edge.node} />)
  return (
    <React.Fragment>
      <Layout location={location}>
        <SEO title='投稿記事一覧' />
        <h1>投稿記事一覧</h1>
        <Breadcrumb>
          <Breadcrumb.Item href='/'>トップページ</Breadcrumb.Item>
          <Breadcrumb.Item active>投稿記事一覧</Breadcrumb.Item>
        </Breadcrumb>
        <hr />
        <div className={Styles.cardContainer}>{Posts}</div>
      </Layout>
    </React.Fragment>
  )
}

export default Articles_Index_page

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          fields {
            slug
            date(formatString: "YYYY.MM.DD")
            last_update(formatString: "YYYY.MM.DD")
            title
            description
          }
        }
      }
    }
  }
`
