import { configureStore } from '@reduxjs/toolkit'
import { User } from 'models/user'
import usersReducer from './user/userSlice'
export interface RootState {
  user: User
}

export const store = configureStore({
  reducer: {
    user: usersReducer,
  },
})
