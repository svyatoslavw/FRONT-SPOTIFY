import { useStore } from 'zustand';
import { useUserStore } from './userStore';

export const useAuth = () => {
  return useStore(useUserStore);
};
