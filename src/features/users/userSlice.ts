import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type User = {
  id: number
  name: string
  email: string
}

const initialState: User[] = [] as User[]

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state: User[], action: PayloadAction<User>) => {
      state.push(action.payload)
    },
    editUser: (state: User[], action: PayloadAction<User>) => {
      const { id, name, email } = action.payload
      const existingUser = state.find((user) => user.id === id)
      if (existingUser) {
        existingUser.name = name
        existingUser.email = email
      }
    },
    deleteUser: (state: User[], action: PayloadAction<User>) => {
      const { id } = action.payload
      const existingUser = state.find((user) => user.id === id)
      if (existingUser) {
        return state.filter((user) => user.id !== id)
      }
    },
  },
})

export const { addUser, editUser, deleteUser } = userSlice.actions

export default userSlice.reducer
