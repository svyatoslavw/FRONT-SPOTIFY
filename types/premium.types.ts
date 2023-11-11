import { IUser } from './user.types'

export interface IPremium {
  id: number
  createdAt: string
  updatedAt: string
  name: string
  users: IUser[]
  expiration: Date
  price: number
}
