import React, { FC, ReactNode } from "react"
import Header from "src/components/Header"

import "./Layout.css"

export interface LayoutProps {
  children: ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    {/* <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer> */}
  </>
)

export default Layout
