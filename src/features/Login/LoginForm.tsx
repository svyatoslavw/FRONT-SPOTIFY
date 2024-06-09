import Link from 'next/link';

import { useLoginForm } from '@/features/Login/useLoginForm';
import { Button } from '@/shared/ui/button';
import Field from '@/shared/ui/field';
import { AtSignIcon, LockIcon } from 'lucide-react';

const LoginForm = () => {
  const { form, functions } = useLoginForm();

  return (
    <form
      onSubmit={functions.onSubmit}
      className="shadow-xl form bg-black flex flex-col items-center justify-center gap-5 w-[500px] p-5 rounded-[20px"
    >
      <h1 className="text-3xl mb-2 font-bold text-center">Sign in Spotify</h1>
      <Field
        Icon={AtSignIcon}
        {...form.register('email', {
          required: 'email is required',
        })}
        error={form.formState.errors.email?.message}
        placeholder="Email"
        type="email"
        className="w-full"
      />

      <Field
        Icon={LockIcon}
        {...form.register('password', {
          required: 'password is required',
          minLength: {
            value: 6,
            message: 'min 6 characters',
          },
        })}
        type="password"
        placeholder="Password"
        className="w-full"
        error={form.formState.errors.password?.message}
      />

      <Button
        variant={'secondary'}
        className="px-14 py-2 text-sm cursor-pointer transition-all duration-500"
      >
        Sign in
      </Button>

      <div className="flex gap-2 items-center text-sm">
        Don't have an account?
        <Link
          href={'/auth/register'}
          className="border-none capitalize text-sm underline hover:text-green-500 duration-300 cursor-pointer"
          type="button"
        >
          Sign up
        </Link>
      </div>
    </form>
  );
};

export { LoginForm };
