import { useState } from 'react'
import {
  AppBar,
  Box,
  Grid,
  Toolbar,
  Typography,
  Container,
  Menu,
  MenuItem,
  IconButton,
  Avatar,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import SchoolIcon from '@mui/icons-material/School'
import Navbar from 'components/Navbar/Navbar'
import { navLinks } from 'components/Navbar/navLinks'
import { DefaultNavLink } from 'components/Navbar/navbar.styles'
import { useAuth } from 'hooks/useAuth'
import { useNavigate } from 'react-router-dom'
import { getAuth, signOut } from 'firebase/auth'
import { removeUser } from 'store/user/userSlice'
import { useDispatch } from 'react-redux'

const settings = ['Logout']

function Header() {
  const { isAuth } = useAuth()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null)
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null)

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  const handleTo = (to: string) => {
    navigate(to, { replace: true })
    handleCloseNavMenu()
  }

  const handleLogout = async () => {
    try {
      const auth = getAuth()

      await signOut(auth)

      dispatch(removeUser())

      navigate('/login', { replace: true })

      handleCloseUserMenu()
    } catch (error) {
      console.error(error)
    }
  }

  const userMenu = (
    <>
      <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
        <Avatar alt="Arsen" src="" />
      </IconButton>
      <Menu
        sx={{ mt: '45px' }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {settings.map(setting => (
          <MenuItem key={setting} onClick={handleLogout}>
            {setting}
          </MenuItem>
        ))}
      </Menu>
    </>
  )

  const desktopView = (
    <Grid container alignItems="center" spacing={3}>
      <Grid item>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <SchoolIcon sx={{ mr: 1 }} />
          <Typography variant="h6" noWrap>
            English
          </Typography>
        </Box>
      </Grid>
      <Grid item>
        <Navbar />
      </Grid>
    </Grid>
  )

  const mobileView = (
    <>
      <IconButton
        size="large"
        aria-label="navigation bar"
        aria-controls="navbar"
        aria-haspopup="true"
        onClick={handleOpenNavMenu}
        color="inherit"
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="navbar"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
      >
        {navLinks.map(link => (
          <MenuItem key={link.name} onClick={() => handleTo(link.to)}>
            {link.name}
          </MenuItem>
        ))}
      </Menu>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexGrow: 1 }}>
        <SchoolIcon sx={{ mr: 1 }} />
        <Typography variant="h6" noWrap>
          English
        </Typography>
      </Box>
    </>
  )

  return (
    <AppBar position="static" sx={{ bgcolor: '#332a42' }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Box sx={{ display: { xs: 'none', md: 'flex', flexGrow: 1 } }}>{desktopView}</Box>
          <Box sx={{ display: { xs: 'flex', md: 'none', flexGrow: 1 } }}>{mobileView}</Box>
          {!isAuth ? (
            <DefaultNavLink key="login-link" to="/login" aria-current="page">
              Login
            </DefaultNavLink>
          ) : (
            <Box sx={{ flexGrow: 0 }}>{userMenu}</Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header
