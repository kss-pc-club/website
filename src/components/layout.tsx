import React from 'react'

import '@styles/components/layout.global.scss'

const Layout: React.FC<any> = (Props) => {
  return (
    <React.Fragment>
      <header>KSS PC Club</header>
      <main className={Props.styles}>{Props.children}</main>
      <footer>
        <p>
          <nobr>
            Copyright &copy; {new Date().getFullYear()} KSS PC Club <wbr />
            All Rights Reserved.
          </nobr>
        </p>
      </footer>
    </React.Fragment>
  )
}

export default Layout
