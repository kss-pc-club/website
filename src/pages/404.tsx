import { PageProps } from 'gatsby'
import React from 'react'

import Layout from '@components/layout'
import SEO from '@utils/seo'

const TopPage: React.FC<PageProps> = ({ location }) => {
  return (
    <React.Fragment>
      <Layout>
        <SEO title='404: Not Found' />
        <h1>404 Not Found</h1>
      </Layout>
    </React.Fragment>
  )
}

export default TopPage
