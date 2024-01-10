import { Mutation } from '@/__generated__/ggl/graphql'
import { UPLOAD_MEDIA_FILE } from '@/api/graphql/mutations/UploadFile'
import { useProfile } from '@/hooks/useProfile'
import { useMutation } from '@apollo/client'
import { ChangeEvent } from 'react'

export const useUploadFile = (onChange: (value: string) => void) => {
  const { profile } = useProfile()
  const [uploadFileMutation] = useMutation<Mutation>(UPLOAD_MEDIA_FILE)

  const uploadFile = async (e: ChangeEvent<HTMLInputElement>) => {
    if (!profile) return null
    const files = e.target.files
    if (!files || files.length === 0) return

    try {
      const file = files[0]
      const { data } = await uploadFileMutation({
        variables: { file },
        onCompleted: (data) => {
          onChange(data.uploadMediaFile.url)
        },
      })

      if (onChange && data) {
        onChange(data.uploadMediaFile.url)
      }
    } catch (error) {
      console.error('Error uploading file:', error)
    }
  }
  return {
    uploadFile,
  }
}
