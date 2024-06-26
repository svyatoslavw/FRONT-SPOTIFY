import { useProfile } from '@/entities/user/models/useProfile';
import { IPremium } from '@/types/premium.types';
import { AudioLines } from 'lucide-react';
import { FC } from 'react';

const ProfilePremium: FC<{ premium: IPremium }> = ({ premium }) => {
  const { profile } = useProfile();
  if (!profile) return null;
  return (
    <div className="bg-[#232323] w-[600px] px-4 py-2 rounded-lg">
      <div className="flex justify-between">
        <h6 className="text-[10px]">My subscription</h6>
        <AudioLines size={30} color="#15b37f" />
      </div>

      <h1 className="font-semibold text-emerald-500  text-3xl pb-8">
        {premium.type}
      </h1>
      <p className="font-semibold text-emerald-500  text-3xl pb-8">
        You are a premium member {premium.type}
      </p>
    </div>
  );
};

export default ProfilePremium;
