import { client } from '@/api/apollo.config'
import { ADMIN_URL } from '@/config/url.config'
import { useProfile } from '@/hooks/useProfile'
import { removeFromStorage } from '@/services/auth/auth.helper'
import { EnumUserRoles } from '@/types/user.types'
import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
} from '@nextui-org/react'
import { FC } from 'react'
import toast from 'react-hot-toast'

const HeaderMenu: FC = () => {
  const { profile } = useProfile()
  const handler = async () => {
    try {
      await client.clearStore().then(() => removeFromStorage())
    } catch (error) {
      toast.error('Errored logout')
    }
  }
  return (
    <>
      {profile && profile?.role === EnumUserRoles.ADMIN && (
        <Dropdown
          classNames={{
            content: 'bg-primary',
          }}
          placement="bottom-end"
        >
          <DropdownTrigger>
            <Avatar className="transition-transform" src={profile?.image} />
          </DropdownTrigger>
          <DropdownMenu className="dark:bg-primary" variant="faded">
            <DropdownItem
              title="Account"
              key="account"
              href="/account/overview"
              aria-label="Account Overview"
            />
            <DropdownItem title="Profile" key="profile" href="/user" aria-label="Profile" />
            <DropdownItem isDisabled title="Friends" key="friends" aria-label="Friends" />
            <DropdownItem title="Settings" key="settings" aria-label="Settings" />
            <DropdownSection title="Management" showDivider>
              <DropdownItem
                key="admin"
                title="Admin dashboard"
                color="success"
                href={ADMIN_URL.root('dashboard')}
                aria-label="Admin"
              />
              <DropdownItem
                key="manager"
                title="Manager dashboard"
                color="warning"
                aria-label="Manager"
              />
              <DropdownItem
                key="moderator"
                title="Moderator dashboard"
                color="warning"
                aria-label="Moderator"
              />
            </DropdownSection>
            <DropdownItem
              key="logout"
              color="danger"
              title="Log Out"
              onClick={handler}
              aria-label="Logout"
            />
          </DropdownMenu>
        </Dropdown>
      )}
      {profile && profile?.role === EnumUserRoles.USER && (
        <Dropdown
          classNames={{
            content: 'bg-primary ',
          }}
          placement="bottom-end"
        >
          <DropdownTrigger>
            <Avatar className="transition-transform" src={profile.image} />
          </DropdownTrigger>
          <DropdownMenu className="dark:bg-primary" variant="faded">
            <DropdownItem key="account" title="Account" href="/account/overview" />
            <DropdownItem aria-label="Profile" title="Profile" key="profile" href="/user" />
            <DropdownItem aria-label="Settings" title="Settings" key="settings" />
            <DropdownItem aria-label="Friends" title="Friends" isDisabled key="friends" />

            {/* {!profile.premium && (
              <DropdownItem key="premium" href="/premium" color="secondary">
                Premium
              </DropdownItem>
            )} */}
            <DropdownItem
              aria-label="Log Out"
              title="Log Out"
              key="logout"
              color="danger"
              onClick={handler}
            />
          </DropdownMenu>
        </Dropdown>
      )}
      {profile && profile?.role === EnumUserRoles.ARTIST && (
        <Dropdown
          classNames={{
            content: 'bg-primary ',
          }}
          placement="bottom-end"
        >
          <DropdownTrigger>
            <Avatar className="transition-transform" src={profile.image} />
          </DropdownTrigger>
          <DropdownMenu className="dark:bg-primary" variant="faded">
            <DropdownItem key="account" title="Account" href="/account/overview" />
            <DropdownItem aria-label="Profile" title="Profile" key="profile" href="/user" />
            <DropdownItem aria-label="Settings" title="Settings" key="settings" />
            <DropdownItem aria-label="Friends" title="Friends" isDisabled key="friends" />
            <DropdownSection title="Management" showDivider>
              <DropdownItem
                key="artist"
                href="/artist/dashboard"
                title="Artist dashboard"
                color="warning"
                aria-label="Moderator"
              />
            </DropdownSection>
            <DropdownItem
              aria-label="Log Out"
              title="Log Out"
              key="logout"
              color="danger"
              onClick={handler}
            />
          </DropdownMenu>
        </Dropdown>
      )}
    </>
  )
}

export default HeaderMenu
