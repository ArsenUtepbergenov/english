import { NavLink } from 'react-router-dom'
import { classNames } from 'utils'
import { navLinks } from './navLinks'

function Navbar() {
  return <>
    {navLinks.map((item) => (
      <NavLink
        key={item.name}
        to={item.to}
        className={({ isActive }) => classNames(
          isActive ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
          'px-3 py-2 rounded-md text-sm font-medium'
        )}
        aria-current={item.current ? 'page' : undefined}
      >
        {item.name}
      </NavLink>
    ))}
  </>
}

export default Navbar

