'use client'
import { IPremiumItems, IPremiumText } from '@/constants/premium.constant'
import { PremiumService } from '@/services/premium.service'
import { IFullUser } from '@/types/user.types'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { FC } from 'react'

interface IPremiumItem {
  item: IPremiumItems
  profile: IFullUser
}

const PremiumItem: FC<IPremiumItem> = ({ item, profile }) => {
  const queryClient = useQueryClient()
  const { push } = useRouter()
  const { mutate, isSuccess, isError } = useMutation({
    mutationKey: ['create premium'],
    mutationFn: () => PremiumService.create(item.type, profile.id),
    onSuccess(data) {
      console.log(data)
      push(data.data.url)
      //queryClient.refetchQueries({ queryKey: ['profile'] })
    },
  })

  const createButton = () => {
    try {
      mutate()
    } catch (error) {}
  }

  return (
    <div key={item.id} className="border-4 p-2 rounded-xl" style={{ borderColor: item.color }}>
      <span
        className="px-3 py-0.5 rounded-full mb-3 text-black"
        style={{ backgroundColor: item.color }}
      >
        Free for 1 month
      </span>
      <div className="flex py-2 justify-between items-center mb-8">
        <p className="text-2xl font-medium">{item.type}</p>
        <span className="text-xs">FREE FOR 1 MONTH</span>
      </div>
      <div className="mb-2 h-32">
        {item.points.map((text: IPremiumText) => (
          <p className="my-2 text-sm" key={text.title}>
            • {text.title}
          </p>
        ))}
      </div>
      <button
        onClick={createButton}
        className="py-1 flex px-10 font-semibold rounded-full mb-6 text-xs text-black text-center hover:scale-105 duration-200 w-full"
        style={{ backgroundColor: item.color }}
      >
        Спробувати безкоштовно на 1 місяць
      </button>
      <p className="text-center text-xs">{item.description}</p>
    </div>
  )
}

export default PremiumItem
