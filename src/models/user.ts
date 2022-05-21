export type User = {
  id: string
  email: string | null
  token: string
  isLogged: boolean
  isLoading?: boolean
}

export type UserData = {
  name?: string
  userEmail: string
  userPassword: string
  rememberMe?: boolean
}
