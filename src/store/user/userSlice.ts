import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { User } from 'models/user'

const initialState: User = {
  id: '',
  email: '',
  token: '',
  isLogged: false,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setIsLoading: (state: User, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    },
    setUser: (state: User, action: PayloadAction<User>) => {
      const { id, email, token, isLogged } = action.payload
      Object.assign(state, { id, email, token, isLogged })
    },
    removeUser: (state: User) => {
      state.id = ''
      state.email = ''
      state.token = ''
      state.isLogged = false
      state.isLoading = false
    },
  },
})

export const { setIsLoading, setUser, removeUser } = userSlice.actions

export default userSlice.reducer
