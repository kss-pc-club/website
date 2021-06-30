import { graphql, Link } from 'gatsby'
import React from 'react'
import { Breadcrumb } from 'react-bootstrap'

import Layout from '@components/layout'
import * as Styles from '@styles/pages/MarkdownRemark.module.scss'
import SEO from '@utils/seo'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
import 'prismjs/themes/prism.css'

;<link rel='stylesheet' href='https://unpkg.com/primer/build/build.css' />

export default function Template({ data }: any) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark

  return (
    <React.Fragment>
      <Layout location={location} styles={Styles.main}>
        <SEO title={frontmatter.title} description={frontmatter.description} />
        <h1>{frontmatter.title}</h1>
        <Breadcrumb>
          <Breadcrumb.Item href='/'>トップページ</Breadcrumb.Item>
          <Breadcrumb.Item href='/articles/'>投稿記事一覧</Breadcrumb.Item>
          <Breadcrumb.Item active>この記事</Breadcrumb.Item>
        </Breadcrumb>
        <p id={Styles.date}>
          {frontmatter.date} 公開 ・ {frontmatter.last_update} 更新
        </p>
        <p id={Styles.description}>{frontmatter.description}</p>
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

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "YYYY.MM.DD")
        last_update(formatString: "YYYY.MM.DD")
        slug
        title
        description
      }
    }
  }
`
