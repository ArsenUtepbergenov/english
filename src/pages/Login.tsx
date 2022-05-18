import { useNavigate } from 'react-router-dom'
import {
  browserLocalPersistence,
  getAuth,
  setPersistence,
  signInWithEmailAndPassword,
} from 'firebase/auth'
import LoginForm from 'components/Forms/LoginForm'
import { UserData } from 'models/user'

function Login() {
  const navigate = useNavigate()

  const login = async (userData: UserData) => {
    const { userEmail, userPassword } = userData
    const auth = getAuth()

    try {
      await setPersistence(auth, browserLocalPersistence)
      await signInWithEmailAndPassword(auth, userEmail, userPassword)
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
