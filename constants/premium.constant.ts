import { EnumUserPremium } from '@/types/premium.types'

export interface IPremiumItems {
  id: number
  price: number
  type: EnumUserPremium
  points: IPremiumText[]
  description: string
  color: string
}
export interface IPremiumText {
  title: string
}

export const premiums = [
  {
    id: 1,
    price: 4.99,
    type: EnumUserPremium.INDIVIDUAL,
    points: [
      {
        title: '1 Premium account',
      },
      {
        title: 'You can cancel at any time',
      },
    ],
    description:
      'Безкоштовно протягом 1 місяця, потім 4,99 USD на місяць. Пропозиція доступна, лише якщо ви раніше не користувалися Premium-підпискою. ',
    color: '#fdd0d5',
  },
  {
    id: 2,
    price: 2.49,
    type: EnumUserPremium.STUDENT,
    points: [
      {
        title: '1 verified Premium account',
      },
      {
        title: 'Eligible student discount',
      },
      {
        title: 'You can cancel at any time',
      },
    ],
    description:
      'Безкоштовно протягом 1 місяця, потім 2,49 USD на місяць. Пропозиція доступна тільки для студентів акредитованих вищих навчальних закладів, які ще не спробували Premium-підписку.',
    color: '#c4b1d4',
  },
  {
    id: 3,
    price: 6.49,
    type: EnumUserPremium.DUO,
    points: [
      {
        title: '2 Premium accounts',
      },
      {
        title: 'You can cancel at any time',
      },
    ],
    description:
      'Безкоштовно протягом 1 місяця, потім 6,49 USD на місяць. Пропозиція доступна, лише якщо ви раніше не користувалися Premium-підпискою. Для двох користувачів, які проживають за однією адресою.',
    color: '#a5bbd1',
  },
  {
    id: 4,
    price: 7.99,
    type: EnumUserPremium.FAMILY,
    points: [
      {
        title: 'Up to 6 Premium accounts',
      },
      {
        title: 'Block music with age restrictions',
      },
      {
        title: 'You can cancel at any time',
      },
    ],
    description:
      'Безкоштовно протягом 1 місяця, потім 7,99 USD на місяць. Пропозиція доступна, лише якщо ви раніше не користувалися Premium-підпискою. Для 6 членів сім’ї, які проживають за однією адресою. ',
    color: '#fdd0d5',
  },
]
