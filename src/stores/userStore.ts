import { UserRole } from '@/__generated__/ggl/graphql'
import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

export interface IUserSubset {
  id: number
  name: string
  email: string
  role: UserRole
  //image: string
}

export interface IUserStore {
  user: IUserSubset | null
  setUser: (user: IUserSubset | null) => void
}

export const userStore = create<IUserStore>()(
  devtools(
    persist(
      (set) => ({
        user: null,
        setUser: (user) =>
          set(() => ({
            user,
          })),
      }),
      {
        name: 'user-storage',
      },
    ),
  ),
)

export const saveUserToStore = (user: IUserSubset | null) => {
  if (user) {
    const updatedUser = {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      //image: user.image,
    }
    userStore.setState({ user: updatedUser })
  } else {
    userStore.setState({ user: null })
  }
}
