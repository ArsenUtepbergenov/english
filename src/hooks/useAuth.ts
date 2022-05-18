import { useAppSelector } from './redux/redux'

export function useAuth() {
  const { id, email, token } = useAppSelector(state => state.user)

  return {
    isAuth: !!email,
    id,
    email,
    token,
  }
}
