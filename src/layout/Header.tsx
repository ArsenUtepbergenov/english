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
  CircularProgress,
  Tooltip,
  ListItemIcon,
  ListItemText,
  capitalize,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import SchoolIcon from '@mui/icons-material/School'
import LoginIcon from '@mui/icons-material/Login'
import Navbar from 'components/Navbar/Navbar'
import { navLinks } from 'components/Navbar/navLinks'
import { DefaultNavLink } from 'components/Navbar/navbar.styles'
import { useNavigate } from 'react-router-dom'
import { getAuth, signOut } from 'firebase/auth'
import { useAppSelector } from 'hooks/redux/redux'
import ExitToAppIcon from '@mui/icons-material/ExitToApp'

const settings = ['Logout']

function Header({ isAuthLoading }: { isAuthLoading?: boolean }) {
  const navigate = useNavigate()
  const { email, isLogged } = useAppSelector(state => state.user)
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

  const handleLogout = () => {
    try {
      const auth = getAuth()

      signOut(auth)

      handleCloseUserMenu()
    } catch (error) {
      console.error(error)
    }
  }

  const userMenu = (
    <>
      <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
        <Avatar sx={{ bgcolor: '#fff', color: '#332a42' }} alt={capitalize(`${email}`)} src="/" />
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
            <ListItemIcon>
              <ExitToAppIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>{setting}</ListItemText>
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
            <ListItemText>{link.name}</ListItemText>
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
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {isAuthLoading ? (
              <CircularProgress />
            ) : (
              <>
                {!isLogged ? (
                  <Tooltip title="Sign In">
                    <DefaultNavLink
                      key="login-link"
                      to="login"
                      aria-current="page"
                      sx={{ display: 'flex' }}
                    >
                      <LoginIcon />
                    </DefaultNavLink>
                  </Tooltip>
                ) : (
                  <>{userMenu}</>
                )}
              </>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header
