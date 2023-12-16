import { User } from '@/__generated__/ggl/graphql'
import { EnumUserRoles } from '@/types/user.types'

export interface IUserState {
  id: number
  email: string
  image: string
  role: EnumUserRoles
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

export interface ITokens {
  accessToken: string
  refreshToken: string
}

export interface IAuthResponse extends ITokens {
  user: User
}
