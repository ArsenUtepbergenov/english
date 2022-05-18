import RegisterForm from 'components/Forms/RegisterForm'
import { useNavigate } from 'react-router-dom'
import {
  getAuth,
  createUserWithEmailAndPassword,
  browserLocalPersistence,
  setPersistence,
} from 'firebase/auth'
import { UserData } from 'models/user'

function Register() {
  const navigate = useNavigate()

  const register = async (userData: UserData) => {
    const { userEmail, userPassword } = userData
    const auth = getAuth()

    try {
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
