import React from 'react'

import Footer from '@components/organisms/footer'
import Header from '@components/organisms/header'
import '@styles/components/layout.global.scss'

const Layout: React.FC<any> = (Props) => {
  return (
    <React.Fragment>
      <Header />
      <main className={Props.styles}>{Props.children}</main>
      <Footer />
    </React.Fragment>
  )
}

export default Layout
