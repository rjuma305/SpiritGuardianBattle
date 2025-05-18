import create from 'zustand'
import { Element } from '../elements'

export interface SpiritGuardian {
  id: string
  name: string
  level: number
  element: Element
  experience: number
}

interface SpiritGuardianState {
  guardian: SpiritGuardian | null
  setGuardian: (g: SpiritGuardian) => void
  gainExp: (amount: number) => void
  /** Persist the current guardian to localStorage */
  saveGuardian: () => void
  /** Load the guardian from localStorage */
  loadGuardian: () => void
  reset: () => void
}

const STORAGE_KEY = 'spirit-guardian'

export const useSpiritGuardian = create<SpiritGuardianState>((set, get) => ({
  guardian: null,

  setGuardian: guardian => {
    set({ guardian })
    get().saveGuardian()
  },

  gainExp: amount => {
    const guardian = get().guardian
    if (!guardian) return
    const newExp = guardian.experience + amount
    const newLevel = guardian.level + Math.floor(newExp / 100)
    const updated = { ...guardian, experience: newExp % 100, level: newLevel }
    set({ guardian: updated })
    get().saveGuardian()
  },

  saveGuardian: () => {
    const { guardian } = get()
    if (guardian) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(guardian))
    }
  },

  loadGuardian: () => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) {
      try {
        set({ guardian: JSON.parse(stored) })
      } catch (err) {
        console.error('Failed to load guardian from localStorage', err)
      }
    }
  },

  reset: () => {
    localStorage.removeItem(STORAGE_KEY)
    set({ guardian: null })
  },
}))

// Rehydrate persisted guardian on application startup
if (typeof window !== 'undefined') {
  useSpiritGuardian.getState().loadGuardian()
}
