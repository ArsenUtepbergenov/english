import { useEffect } from 'react'
import { getAuth, getIdToken, onAuthStateChanged } from 'firebase/auth'
import { removeUser, setIsLoading, setUser } from 'store/user/userSlice'
import { useAppDispatch } from './redux/redux'

export function useAuth() {
  const auth = getAuth()
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(setIsLoading(true))

    try {
      onAuthStateChanged(auth, async user => {
        if (user !== null) {
          const token = await getIdToken(user)

          if (token) {
            const { uid, email } = user

            dispatch(
              setUser({
                id: uid,
                email,
                token,
                isLogged: true,
              }),
            )
          }
        } else {
          dispatch(removeUser())
        }

        dispatch(setIsLoading(false))
      })
    } catch (error) {
      console.error(error)
      dispatch(removeUser())
    }
  }, [auth, dispatch])
}
