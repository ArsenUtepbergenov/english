import { NavLink } from 'react-router-dom'
import { styled } from '@mui/material/styles'

export const DefaultNavLink = styled(NavLink)(() => ({
  margin: '0 6px',
  padding: '8px 8px',
  color: '#e3e3e3',
  textDecoration: 'none',
}))

export const TextNavLink = styled(NavLink)(() => ({
  textDecoration: 'none',
  color: '#332a42',
  fontWeight: '500',
}))

export const activeStyle = {
  background: '#1f1a28',
  borderRadius: 8,
}
