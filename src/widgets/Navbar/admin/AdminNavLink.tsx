'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { INavLink } from '../NavLink';

const AdminNavLink = ({ href, icon: Icon, text }: INavLink) => {
  const pathname = usePathname();
  const isCurrentPath = pathname === href;

  return (
    <Link
      rel="preload"
      href={href}
      className="flex gap-4 my-5 items-center font-medium transition-all text-gray-500 hover:text-white"
      style={isCurrentPath ? { color: '#' } : undefined}
    >
      {isCurrentPath && (
        <span className="absolute -ml-3 h-7 w-1 bg-green-500"></span>
      )}
      <span>
        <Icon size={24} />
      </span>
      <span>{text}</span>
    </Link>
  );
};

export { AdminNavLink };
