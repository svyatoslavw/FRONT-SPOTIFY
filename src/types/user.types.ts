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
  favorites: IFavorite[]
}

export interface IFullUser extends IUser {
  favorites: IFavorite[]
}

export enum EnumUserRoles {
  USER = 'USER',
  ADMIN = 'ADMIN',
  MODERATOR = 'MODERATOR',
  SUPPORT = 'SUPPORT',
  DEVELOPER = 'DEVELOPER',
}
