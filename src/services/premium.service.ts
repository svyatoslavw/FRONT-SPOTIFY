import { instance } from '@/api/api.interceptor'
import { EnumUserPremium } from '@/types/premium.types'

const PREMIUM = 'premium'

export type TypeData = {
  type: EnumUserPremium
  userId: number
}

export const PremiumService = {
  async create(type: EnumUserPremium, userId: number) {
    return instance({
      url: `${PREMIUM}/create/${type}`,
      method: 'GET',
    })
  },
}
