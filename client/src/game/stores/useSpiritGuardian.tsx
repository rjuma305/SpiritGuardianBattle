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
  saveGuardian: () => void
  loadGuardian: () => void
  resetGuardian: () => void
}

export const useSpiritGuardian = create<SpiritGuardianState>((set, get) => ({
  guardian: null,
  setGuardian: guardian => set({ guardian }),
  gainExp: amount => {
    const guardian = get().guardian
    if (!guardian) return
    const newExp = guardian.experience + amount
    const newLevel = guardian.level + Math.floor(newExp / 100)
    set({
      guardian: { ...guardian, experience: newExp % 100, level: newLevel },
    })
  },
  saveGuardian: () => {
    const guardian = get().guardian
    if (guardian) {
      localStorage.setItem('guardian', JSON.stringify(guardian))
    }
  },
  loadGuardian: () => {
    const stored = localStorage.getItem('guardian')
    if (stored) {
      set({ guardian: JSON.parse(stored) })
    }
  },
  resetGuardian: () => {
    localStorage.removeItem('guardian')
    set({ guardian: null })
  },
}))

// Immediately attempt to load any saved guardian on startup
useSpiritGuardian.getState().loadGuardian()
