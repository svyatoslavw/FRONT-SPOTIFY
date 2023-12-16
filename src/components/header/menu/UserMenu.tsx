import { useProfile } from '@/hooks/useProfile'
import { Avatar, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@nextui-org/react'
import { FC } from 'react'

const UserMenu: FC = () => {
  const { profile, error, loading } = useProfile()
  return (
    <Dropdown className="dark" placement="bottom-end">
      <DropdownTrigger>
        <Avatar
          className="transition-transform"
          src={!loading && profile ? profile.image : '/logo.png'}
        />
      </DropdownTrigger>
      <DropdownMenu className="dark:bg-primary" variant="flat">
        <DropdownItem key="account" href="/account/overview">
          Account
        </DropdownItem>
        <DropdownItem key="profile" href="/user">
          Profile
        </DropdownItem>
        <DropdownItem key="settings">Settings</DropdownItem>
        <DropdownItem key="friends">Friends</DropdownItem>
        <DropdownItem key="premium" color="secondary">
          Premium
        </DropdownItem>
        <DropdownItem key="logout" color="danger">
          Log Out
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}

export default UserMenu
