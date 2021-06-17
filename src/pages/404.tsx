import { PageProps } from 'gatsby'
import React from 'react'

import Layout from '@components/layout'
import * as Styles from '@styles/pages/404.module.scss'
import SEO from '@utils/seo'

const TopPage: React.FC<PageProps> = ({ location }) => {
  return (
    <React.Fragment>
      <Layout styles={Styles.main}>
        <SEO title='404 Not Found' />
        <h1>404</h1>
        <strong>Not Found</strong>
        <p id='path'>{location.pathname}</p>
        <p>
          このページは一時的にアクセスができない状況にあるか、URLが変更・削除された可能性があります。
        </p>
        <a href='/' className='btn btn-outline-primary'>
          トップページへ
        </a>
      </Layout>
    </React.Fragment>
  )
}

export default TopPage
