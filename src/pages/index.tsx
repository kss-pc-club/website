import { PageProps } from 'gatsby'
import React from 'react'

import Layout from 'src/components/layout'
import About from 'src/components/organisms/TopPage/about'
import Contact from 'src/components/organisms/TopPage/contact'
import Hero from 'src/components/organisms/TopPage/hero'
import Join from 'src/components/organisms/TopPage/join'
import Posts from 'src/components/organisms/TopPage/posts'
import Works from 'src/components/organisms/TopPage/works'
import SEO from 'src/utils/seo'

const RootIndex_page: React.FC<PageProps> = ({ location }) => (
  <React.Fragment>
    <Layout location={location}>
      <SEO title='Top' />
      <div>
        <Hero />
        <About />
        <Works />
        <Posts />
        <Join />
        <Contact />
      </div>
    </Layout>
  </React.Fragment>
)

export default RootIndex_page
