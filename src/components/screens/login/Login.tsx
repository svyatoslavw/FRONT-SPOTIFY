'use client'

// -------------------------------------------------
// --------------------TO-DO---------------------
// Social Auth dont work with Graph API
// -------------------------------------------------

import Button from '@/components/ui/button/Button'
import Field from '@/components/ui/input/Field'
import { useAuth } from '@/hooks/useAuth'
import { useAuthRedirect } from '@/hooks/useAuthRedirect'
import clsx from 'clsx'
import Link from 'next/link'
import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { AuthDto, Mutation } from '@/__generated__/ggl/graphql'
import { LOGIN_USER } from '@/api/graphql/mutations/Login'
import GoogleAuth from '@/components/auth-buttons/GoogleAuth'
import { PUBLIC_URL } from '@/config/url.config'
import { saveToStorage } from '@/services/auth/auth.helper'
import { ILogin } from '@/types/user.types'
import { useMutation } from '@apollo/client'
import { AtSign, Lock } from 'lucide-react'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'
import styles from './Auth.module.scss'

const LoginPage: FC = () => {
  useAuthRedirect()

  const { user } = useAuth()
  const { replace } = useRouter()
  const [loginUser] = useMutation<Mutation>(LOGIN_USER, {
    onCompleted: (data) => {
      saveToStorage(data.login)
    },
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

  const onSubmit: SubmitHandler<ILogin> = async (data: AuthDto) => {
    try {
      await loginUser({
        variables: {
          email: data.email,
          password: data.password,
        },
      })
      reset()
      replace(PUBLIC_URL.home())
    } catch (error: any) {
      toast.error(`${error.message}`)
    }
  }

  return (
    <div className={styles.login}>
      <section>
        <form onSubmit={handleSubmit(onSubmit)} className={clsx('shadow-xl', styles.form)}>
          <GoogleAuth position="top" type="login" />
          <h1 className={styles.type}>Войти в Spotify</h1>
          <Field
            Icon={AtSign}
            {...formRegister('email', {
              required: 'email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'invalid email address',
              },
            })}
            error={errors.email?.message}
            placeholder="Email"
            className="w-full"
          />

          <Field
            Icon={Lock}
            {...formRegister('password', {
              required: 'password is required',
              minLength: {
                value: 6,
                message: 'min 6 characters',
              },
            })}
            type="password"
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
