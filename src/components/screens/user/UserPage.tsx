'use client'
import { useProfile } from '@/hooks/useProfile'
import { FC } from 'react'
import ProfileHeader from './profile-header/ProfileHeader'

const UserPage: FC = () => {
  const { profile, loading } = useProfile()

  return (
    <section>
      {profile && !loading && <ProfileHeader profile={profile} />}
      <div className="h-full w-full"></div>
    </section>
  )
}

export default UserPage
