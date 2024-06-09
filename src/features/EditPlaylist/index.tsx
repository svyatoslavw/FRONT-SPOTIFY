'use client';
import { Playlist } from '@/__generated__/ggl/graphql';
import { client } from '@/shared/api/apollo.config';
import { UPDATE_PLAYLIST } from '@/shared/api/graphql/mutations/UpdatePlaylist';
import { GET_PLAYLIST_BY_SLUG } from '@/shared/api/graphql/queries/GetPlaylistBySlug';
import { GET_PROFILE } from '@/shared/api/graphql/queries/GetProfile';
import { PUBLIC_URL } from '@/shared/lib/config/url.config';
import { generateSlug } from '@/shared/lib/utils';
import { Button } from '@/shared/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from '@/shared/ui/dialog';
import Field from '@/shared/ui/field';
import { UploadField } from '@/shared/ui/upload-field/UploadField';
import { FileAudio, PencilIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

interface IEditModal {
  playlist: Playlist;
}

export interface IPlaylistFields {
  name: string;
  image: string;
}

const EditPlaylist = ({ playlist }: IEditModal) => {
  const { replace } = useRouter();

  const {
    register: formRegister,
    handleSubmit,
    formState: { errors, isDirty },
    reset,
    control,
  } = useForm<IPlaylistFields>({
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<IPlaylistFields> = async (data) => {
    const { image, name } = data;
    try {
      const slug = generateSlug(name);
      await client.mutate({
        mutation: UPDATE_PLAYLIST,
        variables: {
          id: playlist.id,
          dto: { name, image },
        },
        refetchQueries: [
          { query: GET_PLAYLIST_BY_SLUG, variables: { slug: slug } },
          GET_PROFILE,
        ],
      });
      toast.success('Playlist successfully updated!');
      replace(PUBLIC_URL.playlist(slug));
      reset();
    } catch (error) {
      toast.error('Something happened. Please try again!');
      console.log(error);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <PencilIcon color="#1ed760" size={24} />
        </Button>
      </DialogTrigger>
      <DialogContent className="dark">
        <DialogHeader className="flex text-center text-white justify-center">
          Update Playlist
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Field
            {...formRegister('name', { required: 'name is required' })}
            error={errors.name?.message}
            className="text-white w-full my-8"
            placeholder="Name"
            defaultValue={playlist.name}
            Icon={FileAudio}
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
                defaultValue={playlist.image}
              />
            )}
          />
          <Button
            disabled={!isDirty}
            type="submit"
            color="secondary"
            className="w-full"
          >
            Save changes
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditPlaylist;
