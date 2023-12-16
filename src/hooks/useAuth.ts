import { userStore } from '@/stores/userStore'
import { useStore } from 'zustand'

export const useAuth = () => {
  return useStore(userStore)
}
