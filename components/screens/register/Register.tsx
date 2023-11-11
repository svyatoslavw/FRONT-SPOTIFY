'use client'
import { IRegister } from '@/app/store/user/user.interface'
import GoogleAuth from '@/components/auth-buttons/GoogleAuth'
import Button from '@/components/ui/button/Button'
import Field from '@/components/ui/input/Field'
import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'
import { useAuthRedirect } from '@/hooks/useAuthRedirect'
import clsx from 'clsx'
import Link from 'next/link'
import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import '../../../app/globals.css'
import styles from '../login/Auth.module.scss'

const RegisterPage: FC = () => {
  useAuthRedirect()

  const { isLoading } = useAuth()

  const { login, register } = useActions()

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

  const onSubmit: SubmitHandler<IRegister> = (data) => {
    register(data)
    reset()
    console.log(data)
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
            placeholder="Email"
            error={errors.email?.message}
            className="w-full"
          />
          <Field
            {...formRegister('name', {
              required: 'name is required',
            })}
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
