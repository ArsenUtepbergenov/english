import { memo } from 'react'
import { activeStyle, DefaultNavLink } from './navbar.styles'
import { navLinks } from './navLinks'

function Navbar() {
  return (
    <>
      {navLinks.map((item) => (
        <DefaultNavLink
          key={item.name}
          to={item.to}
          aria-current="page"
          style={({ isActive }) => (isActive ? activeStyle : {})}
        >
          {item.name}
        </DefaultNavLink>
      ))}
    </>
  )
}

export default memo(Navbar)
