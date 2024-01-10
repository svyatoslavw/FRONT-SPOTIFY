import { useProfile } from '@/hooks/useProfile'
import { IPremium } from '@/types/premium.types'
import { AudioLines } from 'lucide-react'
import { FC } from 'react'
import styles from './Overview.module.scss'

const ProfilePremium: FC<{ premium: IPremium }> = ({ premium }) => {
  const { profile } = useProfile()
  if (!profile) return null
  return (
    <div className={styles.premium}>
      <div className={styles.premium__header}>
        <h6 className="text-[10px]">My subscription</h6>
        <AudioLines size={30} color="#15b37f" />
      </div>

      <h1 className={styles.premium__type}>{premium.type}</h1>
      <p className={styles.premium__decsription}>You are a premium member {premium.type}</p>
    </div>
  )
}

export default ProfilePremium
