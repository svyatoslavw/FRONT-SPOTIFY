import { useUserStore } from '@/stores/userStore'
import { useStore } from 'zustand'

export const useAuth = () => {
  return useStore(useUserStore)
}
