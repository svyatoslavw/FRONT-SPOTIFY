import { EnumUserRoles, IUser } from '@/utils/types/user.types'

export interface IUserState {
  email: string
  image: string
  role: EnumUserRoles
}

export interface ITokens {
  accessToken: string
  refreshToken: string
}

export interface IInitialState {
  user: IUserState | null
  isLoading: boolean
}

export interface IRegister {
  email: string
  password: string
  name: string
  passwordConfirmation: string
}

export interface ILogin {
  email: string
  password: string
}

export interface IAuthResponse extends ITokens {
  user: IUser
}
