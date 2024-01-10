import { useProfile } from '@/hooks/useProfile'
import { AudioLinesIcon } from 'lucide-react'
import Image from 'next/image'
import styles from './Overview.module.scss'

const NonePremium = () => {
  const { profile } = useProfile()
  if (!profile) return
  return (
    <div className={styles.premium}>
      <div className={styles.premium__header}>
        <h6 className="text-[10px]">Моя подписка</h6>
        <AudioLinesIcon size={30} color="white" />
      </div>

      <h1 className={styles.premium__nonetype}>NONE Premium</h1>
      <Image
        src={profile.image}
        className="text-sm font-semibold rounded-full"
        width={30}
        height={30}
        alt="/"
      />
      <p className={styles.premium__decsription}>Вы участник Spotify сообщества</p>
    </div>
  )
}

export default NonePremium
