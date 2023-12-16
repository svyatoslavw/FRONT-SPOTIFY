import { useProfile } from '@/hooks/useProfile'
import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
} from '@nextui-org/react'
import { FC } from 'react'

const AdminMenu: FC = () => {
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
        <DropdownItem key="account" href="/account/overview" aria-label="Account Overview">
          Account
        </DropdownItem>
        <DropdownItem key="profile" href="/user">
          Profile
        </DropdownItem>
        <DropdownItem key="friends">Friends</DropdownItem>
        <DropdownItem key="settings">Settings</DropdownItem>
        <DropdownSection title="Management" showDivider>
          <DropdownItem key="admin" color="success" href="/admin/dashboard">
            Admin dashboard
          </DropdownItem>
          <DropdownItem key="manager" color="warning">
            Manager dashboard
          </DropdownItem>
          <DropdownItem key="moderator" color="warning">
            Moderator dashboard
          </DropdownItem>
        </DropdownSection>
        <DropdownItem key="logout" color="danger">
          Log Out
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}

export default AdminMenu
