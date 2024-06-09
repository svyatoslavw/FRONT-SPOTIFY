import { AuthDto, Mutation } from '@/__generated__/ggl/graphql';
import { saveToStorage } from '@/entities/user/api/auth.helper';
import { LOGIN_USER } from '@/shared/api/graphql/mutations/Login';
import { PUBLIC_URL } from '@/shared/lib/config/url.config';
import { ILogin } from '@/shared/lib/types';
import { useMutation } from '@apollo/client';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

export const useLoginForm = () => {
  const { replace } = useRouter();
  const [loginUser] = useMutation<Mutation>(LOGIN_USER, {
    onCompleted: (data) => {
      saveToStorage(data.login);
    },
  });

  const form = useForm<ILogin>({
    mode: 'onChange',
  });

  const onSubmit = form.handleSubmit(async (data: AuthDto) => {
    try {
      await loginUser({
        variables: {
          email: data.email,
          password: data.password,
        },
      });
      form.reset();
      replace(PUBLIC_URL.home());
    } catch (error: any) {
      toast.error(`${error.message}`);
    }
  });

  return {
    form,
    functions: { onSubmit },
  };
};
