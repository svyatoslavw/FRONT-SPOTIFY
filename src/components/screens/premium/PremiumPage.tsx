'use client'
import { premiums } from '@/constants/premium.constant'
import { useProfile } from '@/hooks/useProfile'
import PremiumItem from './PremiumItem'

const PremiumPage = () => {
  const { profile } = useProfile()
  if (!profile) return
  return (
    <div className="py-6">
      <div className="px-16 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-8 mt-4">
        {premiums.map((item) => (
          <PremiumItem key={item.id} item={item} profile={profile} />
        ))}
      </div>
    </div>
  )
}

export default PremiumPage
