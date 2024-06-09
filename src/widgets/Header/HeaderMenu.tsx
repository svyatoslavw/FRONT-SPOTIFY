import { removeFromStorage } from '@/entities/user/api/auth.helper';
import { useProfile } from '@/entities/user/models/useProfile';
import { client } from '@/shared/api/apollo.config';
import { ADMIN_URL } from '@/shared/lib/config/url.config';
import { EnumUserRoles } from '@/shared/lib/types';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/shared/ui/dropdown-menu';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import toast from 'react-hot-toast';

const HeaderMenu: FC = () => {
  const { profile } = useProfile();
  const handler = async () => {
    try {
      await client.clearStore().then(() => removeFromStorage());
    } catch (error) {
      toast.error('Logout Error');
    }
  };
  return (
    <>
      {profile && profile.role && (
        <DropdownMenu>
          <DropdownMenuTrigger className="focus:outline-none">
            <Image
              alt="user"
              width={50}
              height={50}
              className="transition-transform aspect-square rounded-full"
              src={profile.image}
            />
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="bg-primary text-white p-2 border-zinc-800"
            align="end"
          >
            <DropdownMenuItem key="account" aria-label="Account Overview">
              <Link className="w-full" href="/account/overview">
                Account
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem key="profile" aria-label="Profile">
              <Link className="w-full" href="/user">
                Profile
              </Link>
            </DropdownMenuItem>

            {profile.role === EnumUserRoles.ADMIN && (
              <DropdownMenuGroup title="Management">
                <DropdownMenuSeparator className="bg-zinc-800" />
                <DropdownMenuItem
                  key="admin"
                  title="Admin dashboard"
                  color="success"
                  aria-label="Admin"
                >
                  <Link className="w-full" href={ADMIN_URL.root('dashboard')}>
                    Admin dashboard
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            )}
            {profile.role === EnumUserRoles.ARTIST && (
              <DropdownMenuGroup title="Management">
                <DropdownMenuSeparator className="bg-zinc-800" />
                <DropdownMenuItem
                  key="artist"
                  color="warning"
                  aria-label="Moderator"
                >
                  <Link className="w-full" href="/artist/dashboard">
                    Artist dashboard
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            )}

            <DropdownMenuItem
              aria-label="Log Out"
              title="Log Out"
              key="logout"
              onClick={handler}
            >
              Log Out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </>
  );
};

export default HeaderMenu;
