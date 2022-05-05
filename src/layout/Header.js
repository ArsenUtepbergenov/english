import Navbar from 'components/Navbar/Navbar'
import { AppBar, Box, Grid, Toolbar, Typography, Container } from '@mui/material'
import SchoolIcon from '@mui/icons-material/School'

function Header() {
  return (
    <AppBar position="static" sx={{ bgcolor: '#332a42' }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Grid container alignItems="center">
            <Box mr={1} mt={1}>
              <SchoolIcon />
            </Box>
            <Typography variant="h6" noWrap>
              English
            </Typography>
            <Box ml={2}>
              <Navbar />
            </Box>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header
