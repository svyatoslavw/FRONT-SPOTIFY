import { IUser } from './user.types'

export interface IPremium {
  id: number
  createdAt: string
  price: number
  type: EnumUserPremium
  userId: number
  users: IUser[]
  //Order: IOrder[]
}

export const enum EnumUserPremium {
  NONEPREMIUM = 'NONEPREMIUM',
  INDIVIDUAL = 'INDIVIDUAL',
  STUDENT = 'STUDENT',
  DUO = 'DUO',
  FAMILY = 'FAMILY',
}
