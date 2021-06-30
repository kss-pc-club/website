import { Link } from 'gatsby'
import React from 'react'

import Layout from '@components/layout'
import * as Styles from '@styles/pages/404.module.scss'
import SEO from '@utils/seo'

export default ({ location }) => {
  return (
    <React.Fragment>
      <Layout location={location} styles={Styles.main}>
        <SEO title='404 Not Found' />
        <h1>404</h1>
        <strong>Not Found</strong>
        <p id={Styles.path}>{location.pathname}</p>
        <p>
          このページは一時的にアクセスができない状況にあるか、URLが変更・削除された可能性があります。
        </p>
        <Link to='/' className='btn btn-outline-primary'>
          トップページへ
        </Link>
      </Layout>
    </React.Fragment>
  )
}
