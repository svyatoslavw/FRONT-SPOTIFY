'use client'
import { useProfile } from '@/hooks/useProfile'
import { average } from 'color.js'
import { FC, useEffect, useState } from 'react'
import Header from '../../header/Header'
import ProfileHeader from './profile-header/ProfileHeader'

const UserPage: FC = () => {
  const { profile } = useProfile()

  const [color, setColor] = useState<string>('')
  useEffect(() => {
    if (profile) {
      average(profile.image)
        .then((result: any) => {
          setColor(result)
        })
        .catch((error) => {
          console.error('Error calculating color:', error)
        })
    }
    console.log(color)
  }, [profile])

  return (
    <div>
      <div
        style={{
          background: `linear-gradient(to bottom, rgba(${color}, 1), rgba(${color}, 0.05))`,
        }}
        className="rounded-t-lg rounded-r-lg"
      >
        <Header />
        {profile && <ProfileHeader profile={profile} />}
      </div>

      <div className="h-full w-full"></div>
    </div>
  )
}

export default UserPage
