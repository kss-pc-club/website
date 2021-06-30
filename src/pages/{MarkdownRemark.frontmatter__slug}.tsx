import { graphql, Link } from 'gatsby'
import React from 'react'

import Layout from '@components/layout'
import * as Styles from '@styles/pages/MarkdownRemark.module.scss'
import SEO from '@utils/seo'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
import 'prismjs/themes/prism.css'

export default function Template({ data }: any) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark

  return (
    <React.Fragment>
      <Layout location={location} styles={Styles.main}>
        <SEO title={frontmatter.title} />
        <h1>{frontmatter.title}</h1>
        <p id={Styles.date}>
          公開日: {frontmatter.date} | 最終更新日: {frontmatter.last_update}
        </p>
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
          to='/'
          className={`btn btn-outline-secondary ${Styles.footer_btn}`}
        >
          トップページへ
        </Link>
      </Layout>
    </React.Fragment>
  )
}

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "YYYY.MM.DD")
        last_update(formatString: "YYYY.MM.DD")
        slug
        title
      }
    }
  }
`
