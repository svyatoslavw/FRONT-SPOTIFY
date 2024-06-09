import { AddTrack } from '@/features/AddTrack';
import { EnumUserRoles } from '@/shared/lib/types';
import { Button } from '@/shared/ui/button';
import HeaderMenu from '@/widgets/Header/HeaderMenu';
import Link from 'next/link';
import { useProfile } from '../models/useProfile';

export interface ITrackFields {
  name: string;
  image: string;
  file: string;
}

const UserHeader = () => {
  const { profile, error: profileError } = useProfile();

  return (
    <div className="flex gap-4 items-center">
      {profile && !profile.premium && !profileError && (
        <Button variant={'outline'} className="rounded-xl bg-transparent">
          <Link href={'/premium'}>Premium</Link>
        </Button>
      )}
      {profile && profile.role === EnumUserRoles.ARTIST && !profileError && (
        <AddTrack profile={profile} />
      )}

      {!profile ? (
        <div>
          <Link
            href={'/auth/register'}
            style={{ color: 'gray', fontWeight: 700 }}
          >
            <span className="hover:text-grayLight duration-200">Register</span>
          </Link>
          <Link
            href={'auth/login'}
            style={{ color: 'black', fontWeight: 700 }}
            className="bg-white py-2 px-6 ml-4 rounded-full"
          >
            <span className="hover:text-grayLight duration-200">Login</span>
          </Link>
        </div>
      ) : (
        <HeaderMenu />
      )}
    </div>
  );
};

export { UserHeader };
