import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { User } from 'models/user'

const initialState: User = {
  id: '',
  email: '',
  token: '',
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state: User, action: PayloadAction<User>) => {
      const { id, email, token } = action.payload
      Object.assign(state, { id, email, token })
    },
    removeUser: (state: User) => {
      state.id = ''
      state.email = ''
      state.token = ''
    },
  },
})

export const { setUser, removeUser } = userSlice.actions

export default userSlice.reducer
