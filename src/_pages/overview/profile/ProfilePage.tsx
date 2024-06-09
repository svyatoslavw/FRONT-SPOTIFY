'use client';
import Field from '@/shared/ui/input/field';

import { useProfile } from '@/entities/user/models/useProfile';
import { UPDATE_PROFILE } from '@/shared/api/graphql/mutations/UpdateProfile';
import UploadField from '@/shared/ui/upload-field/UploadField';
import { useMutation } from '@apollo/client';
import { ChevronLeftIcon, LoaderIcon, Mail, User } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FC } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import CountrySelect from './CountrySelect';

export interface IUserFields {
  email: string;
  name: string;
  image: string;
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
  });

  const { profile } = useProfile();

  const { push } = useRouter();

  const [mutate, { loading }] = useMutation(UPDATE_PROFILE);

  const onSubmit: SubmitHandler<IUserFields> = async (data) => {
    const { name, email, image } = data;
    console.log(data);

    const id = profile?.id;
    try {
      await mutate({
        variables: {
          id,
          dto: { name, email, image },
        },
      });

      toast.success('Profile successfully updated!');
      push('/account/overview');
    } catch (error) {
      toast.error('Something happened. Please try again!');
      console.log(error);
    }
  };

  if (!profile) return;

  return (
    <>
      <div className="bg-gradient-custom min-h-screen text-zinc-200 flex flex-col items-center justify-center py-4 gap-8 overflow-hidden overflow-y-hidden">
        <div className="w-[1150px] flex justify-between items-center">
          <Link
            href={'/'}
            className="flex gap-1 cursor-pointer items-center text-2xl font-semibold"
          >
            <Image src={'/logo.png'} width={34} height={34} alt="logo" />
            Spotify
          </Link>
          <div className="flex gap-7 items-center">
            <Link href={'/'} style={{ color: 'white', fontWeight: 700 }}>
              <span className="hover:text-green-500 text-sm duration-200">
                Premium
              </span>
            </Link>
            <Link href={'/'} style={{ color: 'white', fontWeight: 700 }}>
              <span className="hover:text-green-500 text-sm duration-200">
                Support
              </span>
            </Link>

            {profile && (
              <div className="flex gap-3 items-center font-semibold">
                <Image
                  src={profile ? profile.image : 'logo.png'}
                  className="text-sm font-semibold rounded-full cursor-pointer"
                  width={45}
                  height={45}
                  alt="/"
                />
                <Link
                  href={'/user'}
                  className="flex items-center gap-1 cursor-pointer hover:text-green-500 duration-200"
                >
                  Profile
                </Link>
              </div>
            )}
          </div>
        </div>
        <form
          className="w-[800px] p-2 rounded-lg"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Link
            href={'overview'}
            className="p-2 flex bg-[#333333] rounded-full hover:scale-105 duration-200 w-[47px] hover:bg-[#262626]"
          >
            <ChevronLeftIcon size={30} color="white" />
          </Link>
          <h1 className="font-semibold text-4xl py-3 mt-10 mb-6">
            Редактирование профиля
          </h1>
          <div className="text-sm font-semibold mb-12">
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
            className="w-full my-8"
            error={errors.email?.message}
            placeholder="Email address"
            Icon={Mail}
            defaultValue={profile.email}
            readOnly
          />
          <Field
            {...formRegister('name', { required: 'email is required' })}
            className="w-full my-8"
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
                  onChange(value);
                }}
                value={value}
                defaultValue={profile.image}
              />
            )}
          />
          <div className="bg-gray h-[1px] w-full my-8"></div>
          <div className="w-full flex justify-end">
            <button
              type="reset"
              className="py-3 px-5 font-semibold rounded-3xl text-[#9ba7a7]"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-green-500 w-28 font-semibold rounded-3xl text-black"
            >
              {loading ? (
                <LoaderIcon className="text-white animate-spin" />
              ) : (
                'Сохранить'
              )}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ProfilePage;
