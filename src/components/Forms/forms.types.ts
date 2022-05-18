import { UserData } from 'models/user'

export type LoginFormProps = {
  login: (userData: UserData) => void
}

export type RegisterFormProps = {
  register: (userData: UserData) => void
}
