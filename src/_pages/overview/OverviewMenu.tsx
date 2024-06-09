import { useProfile } from '@/entities/user/models/useProfile';
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from '@nextui-org/react';
import { ChevronDownIcon } from 'lucide-react';
import Image from 'next/image';

const OverviewMenu = () => {
  const { profile } = useProfile();
  return (
    <Dropdown className="dark cursor-pointer" placement="bottom-end">
      <DropdownTrigger>
        <div className="flex gap-3 items-center font-semibold">
          <Image
            src={profile ? profile.image : 'logo.png'}
            className="text-sm font-semibold rounded-full cursor-pointer"
            width={45}
            height={45}
            alt="/"
          />
          <div className="flex items-center gap-1 cursor-pointer hover:text-green-500 duration-200">
            Profile
            <ChevronDownIcon size={14} />
          </div>
        </div>
      </DropdownTrigger>
      <DropdownMenu className="dark:bg-primary" variant="flat">
        <DropdownItem key="home" href="/">
          Home
        </DropdownItem>
        <DropdownItem key="account" href="/account/overview">
          Account
        </DropdownItem>
        <DropdownItem key="logout" color="danger">
          Log Out
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default OverviewMenu;
