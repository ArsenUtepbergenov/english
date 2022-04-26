import { NavLink } from 'react-router-dom'
import { styled } from '@mui/material/styles'

export const DefaultNavLink = styled(NavLink)(({ theme }) => ({
  margin: '0 6px',
  padding: '8px 8px',
  color: '#e3e3e3',
  textDecoration: "none",
}))

