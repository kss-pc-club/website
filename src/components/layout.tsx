import React from 'react'

import '@styles/components/layout.global.scss'

const Layout: React.FC<any> = ({ location, children }) => {
  return (
    <React.Fragment>
      <header>KSS PC Club</header>
      <main>{children}</main>
      <footer>
        <p>
          <nobr>
            Copyright &copy; 2021 KSS PC Club <wbr />
            All Rights Reserved.
          </nobr>
        </p>
      </footer>
    </React.Fragment>
  )
}

export default Layout
