import { getStoreLocal } from '@/utils/local-storage'
import { createSlice } from '@reduxjs/toolkit'
import { checkAuth, google, login, logout, register } from './user.actions'
import { IInitialState } from './user.interface'

const initialState: IInitialState = {
  user: getStoreLocal('user'),
  isLoading: false,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(register.pending, (state) => {
      state.isLoading = true
    }),
      builder.addCase(register.fulfilled, (state, action) => {
        state.isLoading = false
        state.user = action.payload.user
      }),
      builder.addCase(register.rejected, (state) => {
        state.isLoading = false
        state.user = null
      }),
      builder.addCase(login.pending, (state) => {
        state.isLoading = true
      }),
      builder.addCase(login.fulfilled, (state, action) => {
        state.isLoading = false
        state.user = action.payload.user
      }),
      builder.addCase(login.rejected, (state) => {
        state.isLoading = false
        state.user = null
      }),
      builder.addCase(google.pending, (state) => {
        state.isLoading = true
      }),
      builder.addCase(google.fulfilled, (state, action) => {
        state.isLoading = false
        state.user = action.payload.user
      }),
      builder.addCase(google.rejected, (state) => {
        state.isLoading = false
        state.user = null
      }),
      builder.addCase(logout.fulfilled, (state) => {
        state.isLoading = false
        state.user = null
      }),
      builder.addCase(checkAuth.fulfilled, (state, action) => {
        state.user = action.payload.user
      })
  },
})
