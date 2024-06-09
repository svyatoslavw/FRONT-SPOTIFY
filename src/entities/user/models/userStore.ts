import { UserRole } from '@/__generated__/ggl/graphql';
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { removeFromStorage } from '../api/auth.helper';

export interface IUserSubset {
  id: number;
  name: string;
  email: string;
  role: UserRole;
}

export interface IUserStore {
  user: IUserSubset | null;
  setUser: (user: IUserSubset | null) => void;
  logout: () => void;
}

export const useUserStore = create<IUserStore>()(
  devtools(
    persist(
      (set) => ({
        user: null,
        setUser: (user) =>
          set(() => ({
            user,
          })),
        logout: () => {
          set({
            user: null,
          }),
            removeFromStorage();
        },
      }),
      {
        name: 'user',
        getStorage: () => localStorage,
      }
    )
  )
);

export const logout = () => {
  useUserStore.setState({ user: null });
};

export const saveUserToStore = (user: IUserSubset | null) => {
  if (user) {
    const updatedUser = {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    };
    useUserStore.setState({ user: updatedUser });
  } else {
    useUserStore.setState({ user: null });
  }
};
