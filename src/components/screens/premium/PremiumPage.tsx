'use client'
import { premiums } from '@/constants/premium.constant'
import { useProfile } from '@/hooks/useProfile'
import PremiumItem from './PremiumItem'

const PremiumPage = () => {
  const { profile } = useProfile()
  if (!profile) return
  return (
    <div className="py-6">
      <div className="flex flex-wrap gap-8 mt-4 mx-4  ">
        {premiums.map((item) => (
          <PremiumItem key={item.id} item={item} profile={profile} />
        ))}
      </div>
    </div>
  )
}

export default PremiumPage
