import React from 'react'

import Layout from '@components/layout'
import Hero from '@components/organisms/hero'
import SEO from '@utils/seo'

export default ({ location }) => {
  return (
    <React.Fragment>
      <Layout location={location}>
        <SEO title='Top' />
        <Hero />
        <h1>Main</h1>
      </Layout>
    </React.Fragment>
  )
}
