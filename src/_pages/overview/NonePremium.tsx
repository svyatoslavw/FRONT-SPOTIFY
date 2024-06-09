import { useProfile } from '@/entities/user/models/useProfile';
import { AudioLinesIcon } from 'lucide-react';
import Image from 'next/image';

const NonePremium = () => {
  const { profile } = useProfile();
  if (!profile) return;
  return (
    <div className="bg-[#232323] w-[600px] px-4 py-2 rounded-lg">
      <div className="flex justify-between">
        <h6 className="text-[10px]">Моя подписка</h6>
        <AudioLinesIcon size={30} color="white" />
      </div>

      <h1 className="font-semibold text-3xl pb-3 mb-5 text-slate-200">
        NONE Premium
      </h1>
      <Image
        src={profile.image}
        className="text-sm font-semibold rounded-full"
        width={30}
        height={30}
        alt="/"
      />
      <p className="py-2 text-sm text-slate-300">
        Вы участник Spotify сообщества
      </p>
    </div>
  );
};

export default NonePremium;
