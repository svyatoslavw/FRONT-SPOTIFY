import { AuthDto, Mutation } from '@/__generated__/ggl/graphql';
import { saveToStorage } from '@/entities/user/api/auth.helper';
import { REGISTER_USER } from '@/shared/api/graphql/mutations/Register';
import { PUBLIC_URL } from '@/shared/lib/config/url.config';
import { IRegister } from '@/shared/lib/types';
import { useMutation } from '@apollo/client';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

export const useRegisterForm = () => {
  const { replace } = useRouter();

  const [registerUser] = useMutation<Mutation>(REGISTER_USER, {
    onCompleted: (data) => {
      saveToStorage(data.register);
    },
  });

  const form = useForm<IRegister>({
    mode: 'onChange',
  });

  const onSubmit = form.handleSubmit(async (data: AuthDto) => {
    try {
      await registerUser({
        variables: {
          email: data.email,
          name: data.name,
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
    functions: {
      onSubmit,
    },
  };
};
