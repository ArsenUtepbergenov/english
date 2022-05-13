import { memo } from 'react'
import { activeStyle, DefaultNavLink } from './navbar.styles'
import { navLinks } from './navLinks'

function Navbar() {
  return (
    <>
      {navLinks.map((link) => (
        <DefaultNavLink
          key={link.name}
          to={link.to}
          aria-current="page"
          style={({ isActive }) => (isActive ? activeStyle : {})}
        >
          {link.name}
        </DefaultNavLink>
      ))}
    </>
  )
}

export default memo(Navbar)
