import React from 'react'

import Footer from '@components/organisms/footer'
import Header from '@components/organisms/header'
import '@styles/components/layout.global.scss'

export default (Props) => {
  const isRootPath = Props.location.pathname === `${__PATH_PREFIX__}/`
  return (
    <React.Fragment>
      {isRootPath ? <header></header> : <Header />}
      <main className={Props.styles}>{Props.children}</main>
      <Footer />
    </React.Fragment>
  )
}
