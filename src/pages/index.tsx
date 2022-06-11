import { PageProps } from 'gatsby'
import React from 'react'

import { css } from '@emotion/react'
import Layout from 'src/components/layout'
import About from 'src/components/organisms/TopPage/about'
import Achievements from 'src/components/organisms/TopPage/achievements'
import Contact from 'src/components/organisms/TopPage/contact'
import Hero from 'src/components/organisms/TopPage/hero'
import Join from 'src/components/organisms/TopPage/join'
import Posts from 'src/components/organisms/TopPage/posts'
import Works from 'src/components/organisms/TopPage/works'
import { Color } from 'src/utils/color'
import SEO from 'src/utils/seo'

const RootIndex_page: React.FC<PageProps> = ({ location }) => (
  <React.Fragment>
    <Layout location={location}>
      <SEO title='Top' />
      <Hero />
      <div
        css={css`
          > section:nth-child(even) {
            background-color: ${Color.UI.backgroundAccent};
          }
        `}
      >
        <About />
        <Works />
        <Achievements />
        <Posts />
        <Join />
        <Contact />
      </div>
    </Layout>
  </React.Fragment>
)

export default RootIndex_page
