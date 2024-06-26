import { ChevronRight, LucideIcon } from 'lucide-react';
import Link from 'next/link';
import { FC } from 'react';
interface IOverviewLink {
  href: string;
  Icon: LucideIcon;
  text: string;
}

const OverviewLink: FC<IOverviewLink> = ({ Icon, href, text }) => {
  return (
    <Link
      href={href}
      className="flex text-zinc-300 justify-between items-center text-sm hover:bg-[#1a1a1a] rounded-lg py-2 px-4 duration-150"
    >
      <div className="flex gap-3 items-center">
        <div className="p-2 rounded-lg bg-[#333333]">
          <Icon color="gray" size={20} />
        </div>
        <span>{text}</span>
      </div>
      <ChevronRight color="gray" size={25} />
    </Link>
  );
};

export default OverviewLink;
