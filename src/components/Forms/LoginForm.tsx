import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { green } from '@mui/material/colors'
import Copyright from 'components/Texts/Copyright'
import { useDispatch } from 'react-redux'
import { setUser } from 'store/user/userSlice'
import { getAuth, signInWithEmailAndPassword, UserCredential } from 'firebase/auth'
import { Link, useNavigate } from 'react-router-dom'

const theme = createTheme()

export default function LoginForm() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)

    const email = data.get('email')
    const password = data.get('password')

    if (email && password) {
      const auth = getAuth()

      try {
        const { user }: UserCredential = await signInWithEmailAndPassword(
          auth,
          email as string,
          password as string,
        )

        dispatch(
          setUser({
            id: user.uid,
            email: user.email,
            token: '',
          }),
        )

        navigate('/forms-verb', { replace: true })
      } catch (error) {
        console.error(error)
      }
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: green[500] }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              Submit
            </Button>
            <Grid container>
              <Grid item xs>
                <Link to="/register">Forgot password?</Link>
              </Grid>
              <Grid item>
                <Link to="/register">{"Don't have an account? Register"}</Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright />
      </Container>
    </ThemeProvider>
  )
}
