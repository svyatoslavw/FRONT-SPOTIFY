'use client'
import { AuthDto, Mutation } from '@/__generated__/ggl/graphql'
import { REGISTER_USER } from '@/api/graphql/mutations/Register'
import GoogleAuth from '@/components/auth-buttons/GoogleAuth'
import Button from '@/components/ui/button/Button'
import Field from '@/components/ui/input/Field'
import { PUBLIC_URL } from '@/config/url.config'
import { useAuthRedirect } from '@/hooks/useAuthRedirect'
import { saveToStorage } from '@/services/auth/auth.helper'
import { IRegister } from '@/types/user.types'
import { useMutation } from '@apollo/client'
import clsx from 'clsx'
import { AtSign, Lock, User } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import styles from '../login/Auth.module.scss'

// -------------------------------------------------
// --------------------TO-DO---------------------
// Social Auth dont work with Graph API
// -------------------------------------------------

const RegisterPage: FC = () => {
  useAuthRedirect()
  const { replace } = useRouter()

  const [registerUser] = useMutation<Mutation>(REGISTER_USER, {
    onCompleted: (data) => {
      saveToStorage(data.register)
    },
  })

  const {
    register: formRegister,
    handleSubmit,
    formState: { errors, isValid },
    reset,
    control,
    watch,
  } = useForm<IRegister>({
    mode: 'onChange',
  })

  const onSubmit: SubmitHandler<IRegister> = async (data: AuthDto) => {
    try {
      await registerUser({
        variables: {
          email: data.email,
          name: data.name,
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
          <h1 className={styles.type}>Зарегистрируйтесь и погрузитесь в музыку</h1>
          <Field
            {...formRegister('email', {
              required: 'email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'invalid email address',
              },
            })}
            Icon={AtSign}
            placeholder="Email"
            error={errors.email?.message}
            className="w-full"
          />
          <Field
            {...formRegister('name', {
              required: 'name is required',
            })}
            Icon={User}
            placeholder="Name"
            error={errors.name?.message}
            className="w-full"
          />

          <Field
            {...formRegister('password', {
              required: 'password is required',
              minLength: {
                value: 6,
                message: 'min 6 characters',
              },
            })}
            Icon={Lock}
            placeholder="Password"
            error={errors.password?.message}
            className="w-full"
          />
          <Field
            {...formRegister('passwordConfirmation', {
              required: 'password confirmation is required',
              validate: (val: string) => {
                if (watch('password') != val) {
                  return 'Your passwords do no match'
                }
              },
            })}
            type="password"
            placeholder="Confirm Password"
            error={errors.passwordConfirmation?.message}
            className="w-full"
          />

          <Button className={styles.customBtn}>Next</Button>

          <div className="flex gap-2 items-center text-sm">
            Уже есть аккаунт?
            <Link href={'/auth/login'} className={styles.resetBtn} type="button">
              Войдите в него.
            </Link>
          </div>
          <GoogleAuth position="bottom" type="register" />
        </form>
      </section>
    </div>
  )
}

export default RegisterPage
