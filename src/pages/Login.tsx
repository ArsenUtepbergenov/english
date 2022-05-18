import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword, User, UserCredential } from 'firebase/auth'
import { setUser } from 'store/user/userSlice'
import LoginForm from 'components/Forms/LoginForm'
import { UserData } from 'models/user'

function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const login = async (userData: UserData) => {
    const { userEmail, userPassword } = userData
    const auth = getAuth()

    try {
      const { user }: UserCredential = await signInWithEmailAndPassword(
        auth,
        userEmail,
        userPassword,
      )

      const { uid, email, accessToken } = user as User & { accessToken: string }

      dispatch(
        setUser({
          id: uid,
          email: email,
          token: accessToken,
        }),
      )

      navigate('/forms-verb', { replace: true })
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <section>
      <LoginForm login={login} />
    </section>
  )
}

export default Login
