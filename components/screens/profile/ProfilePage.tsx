'use client'
import MenuProfileSmall from '@/components/profile-menu/MenuProfileSmall'
import Field from '@/components/ui/input/Field'
import { useOutside } from '@/hooks/useOutside'
import { useProfile } from '@/hooks/useProfile'
import { UserService } from '@/services/user.service'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { FC, useState } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { BiLogoSpotify, BiSolidLockOpenAlt } from 'react-icons/bi'
import { FaMountainCity } from 'react-icons/fa6'
import { HiOutlineMail } from 'react-icons/hi'
import { IoIosArrowBack, IoIosArrowDown, IoMdArrowDropdown } from 'react-icons/io'
import styles from './ProfilePage.module.scss'
export interface IUserFields {
  email: string
  name: string
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

  const data = [
    {
      id: 1,
      value: 'Мужчина',
    },
    {
      id: 2,
      value: 'Женщина',
    },
    {
      id: 3,
      value: 'Мужчина',
    },
    {
      id: 4,
      value: 'Женщина',
    },
  ]
  const { ref, isShow, setIsShow } = useOutside(false)

  const { profile } = useProfile()

  const { push } = useRouter()

  const queryClient = useQueryClient()

  const { mutate, isSuccess, isPending } = useMutation({
    mutationKey: ['update profile'],
    mutationFn: (data: IUserFields) => UserService.updateProfile(data),
    onSuccess(data) {
      queryClient.refetchQueries({ queryKey: ['get profile'] })
      push('/member/settings')
    },
  })
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  const onSubmit: SubmitHandler<IUserFields> = (data) => {
    mutate(data)
    reset()
  }

  if (isSuccess) return <div>Profile successfully updated!</div>
  return (
    <div className="bg-gradient-custom flex flex-col items-center justify-center py-4 gap-8 overflow-hidden overflow-y-hidden">
      <div className="w-[1150px] flex justify-between items-center">
        <div className="flex gap-1 items-center text-2xl font-semibold">
          <BiLogoSpotify size={50} />
          Spotify
        </div>
        <div className="flex gap-7 items-center">
          <Link href={'/'} style={{ color: 'white', fontWeight: 700 }}>
            <span className="hover:text-green-500 text-sm duration-200">Premium</span>
          </Link>
          <Link href={'/'} style={{ color: 'white', fontWeight: 700 }}>
            <span className="hover:text-green-500 text-sm duration-200">Поддержка</span>
          </Link>
          <Link href={'/'} style={{ color: 'white', fontWeight: 700 }}>
            <span className="hover:text-green-500 text-sm duration-200">Загрузить</span>
          </Link>
          <div className={styles.divider}></div>
          {profile && (
            <div
              className="flex gap-3 items-center font-semibold"
              onClick={() => setIsShow(!isShow)}
            >
              <Image
                src={profile.image}
                className="text-sm font-semibold rounded-full"
                width={45}
                height={45}
                alt="/"
              />
              <div className="flex items-center gap-1 cursor-pointer hover:text-green-500 duration-200">
                Профиль
                <IoIosArrowDown size={12} />
              </div>
              <div ref={ref}>{isShow && <MenuProfileSmall />}</div>
            </div>
          )}
        </div>
      </div>
      <form className="w-[800px] p-2 rounded-lg" onSubmit={handleSubmit(onSubmit)}>
        <Link
          href={'overview'}
          className="p-2 flex bg-[#333333] rounded-full hover:scale-105 duration-200 w-[47px] hover:bg-[#262626]"
        >
          <IoIosArrowBack size={30} color="white" />
        </Link>
        <h1 className="font-semibold text-4xl py-3 mt-10 mb-6">Редактирование профиля</h1>
        <div className="text-sm font-semibold mb-12">
          Имя пользователя <p className="text-xs font-normal">{profile && profile.login}</p>
        </div>
        <Field
          {...formRegister('email', { required: 'email is required' })}
          className="w-full my-8"
          placeholder="Адрес элестронной почты"
          Icon={HiOutlineMail}
          defaultValue={profile?.email}
          readOnly
        />
        <Field className="w-full my-8" Icon={BiSolidLockOpenAlt} placeholder="Пароль" readOnly />
        {/* <Field className="w-full my-8" Icon={PiGenderIntersexBold} placeholder="Пол" readOnly /> */}
        {/* <Field
          {...formRegister('name', { required: 'name is required' })}
          className="w-full my-8"
          Icon={BsFillPersonFill}
          defaultValue={profile?.name}
          placeholder="Имя"
        />
        <Field className="w-full my-8" Icon={BsFillPersonLinesFill} placeholder="Login" /> */}
        <Controller
          control={control}
          rules={{
            required: 'email is required',
          }}
          name="email"
          render={({ field }) => (
            <div className="flex w-full ">
              <div
                className="flex items-center justify-between px-4 w-full rounded-md py-3 bg-[#1e1e1e] focus:outline-none text-sm cursor-pointer border-gray border transition focus:border-white"
                onClick={toggleDropdown}
              >
                <span>Select a card</span>
                <IoMdArrowDropdown />
              </div>
              {isDropdownOpen && (
                <ul className={styles.dropdown}>
                  {data.map((card) => (
                    <li key={card.id}>{card.value}</li>
                  ))}
                </ul>
              )}
              <input type="hidden" {...field} />
            </div>
          )}
        />

        <Field
          defaultValue={profile?.country}
          className="w-full mt-8 mb-2"
          Icon={FaMountainCity}
          placeholder="Страна"
        />
        <h6 className="text-xs">Докладніше про те, як змінити країну чи регіон.</h6>

        <div className="bg-gray h-[1px] w-full my-8"></div>

        <div className="w-full flex justify-end pb-20">
          <button type="reset" className="py-3 px-5 font-semibold rounded-3xl text-[#9ba7a7]">
            Отмена
          </button>
          <button
            type="submit"
            className="bg-green-500 py-3 px-5 font-semibold rounded-3xl text-black"
          >
            Сохранить
          </button>
        </div>
      </form>
    </div>
  )
}

export default ProfilePage
