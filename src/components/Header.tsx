import React, { FC, HTMLAttributes } from "react"
import names from "classnames"

import NavBar from "src/components/NavBar"
import { useStaticQuery } from "gatsby"

export interface HeaderProps extends HTMLAttributes<HTMLDivElement> {}

const Header: FC<HeaderProps> = ({ className, ...otherProps }) => (
  <header
    className={names("p-3", "bg-brand-500", "flex flex-row", className)}
    {...otherProps}
  >
    <div className="flex flex-row items-center">
      <img className="w-16" src={require("src/assets/logo.svg")} />
      <h1
        className={names("text-xl font-extrabold", "ml-3", "hidden sm:block")}
      >
        UW COFFEE 'N CODE
      </h1>
    </div>
    <div className="flex-1" />
    <NavBar className="mr-6" />
  </header>
)

// <Container as="header" px="1.6rem" py="1rem" bg="primary-500" display="flex">
//   <Heading variant="h1" color="on-primary">
//     Hello
//   </Heading>
//   <View flex={1} />
//   <NavBar />
// </Container>

export default Header
