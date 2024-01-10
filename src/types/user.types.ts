import { User } from '@/__generated__/ggl/graphql'
import { IFavorite } from './playlist.types'
import { IPremium } from './premium.types'
import { ITrack } from './track.types'

export interface IUser {
  id: number
  createdAt: string
  image: string
  email: string
  name: string
  login: string
  country: string
  role: EnumUserRoles
  //isPremium: boolean
  premium: IPremium
  tracks: ITrack[]
  likedTracks: ITrack[]
  favorites: IFavorite[]
}

export interface IFullUser extends IUser {
  favorites: IFavorite[]
}

export enum EnumUserRoles {
  USER = 'USER',
  ADMIN = 'ADMIN',
  MODERATOR = 'MODERATOR',
  ARTIST = 'ARTIST',
  DEVELOPER = 'DEVELOPER',
}

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
