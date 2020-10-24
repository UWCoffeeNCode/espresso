import React, { FC, HTMLAttributes } from "react"
import names from "classnames"

import { Link } from "gatsby"
import { resolveColor } from "src/utils/tailwind"

export interface LinkInfo {
  label: string
  href: string
  external?: boolean
}

export const LINKS: LinkInfo[] = [
  { label: "HOME", href: "/" },
  { label: "TEAM", href: "/team" },
  { label: "EVENTS", href: "/events" },
]

export interface NavBarProps extends HTMLAttributes<HTMLDivElement> {
  links?: LinkInfo[]
}

const NavBar: FC<NavBarProps> = ({
  links = LINKS,
  className,
  ...otherProps
}) => (
  <div
    className={names("flex flex-row items-center", className)}
    {...otherProps}
  >
    {links.map(({ label, href, external }) => (
      <NavLink key={href} to={href}>
        {label}
      </NavLink>
    ))}
  </div>
)

interface NavLinkProps extends HTMLAttributes<HTMLDivElement> {
  to: string
  children: string
}

const NavLink: FC<NavLinkProps> = ({
  to,
  children,
  className,
  ...otherProps
}) => (
  <div className={names("ml-3", className)} {...otherProps}>
    <Link
      to={to}
      style={{ color: resolveColor("gray", "700") }}
      activeStyle={{ color: resolveColor("gray", "900") }}
    >
      <h4 className="font-bold hover:opacity-75">{children}</h4>
    </Link>
  </div>
)

export default NavBar
