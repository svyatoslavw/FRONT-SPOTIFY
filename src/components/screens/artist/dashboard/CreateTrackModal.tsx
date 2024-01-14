'use client'
import { CREATE_TRACK } from '@/api/graphql/mutations/CreateTrack'
import Field from '@/components/ui/input/Field'
import UploadField from '@/components/ui/upload-field/UploadField'
import { IUser } from '@/types/user.types'
import { useMutation } from '@apollo/client'
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@nextui-org/react'
import { FileAudio } from 'lucide-react'
import { FC } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

interface ICreateModal {
  isOpen: boolean
  onOpenChange: () => void
  profile: IUser
  onClose: () => void
}

export interface ITrackFields {
  name: string
  image: string
  file: string
}

const CreateTrackModal: FC<ICreateModal> = ({ isOpen, onClose, onOpenChange, profile }) => {
  const {
    register: formRegister,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm<ITrackFields>({
    mode: 'onChange',
  })

  const [mutate, { loading, error }] = useMutation(CREATE_TRACK)

  const onSubmit: SubmitHandler<ITrackFields> = async (data) => {
    const { file, image, name } = data
    try {
      await mutate({
        variables: {
          id: profile.id,
          dto: { name, image, file },
        },
      })
      toast.success('Track successfully updated!')
      onClose()
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
              <ModalHeader className="flex text-center justify-center">Create track</ModalHeader>
              <ModalBody className="text-center text-sm">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <Field
                    {...formRegister('name', { required: 'email is required' })}
                    className="w-full my-8"
                    placeholder="Name"
                    error={errors.name?.message}
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
                          onChange(value)
                        }}
                        value={value}
                      />
                    )}
                  />
                  <Button type="submit" isDisabled={loading} color="secondary" className="w-full">
                    Create
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

export default CreateTrackModal
