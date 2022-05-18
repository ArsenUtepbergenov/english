import RegisterForm from 'components/Forms/RegisterForm'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getAuth, createUserWithEmailAndPassword, User, UserCredential } from 'firebase/auth'
import { setUser } from 'store/user/userSlice'
import { UserData } from 'models/user'

function Register() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const register = async (userData: UserData) => {
    const { userEmail, userPassword } = userData
    const auth = getAuth()

    try {
      const { user }: UserCredential = await createUserWithEmailAndPassword(
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
      <RegisterForm register={register} />
    </section>
  )
}

export default Register
