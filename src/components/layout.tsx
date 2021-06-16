import React from "react"

const Layout: React.FC<any> = ({ location, children }) => {
  return (
    <React.Fragment>
      <header>

      </header>
      <main>
        {children}
      </main>
      <footer>

      </footer>
    </React.Fragment>
  )
}

export default Layout