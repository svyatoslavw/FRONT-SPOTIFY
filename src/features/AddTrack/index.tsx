import { User } from '@/__generated__/ggl/graphql';
import { CREATE_TRACK } from '@/shared/api/graphql/mutations/CreateTrack';
import { Button } from '@/shared/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/shared/ui/dialog';
import Field from '@/shared/ui/field';
import { UploadField } from '@/shared/ui/upload-field/UploadField';
import { useMutation } from '@apollo/client';
import { FileAudioIcon } from 'lucide-react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

export interface ITrackFields {
  name: string;
  image: string;
  file: string;
}

const AddTrack = ({ profile }: { profile: User }) => {
  const {
    register: formRegister,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm<ITrackFields>({
    mode: 'onChange',
  });

  const [mutate, { loading, error }] = useMutation(CREATE_TRACK);

  const onSubmit: SubmitHandler<ITrackFields> = async (data) => {
    const { file, image, name } = data;
    try {
      await mutate({
        variables: {
          id: profile?.id,
          dto: { name, image, file },
        },
      });
      toast.success('Track successfully updated!');
    } catch (error) {
      toast.error('Something happened. Please try again!');
      console.log(error);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={'outline'} className="rounded-xl bg-transparent">
          Add track
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] dark">
        <DialogHeader>
          <DialogTitle className="text-white">Create track</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Field
              {...formRegister('name', { required: 'email is required' })}
              className="w-full my-8"
              placeholder="Name"
              error={errors.name?.message}
              Icon={FileAudioIcon}
            />
            <Controller
              control={control}
              name="image"
              render={({ field: { onChange, value } }) => (
                <UploadField
                  onChange={(value) => {
                    onChange(value);
                  }}
                  value={value}
                  defaultValue="/logo.png"
                />
              )}
            />
            <Controller
              control={control}
              name="file"
              render={({ field: { onChange, value } }) => (
                <UploadField
                  file
                  onChange={(value) => {
                    onChange(value);
                  }}
                  value={value}
                />
              )}
            />
            <Button
              type="submit"
              disabled={loading}
              color="secondary"
              className="w-full"
            >
              Create
            </Button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export { AddTrack };
