'use client';
import { UserHeader } from '@/entities/user/ui/UserHeader';
import { HeaderNavigation } from '@/widgets/Header/HeaderNavigation';
import { usePathname } from 'next/navigation';
import { FC } from 'react';

const Header: FC = () => {
  const pathname = usePathname();

  return (
    <div className="h-[80px] w-full flex bg-transparent justify-between px-5 items-center">
      <HeaderNavigation pathname={pathname} />
      <UserHeader />
    </div>
  );
};

export { Header };
