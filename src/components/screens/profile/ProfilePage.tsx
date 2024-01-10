'use client'
import Field from '@/components/ui/input/Field'
import { useProfile } from '@/hooks/useProfile'
import { Divider } from '@nextui-org/react'

import { UPDATE_PROFILE } from '@/api/graphql/mutations/UpdateProfile'
import Loader from '@/components/ui/loader/Loader'
import UploadField from '@/components/ui/upload-field/UploadField'
import { useMutation } from '@apollo/client'
import { Mail, User } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { FC } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import OverviewMenu from '../overview/OverviewMenu'
import ButtonBack from './ButtonBack'
import CountrySelect from './CountrySelect'
import styles from './ProfilePage.module.scss'

export interface IUserFields {
  email: string
  name: string
  image: string
}

const ProfilePage: FC = () => {
  const {
    register: formRegister,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm<IUserFields>({
    mode: 'onChange',
  })

  const { profile } = useProfile()

  const { push } = useRouter()

  const [mutate, { loading, error }] = useMutation(UPDATE_PROFILE)

  const onSubmit: SubmitHandler<IUserFields> = async (data) => {
    const { name, email, image } = data
    console.log(data)

    const id = profile?.id
    try {
      await mutate({
        variables: {
          id,
          dto: { name, email, image },
        },
      })

      toast.success('Profile successfully updated!')
      push('/account/overview')
    } catch (error) {
      toast.error('Something happened. Please try again!')
      console.log(error)
    }
  }

  if (!profile) return

  return (
    <>
      <div className={styles.profile}>
        <div className={styles.profile__header}>
          <Link href={'/'} className={styles.profile__logo}>
            <Image src={'/logo.png'} width={34} height={34} alt="logo" />
            Spotify
          </Link>
          <div className="flex gap-7 items-center">
            <Link href={'/'} style={{ color: 'white', fontWeight: 700 }}>
              <span className={styles.profile__link}>Premium</span>
            </Link>
            <Link href={'/'} style={{ color: 'white', fontWeight: 700 }}>
              <span className={styles.profile__link}>Поддержка</span>
            </Link>

            <Divider orientation="vertical" className="h-6" />
            {profile && <OverviewMenu />}
          </div>
        </div>
        <form className="w-[800px] p-2 rounded-lg" onSubmit={handleSubmit(onSubmit)}>
          <ButtonBack />
          <h1 className={styles.profile__heading}>Редактирование профиля</h1>
          <div className={styles.profile__login}>
            Имя пользователя <p>{profile && profile.login}</p>
          </div>
          <Field
            {...formRegister('email', {
              required: 'email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'invalid email address',
              },
            })}
            className={styles.profile__field}
            error={errors.email?.message}
            placeholder="Email address"
            Icon={Mail}
            defaultValue={profile.email}
            readOnly
          />
          <Field
            {...formRegister('name', { required: 'email is required' })}
            className={styles.profile__field}
            placeholder="Profile name"
            Icon={User}
            defaultValue={profile.name}
          />
          <CountrySelect />

          <Controller
            control={control}
            name="image"
            defaultValue={profile.image}
            render={({ field: { onChange, value } }) => (
              <UploadField
                onChange={(value) => {
                  onChange(value)
                }}
                value={value}
                defaultValue={profile.image}
              />
            )}
          />
          <div className="bg-gray h-[1px] w-full my-8"></div>
          <div className={styles.buttons}>
            <button type="reset" className={styles.buttons__cancel}>
              Отмена
            </button>
            <button type="submit" className={styles.buttons__submit}>
              {loading ? <Loader size="sm" color="black" /> : 'Сохранить'}
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default ProfilePage
