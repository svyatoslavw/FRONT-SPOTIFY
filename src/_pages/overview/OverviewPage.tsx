'use client';
import { useProfile } from '@/entities/user/models/useProfile';
import { Pencil, RefreshCcw } from 'lucide-react';
import { FC } from 'react';
import NonePremium from './NonePremium';
import OverviewLink from './OverviewLink';
import ProfilePremium from './ProfilePremium';
const OverviewPage: FC = () => {
  const { profile } = useProfile();
  if (!profile) return;

  return (
    <div className="bg-gradient-custom h-screen text-zinc-200 flex flex-col items-center justify-start py-10 gap-6 overflow-hidden overflow-y-hidden">
      {profile.premium ? (
        <ProfilePremium premium={profile.premium} />
      ) : (
        <NonePremium />
      )}

      <div className="bg-[#232323] w-[600px] p-2 rounded-lg">
        <h1 className="bg-[#232323] w-full p-2 rounded-lg">Аккаунт</h1>
        <OverviewLink
          href="/account/profile"
          Icon={Pencil}
          text="Edit profile"
        />
        <OverviewLink href="/" Icon={RefreshCcw} text="Recovering playlists" />
      </div>
    </div>
  );
};

export default OverviewPage;
