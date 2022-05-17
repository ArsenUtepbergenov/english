import { User } from 'models/user'
import { useSelector } from 'react-redux'
import { RootState } from 'store'

export function useAuth() {
  const { id, email, token } = useSelector<RootState, User>(state => state.user)

  return {
    isAuth: !!email,
    id,
    email,
    token,
  }
}
