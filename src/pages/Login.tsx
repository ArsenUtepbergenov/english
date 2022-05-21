import LoginForm from 'components/Forms/LoginForm'
import {
  browserLocalPersistence,
  inMemoryPersistence,
  getAuth,
  setPersistence,
  signInWithEmailAndPassword,
} from 'firebase/auth'
import { UserData } from 'models/user'
import { useNavigate } from 'react-router-dom'

function Login() {
  const navigate = useNavigate()

  const login = async (userData: UserData) => {
    try {
      const auth = getAuth()
      const { userEmail, userPassword, rememberMe } = userData

      const persistence = rememberMe ? browserLocalPersistence : inMemoryPersistence
      await setPersistence(auth, persistence)

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
