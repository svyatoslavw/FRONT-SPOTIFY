import { create } from 'zustand'

interface PlayerStore {
  ids: number[]
  activeId?: number
  volume: number
  isPlaying: boolean
  setId: (id: number) => void
  setIds: (ids: number[]) => void
  setVolume: (volume: number) => void
  setIsPlaying: (isPlaying: boolean) => void
  reset: () => void
}

const usePlayerStore = create<PlayerStore>((set) => ({
  ids: [],
  activeId: undefined,
  volume: 0,
  isPlaying: false,
  setId: (id: number) => set({ activeId: id }),
  setIds: (ids: number[]) => set({ ids }),
  setVolume: (volume: number) => set((state) => ({ volume })),
  setIsPlaying: (isPlaying: boolean) => set((state) => ({ isPlaying })),
  reset: () => set({ ids: [], activeId: undefined }),
}))

export default usePlayerStore
