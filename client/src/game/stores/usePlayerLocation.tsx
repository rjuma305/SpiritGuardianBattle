import create from 'zustand'

interface PlayerLocationState {
  regionId: string
  setRegion: (id: string) => void
}

const STORAGE_KEY = 'player-region'

export const usePlayerLocation = create<PlayerLocationState>(set => ({
  regionId: localStorage.getItem(STORAGE_KEY) || 'forest',
  setRegion: id => {
    set({ regionId: id })
    localStorage.setItem(STORAGE_KEY, id)
  },
}))
