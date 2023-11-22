import { MediaService } from '@/services/media.service'
import { useMutation } from '@tanstack/react-query'
import { ChangeEvent } from 'react'
import toast from 'react-hot-toast'

export const useUploadFile = (onChange: (...e: any) => void) => {
  const { mutate } = useMutation({
    mutationKey: ['upload file'],
    mutationFn: (data: FormData) => MediaService.upload(data),
    onSuccess({ data }) {
      onChange(data)
    },
    onError(error: any) {
      toast(error.message)
    },
  })

  const uploadFile = async (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files || files.length === 0) return

    const formData = new FormData()

    Array.from(files).forEach((file) => {
      formData.append('media', file)
    })

    await mutate(formData)
  }

  return {
    uploadFile,
  }
}
