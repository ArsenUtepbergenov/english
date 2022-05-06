import { activeStyle, DefaultNavLink } from './navbar.styles'
import { navLinks } from './navLinks'

function Navbar() {
  return (
    <>
      {navLinks.map((item) => (
        <DefaultNavLink
          key={item.name}
          to={item.to}
          aria-current={item.current ? 'page' : undefined}
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          {item.name}
        </DefaultNavLink>
      ))}
    </>
  )
}

export default Navbar
