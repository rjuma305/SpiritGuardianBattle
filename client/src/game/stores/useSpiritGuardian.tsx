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
  load: () => void
  reset: () => void
}

const STORAGE_KEY = 'spirit-guardian'

export const useSpiritGuardian = create<SpiritGuardianState>((set, get) => ({
  guardian: null,

  setGuardian: guardian => {
    set({ guardian })
    localStorage.setItem(STORAGE_KEY, JSON.stringify(guardian))
  },

  gainExp: amount => {
    const guardian = get().guardian
    if (!guardian) return
    const newExp = guardian.experience + amount
    const newLevel = guardian.level + Math.floor(newExp / 100)
    const updated = { ...guardian, experience: newExp % 100, level: newLevel }
    set({ guardian: updated })
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
  },

  load: () => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) set({ guardian: JSON.parse(stored) })
  },

  reset: () => {
    localStorage.removeItem(STORAGE_KEY)
    set({ guardian: null })
  },
}))
