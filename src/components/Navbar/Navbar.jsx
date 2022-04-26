import { DefaultNavLink } from './navbar.style'
import { navLinks } from './navLinks'

function Navbar() {
  const activeStyle = {
    background: "#1f1a28",
    borderRadius: 8
  }

  return <>
    {navLinks.map((item) => (
      <DefaultNavLink
        key={item.name}
        to={item.to}
        aria-current={item.current ? 'page' : undefined}
        style={({ isActive }) => isActive ? activeStyle : undefined }
      >
        {item.name}
      </DefaultNavLink>
    ))}
  </>
}

export default Navbar

