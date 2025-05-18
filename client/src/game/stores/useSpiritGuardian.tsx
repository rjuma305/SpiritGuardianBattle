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
  saveGame: () => void
  loadGame: () => void
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
  saveGame: () => {
    if (typeof window === 'undefined') return
    const guardian = get().guardian
    if (!guardian) return
    localStorage.setItem('spirit-guardian', JSON.stringify(guardian))
  },
  loadGame: () => {
    if (typeof window === 'undefined') return
    const data = localStorage.getItem('spirit-guardian')
    if (data) {
      set({ guardian: JSON.parse(data) as SpiritGuardian })
    }
  },
}))
