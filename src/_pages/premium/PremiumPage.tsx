'use client';
import { useProfile } from '@/entities/user/models/useProfile';
import { premiums } from '@/shared/lib/constants/premium.constant';
import PremiumItem from './PremiumItem';

const PremiumPage = () => {
  const { profile } = useProfile();
  if (!profile) return;
  return (
    <div className="py-6">
      <div className="flex justify-center gap-8 mt-4 mx-4">
        {premiums.map((item) => (
          <PremiumItem key={item.id} item={item} profile={profile} />
        ))}
      </div>
    </div>
  );
};

export default PremiumPage;
