import { graphql, Link } from 'gatsby'
import React from 'react'
import { Breadcrumb } from 'react-bootstrap'

import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
import 'prismjs/themes/prism.css'
import Layout from 'src/components/layout'
import * as Styles from 'src/styles/pages/MarkdownRemark.module.scss'
import SEO from 'src/utils/seo'

const MarkdownArticle_template: React.FC<any> = ({ location, data }) => {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { fields, html } = markdownRemark

  return (
    <React.Fragment>
      <Layout location={location} styles={Styles.main}>
        <SEO title={fields.title} description={fields.description} />
        <Breadcrumb>
          <Breadcrumb.Item href='/'>トップページ</Breadcrumb.Item>
          <Breadcrumb.Item href='/articles/'>投稿記事一覧</Breadcrumb.Item>
          <Breadcrumb.Item active>この記事</Breadcrumb.Item>
        </Breadcrumb>
        <h1>{fields.title}</h1>
        <p id={Styles.date}>
          <span className={Styles.post_date_tag}>公開日</span>
          <span className={Styles.post_date}>{fields.date}</span>
          <br />
          <span className={Styles.post_date_tag}>更新日</span>
          <span className={Styles.post_date}>{fields.last_update}</span>
        </p>
        <p id={Styles.description}>{fields.description}</p>
        <hr />
        <div
          className={Styles.article}
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <hr />
        <Link
          to='/'
          className={`btn btn-outline-secondary ${Styles.footer_btn}`}
        >
          トップページへ
        </Link>
        <Link
          to='/articles/'
          className={`btn btn-outline-secondary ${Styles.footer_btn}`}
        >
          記事一覧ページへ
        </Link>
      </Layout>
    </React.Fragment>
  )
}

export default MarkdownArticle_template

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      fields {
        date(formatString: "YYYY.MM.DD")
        last_update(formatString: "YYYY.MM.DD")
        slug
        title
        description
      }
    }
  }
`
