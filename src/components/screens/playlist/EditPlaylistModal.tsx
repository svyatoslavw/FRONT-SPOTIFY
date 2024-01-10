'use client'
import { client } from '@/api/apollo.config'
import { UPDATE_PLAYLIST } from '@/api/graphql/mutations/UpdatePlaylist'
import { GET_PLAYLIST_BY_SLUG } from '@/api/graphql/queries/GetPlaylistBySlug'
import { GET_PROFILE } from '@/api/graphql/queries/GetProfile'
import Field from '@/components/ui/input/Field'
import UploadField from '@/components/ui/upload-field/UploadField'
import { PUBLIC_URL } from '@/config/url.config'
import { IPlaylist } from '@/types/playlist.types'
import { IUser } from '@/types/user.types'
import { generateSlug } from '@/utils/generateSlug'
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@nextui-org/react'
import { FileAudio } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { FC } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

interface IEditModal {
  isOpen: boolean
  onOpenChange: () => void
  profile: IUser
  onClose: () => void
  playlist: IPlaylist
}

export interface IPlaylistFields {
  name: string
  image: string
}

const EditPlaylistModal: FC<IEditModal> = ({
  isOpen,
  onClose,
  onOpenChange,
  profile,
  playlist,
}) => {
  const { replace } = useRouter()

  const {
    register: formRegister,
    handleSubmit,
    formState: { errors, isDirty },
    reset,
    control,
  } = useForm<IPlaylistFields>({
    mode: 'onChange',
  })

  const onSubmit: SubmitHandler<IPlaylistFields> = async (data) => {
    const { image, name } = data
    try {
      const slug = generateSlug(name)
      await client.mutate({
        mutation: UPDATE_PLAYLIST,
        variables: {
          id: playlist.id,
          dto: { name, image },
        },
        refetchQueries: [{ query: GET_PLAYLIST_BY_SLUG, variables: { slug: slug } }, GET_PROFILE],
      })
      toast.success('Playlist successfully updated!')
      replace(PUBLIC_URL.playlist(slug))
      onClose()
      reset()
    } catch (error) {
      toast.error('Something happened. Please try again!')
      console.log(error)
    }
  }

  return (
    <>
      <Modal
        classNames={{
          body: 'bg-primary',
          header: 'bg-primary',
          footer: 'bg-primary',
          closeButton: 'text-slate-600',
        }}
        backdrop="blur"
        motionProps={{
          variants: {
            enter: {
              opacity: 1,
              transition: {
                duration: 0.05,
                ease: 'easeOut',
              },
            },
            exit: {
              opacity: 0,
              transition: {
                duration: 0.05,
                ease: 'easeIn',
              },
            },
          },
        }}
        size="md"
        hideCloseButton={true}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        isDismissable={true}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex text-center justify-center">Update Playlist</ModalHeader>
              <ModalBody className="text-center text-sm">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <Field
                    {...formRegister('name', { required: 'name is required' })}
                    error={errors.name?.message}
                    className="w-full my-8"
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
                          onChange(value)
                        }}
                        value={value}
                        defaultValue={playlist.image}
                      />
                    )}
                  />
                  <Button isDisabled={!isDirty} type="submit" color="secondary" className="w-full">
                    Save changes
                  </Button>
                </form>
              </ModalBody>
              <ModalFooter></ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}

export default EditPlaylistModal
