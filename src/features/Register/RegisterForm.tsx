import { Button } from '@/shared/ui/button';
import Field from '@/shared/ui/field';
import { AtSign, Lock, User } from 'lucide-react';
import Link from 'next/link';
import { useRegisterForm } from './useRegisterForm';

const RegisterForm = () => {
  const { form, functions } = useRegisterForm();

  return (
    <form
      onSubmit={functions.onSubmit}
      className="shadow-xl form bg-black flex flex-col items-center justify-center gap-5 w-[500px] p-5 rounded-[20px"
    >
      <h1 className="text-3xl mb-2 font-bold text-center">
        Sign up and immerse yourself in music
      </h1>
      <Field
        {...form.register('email', {
          required: 'email is required',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'invalid email address',
          },
        })}
        Icon={AtSign}
        placeholder="Email"
        error={form.formState.errors.email?.message}
        className="w-full"
      />
      <Field
        {...form.register('name', {
          required: 'name is required',
        })}
        Icon={User}
        placeholder="Name"
        error={form.formState.errors.name?.message}
        className="w-full"
      />

      <Field
        {...form.register('password', {
          required: 'password is required',
          minLength: {
            value: 6,
            message: 'min 6 characters',
          },
        })}
        Icon={Lock}
        placeholder="Password"
        error={form.formState.errors.password?.message}
        className="w-full"
      />
      <Field
        {...form.register('passwordConfirmation', {
          required: 'password confirmation is required',
          validate: (val: string) => {
            if (form.watch('password') != val) {
              return 'Your passwords do no match';
            }
          },
        })}
        Icon={Lock}
        type="password"
        placeholder="Confirm Password"
        error={form.formState.errors.passwordConfirmation?.message}
        className="w-full"
      />

      <Button
        variant={'secondary'}
        className="px-14 py-2 text-sm cursor-pointer transition-all duration-500"
      >
        Next
      </Button>

      <div className="flex gap-2 items-center text-sm">
        Already have an account?
        <Link
          href={'/auth/login'}
          className="border-none capitalize text-sm underline hover:text-green-500 duration-300 cursor-pointer"
          type="button"
        >
          Sign in.
        </Link>
      </div>
    </form>
  );
};

export { RegisterForm };
