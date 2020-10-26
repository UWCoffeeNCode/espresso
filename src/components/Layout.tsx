import React, { FC, ReactNode } from "react"
import Header from "src/components/Header"

import "./Layout.css"

export interface LayoutProps {
  children: ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => (
  <div className="min-h-screen flex flex-col">
    <Header />
    <main className="flex flex-col flex-1">{children}</main>
    {/* <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer> */}
  </div>
)

export default Layout
