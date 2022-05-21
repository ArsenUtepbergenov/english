import RegisterForm from 'components/Forms/RegisterForm'
import {
  browserLocalPersistence,
  createUserWithEmailAndPassword,
  getAuth,
  setPersistence,
} from 'firebase/auth'
import { UserData } from 'models/user'
import { useNavigate } from 'react-router-dom'

function Register() {
  const navigate = useNavigate()

  const register = async (userData: UserData) => {
    try {
      const auth = getAuth()
      const { userEmail, userPassword } = userData

      await setPersistence(auth, browserLocalPersistence)
      await createUserWithEmailAndPassword(auth, userEmail, userPassword)

      navigate('/forms-verb', { replace: true })
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <section>
      <RegisterForm register={register} />
    </section>
  )
}

export default Register
