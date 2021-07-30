import React from 'react'
import SweetScroll from 'sweet-scroll'

import Footer from '@components/organisms/footer'
import Header from '@components/organisms/header'
import '@styles/components/layout.global.scss'

new SweetScroll({
  trigger: "a.sweet-scroll[href^='#']",
})

const Layout: React.FC<any> = (Props) => {
  const isRootPath = Props.location.pathname === `${__PATH_PREFIX__}/`
  return (
    <React.Fragment>
      {isRootPath ? <header></header> : <Header />}
      <main className={Props.styles}>{Props.children}</main>
      <Footer />
    </React.Fragment>
  )
}

export default Layout
