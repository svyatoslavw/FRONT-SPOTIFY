'use client'
import { ILogin } from '@/app/store/user/user.interface'
import Button from '@/components/ui/button/Button'
import Field from '@/components/ui/input/Field'
import { useAuth } from '@/hooks/useAuth'
import { useAuthRedirect } from '@/hooks/useAuthRedirect'
import clsx from 'clsx'
import Link from 'next/link'
import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { BiSolidLockOpenAlt } from 'react-icons/bi'
import { HiOutlineMail } from 'react-icons/hi'

import { LOGIN_USER } from '@/api/graphql/mutations/Login'
import GoogleAuth from '@/components/auth-buttons/GoogleAuth'
import { saveToStorage } from '@/services/auth/auth.helper'
import { useMutation } from '@apollo/client'
import toast from 'react-hot-toast'
import '../../../app/globals.css'
import styles from './Auth.module.scss'
const LoginPage: FC = () => {
  useAuthRedirect()

  const { user } = useAuth()

  const [loginUser, { data, loading }] = useMutation(LOGIN_USER, {
    onCompleted: (data) => {},
  })

  const {
    register: formRegister,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm<ILogin>({
    mode: 'onChange',
  })

  const onSubmit: SubmitHandler<ILogin> = async (data) => {
    try {
      const result = await loginUser({
        variables: {
          email: data.email,
          password: data.password,
        },
      })

      saveToStorage(result.data.login)
      console.log(result.data.login)

      reset()
    } catch (error: any) {
      toast.error(`${error.message}`)
    }
  }

  return (
    <div className={styles.login}>
      <section>
        <form onSubmit={handleSubmit(onSubmit)} className={clsx('shadow-xl', styles.form)}>
          <h1 className={styles.type}>Войти в Spotify</h1>
          <GoogleAuth position="top" type="login" />
          <Field
            Icon={HiOutlineMail}
            {...formRegister('email', {
              required: 'email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'invalid email address',
              },
            })}
            placeholder="Email"
            className="w-full"
            error={errors.email?.message}
          />

          <Field
            Icon={BiSolidLockOpenAlt}
            {...formRegister('password', {
              required: 'password is required',
              minLength: {
                value: 6,
                message: 'min 6 characters',
              },
            })}
            placeholder="Password"
            className="w-full"
            error={errors.password?.message}
          />

          <Button className={styles.customBtn}>Ввойти</Button>

          <div className="flex gap-2 items-center text-sm">
            Нет аккаунта?
            <Link href={'/auth/register'} className={styles.resetBtn} type="button">
              Регистрация в Spotify
            </Link>
          </div>
        </form>
      </section>
    </div>
  )
}

export default LoginPage
