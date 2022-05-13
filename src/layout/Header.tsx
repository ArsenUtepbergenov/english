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
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import Navbar from 'components/Navbar/Navbar'
import SchoolIcon from '@mui/icons-material/School'
import { navLinks } from 'components/Navbar/navLinks'
import { TextNavLink } from 'components/Navbar/navbar.styles'

function Header() {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null)

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

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
        {navLinks.map((link) => (
          <MenuItem key={link.name} onClick={handleCloseNavMenu}>
            <TextNavLink to={link.to}>{link.name}</TextNavLink>
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
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>{desktopView}</Box>
          <Box sx={{ display: { xs: 'flex', md: 'none', flexGrow: 1 } }}>{mobileView}</Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header
