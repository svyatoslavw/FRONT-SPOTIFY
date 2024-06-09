'use client';
import { FC } from 'react';
import { NavbarContent } from './NavbarContent';
import { NavbarHeader } from './NavbarHeader';

const Navbar: FC = () => {
  return (
    <div className="bg-black left-0 top-0 h-screen w-[350px] transition-width duration-500 ease-in-out flex flex-col items-center justify-start no-underline p-2">
      <NavbarHeader />
      <NavbarContent />
    </div>
  );
};

export { Navbar };
