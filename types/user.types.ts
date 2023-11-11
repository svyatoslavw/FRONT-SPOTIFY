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
  premiumId: number
  premium?: IPremium
  tracks: ITrack[]
}

export interface IFullUser extends IUser {}

export enum EnumUserRoles {
  USER = 'USER',
  ADMIN = 'ADMIN',
  MODERATOR = 'MODERATOR',
  SUPPORT = 'SUPPORT',
  DEVELOPER = 'DEVELOPER',
}
