import React from 'react'

import '@styles/components/layout.scss'

const Layout: React.FC<any> = ({ location, children }) => {
  return (
    <React.Fragment>
      <header>Header</header>
      <main>{children}</main>
      <footer>Footer</footer>
    </React.Fragment>
  )
}

export default Layout
