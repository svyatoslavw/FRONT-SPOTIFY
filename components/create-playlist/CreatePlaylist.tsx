'use client'
import { IMediaResponce } from '@/services/media.service'
import { UserService } from '@/services/user.service'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { FC, useState } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { FaMountainCity } from 'react-icons/fa6'
import { MdOutlineDriveFileRenameOutline } from 'react-icons/md'
import Field from '../ui/input/Field'
import Loader from '../ui/loader/Loader'
import UploadField from '../ui/upload-field/UploadField'

export interface IUserFields {
  email: string
  name: string
  image: string
}

const CreatePlaylist: FC = () => {
  const {
    register: formRegister,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm<IUserFields>({
    mode: 'onChange',
  })
  const queryClient = useQueryClient()

  const { mutate, isSuccess, isPending, isError } = useMutation({
    mutationKey: ['update profile'],
    mutationFn: (data: IUserFields) => UserService.updateProfile(data),
    onSuccess(data) {
      queryClient.refetchQueries({ queryKey: ['profile'] })
    },
  })
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  const onSubmit: SubmitHandler<IUserFields> = (data) => {
    mutate(data)
    reset()
    if (isSuccess) toast.success('Profile successfully updated!')
    if (isError) toast.error('Something happened. Please try again!')
  }
  return (
    <form className=" p-2 rounded-lg" onSubmit={handleSubmit(onSubmit)}>
      <h1 className="font-semibold text-4xl py-3 mt-10 mb-6">Create Playlist</h1>
      <div className="text-sm font-semibold mb-12"></div>
      <Field
        {...formRegister('email', { required: 'email is required' })}
        className="w-full my-8"
        placeholder="Name"
        Icon={MdOutlineDriveFileRenameOutline}
        readOnly
      />

      {/* <Field className="w-full my-8" Icon={PiGenderIntersexBold} placeholder="Пол" readOnly /> */}
      {/* <Field
          {...formRegister('name', { required: 'name is required' })}
          className="w-full my-8"
          Icon={BsFillPersonFill}
          defaultValue={profile?.name}
          placeholder="Имя"
        />
        <Field className="w-full my-8" Icon={BsFillPersonLinesFill} placeholder="Login" /> */}
      {/* <Controller
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
        /> */}

      <Field className="w-full my-8 mb-2" Icon={FaMountainCity} placeholder="Страна" readOnly />
      <Controller
        control={control}
        name="image"
        render={({ field: { onChange, value } }) => (
          <UploadField
            onChange={(value: IMediaResponce) => {
              onChange(value.url)
            }}
            value={value}
          />
        )}
      />
      <div className="w-full flex justify-end pb-20">
        <button type="reset" className="py-3 px-5 font-semibold rounded-3xl text-[#9ba7a7]">
          Отмена
        </button>
        <button type="submit" className="bg-green-500 w-28 font-semibold rounded-3xl text-black">
          {isPending ? <Loader size="sm" /> : 'Сохранить'}
        </button>
      </div>
    </form>
  )
}

export default CreatePlaylist
