import { errorCatch } from '@/api/api.helper'
import { removeFromStorage } from '@/services/auth/auth.helper'
import { AuthService } from '@/services/auth/auth.service'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { IAuthResponse, ILogin, IRegister } from './user.interface'

export const register = createAsyncThunk<IAuthResponse, IRegister>(
  'auth/register',
  async (data, thunkApi) => {
    try {
      const responce = await AuthService.register('register', data)
      return responce
    } catch (error) {
      return thunkApi.rejectWithValue(error)
    }
  },
)

export const login = createAsyncThunk<IAuthResponse, ILogin>(
  'auth/login',
  async (data, thunkApi) => {
    try {
      const responce = await AuthService.login('login', data)
      return responce
    } catch (error) {
      return thunkApi.rejectWithValue(error)
    }
  },
)

export const google = createAsyncThunk<IAuthResponse>('auth/google/login', async (_, thunkApi) => {
  try {
    const response = await AuthService.authGoogle()
    return response
  } catch (error) {
    return thunkApi.rejectWithValue(error)
  }
})

export const github = createAsyncThunk<IAuthResponse>('auth/github/login', async (_, thunkApi) => {
  try {
    const response = await AuthService.authGithub()
    return response
  } catch (error) {
    return thunkApi.rejectWithValue(error)
  }
})

export const logout = createAsyncThunk('auth/logout', async () => {
  removeFromStorage()
})

export const checkAuth = createAsyncThunk<IAuthResponse>('auth/check-auth', async (_, thunkApi) => {
  try {
    const responce = await AuthService.getNewTokens()
    return responce.data
  } catch (error) {
    if (errorCatch(error) === 'jwt expired') {
      thunkApi.dispatch(logout())
    }

    return thunkApi.rejectWithValue(error)
  }
})
