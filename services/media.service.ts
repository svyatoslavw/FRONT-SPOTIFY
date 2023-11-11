import { instance } from '@/api/api.interceptor'

export interface IMediaResponce {
  name: string
  url: string
}

export const MediaService = {
  async upload(media: FormData) {
    return instance.post<string[]>('/media', media, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })
  },
}
