import React from 'react'
import { PageProps } from 'gatsby'
import Layout from '@components/layout'
import SEO from '@utils/seo'

const TopPage: React.FC<PageProps> = ({ location }) => {
  return (
    <React.Fragment>
      <Layout>
        <SEO title='Top' />
        <h1>Hello world</h1>
      </Layout>
    </React.Fragment>
  )
}

export default TopPage
