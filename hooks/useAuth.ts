import { userStore } from '@/app/stores/userStore'
import { useStore } from 'zustand'

export const useAuth = () => {
  return useStore(userStore)
}
