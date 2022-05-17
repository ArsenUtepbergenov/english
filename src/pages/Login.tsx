import { FC } from 'react'
import LoginForm from 'components/Forms/LoginForm'

type LoginProps = {}

const Login: FC<LoginProps> = () => {
  return (
    <section>
      <LoginForm />
    </section>
  )
}

export default Login
