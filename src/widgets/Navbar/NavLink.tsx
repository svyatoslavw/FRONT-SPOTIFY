'use client';
import { LucideIcon } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export interface INavLink {
  href: string;
  icon: LucideIcon;
  text: string;
  title?: string;
}

const NavLink = ({ href, icon: Icon, text, title }: INavLink) => {
  const pathname = usePathname();
  const isCurrentPath = pathname === href;

  return (
    <Link
      rel="preload"
      href={href}
      className="flex gap-4 my-5 items-center font-medium text-gray-500 hover:text-white transition-all"
      style={isCurrentPath ? { color: 'white' } : undefined}
      title={title}
    >
      <span>
        <Icon size={24} />
      </span>
      <span className="font-semibold">{text}</span>
    </Link>
  );
};

export { NavLink };
