'use client'
import { useProfile } from '@/hooks/useProfile'
import {
  CreditCard,
  Gem,
  KeyRound,
  KeyboardMusic,
  Pencil,
  RefreshCcw,
  ScrollText,
  ShieldAlert,
  UsersRound,
} from 'lucide-react'
import { FC } from 'react'
import NonePremium from './NonePremium'
import styles from './Overview.module.scss'
import OverviewLink from './OverviewLink'
import ProfilePremium from './ProfilePremium'
const OverviewPage: FC = () => {
  const { profile } = useProfile()
  if (!profile) return

  return (
    <div className={styles.container}>
      {profile.premium ? <ProfilePremium premium={profile.premium} /> : <NonePremium />}

      <div className={styles.block}>
        <h1 className={styles.block}>Аккаунт</h1>
        <OverviewLink href="/account/profile" Icon={Pencil} text="Редактировать профиль" />
        <OverviewLink href="/" Icon={RefreshCcw} text="Восстановление плейлистов" />
      </div>

      <div className={styles.block}>
        <h1 className="font-medium px-4 py-3">Подписка</h1>
        <OverviewLink href="/" Icon={Gem} text="Доступные подписки" />
        <OverviewLink href="/" Icon={KeyboardMusic} text="Управление подпиской" />
        <OverviewLink href="/" Icon={UsersRound} text="Управление учасниками" />
      </div>

      <div className={styles.block}>
        <h1 className="font-medium px-4 py-3">Оплата</h1>
        <OverviewLink href="/" Icon={ScrollText} text="История заказов" />
        <OverviewLink href="/" Icon={CreditCard} text="Сохраненные платежные карты" />
        <OverviewLink href="/" Icon={UsersRound} text="Управление учасниками" />
      </div>

      <div className={styles.block}>
        <h1 className="font-medium px-4 py-3">Безопасность и конфиденциальность</h1>
        <OverviewLink href="/" Icon={KeyRound} text="Смена пароля" />
        <OverviewLink href="/" Icon={ShieldAlert} text="Настройка конфиденциальности" />
      </div>
    </div>
  )
}

export default OverviewPage
