import { FC } from 'react'
import RegisterForm from 'components/Forms/RegisterForm'

type RegisterProps = {}

const Register: FC<RegisterProps> = () => {
  return (
    <section>
      <RegisterForm />
    </section>
  )
}

export default Register
