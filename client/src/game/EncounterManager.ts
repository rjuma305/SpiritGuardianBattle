import { Element } from './elements'
import { useSpiritGuardian } from './stores/useSpiritGuardian'

export interface Encounter {
  guardianId: string
  element: Element
  level: number
}

export interface RegionEncounterData {
  rate: number // 0 to 1 chance per step
  guardians: Encounter[]
}

const regions: Record<string, RegionEncounterData> = {
  forest: {
    rate: 0.2,
    guardians: [
      { guardianId: 'sprout', element: Element.Earth, level: 1 },
    ],
  },
  plains: {
    rate: 0.2,
    guardians: [
      { guardianId: 'breeze', element: Element.Wind, level: 1 },
    ],
  },
  river: {
    rate: 0.25,
    guardians: [
      { guardianId: 'droplet', element: Element.Water, level: 1 },
    ],
  },
  volcano: {
    rate: 0.3,
    guardians: [
      { guardianId: 'ember', element: Element.Fire, level: 2 },
    ],
  },
  shrine: {
    rate: 0.15,
    guardians: [
      { guardianId: 'gleam', element: Element.Light, level: 2 },
    ],
  },
  crypt: {
    rate: 0.25,
    guardians: [
      { guardianId: 'shade', element: Element.Shadow, level: 2 },
    ],
  },
  glacier: {
    rate: 0.3,
    guardians: [
      { guardianId: 'flake', element: Element.Ice, level: 2 },
    ],
  },
  stormpeak: {
    rate: 0.25,
    guardians: [
      { guardianId: 'jolt', element: Element.Lightning, level: 2 },
    ],
  },
}

export class EncounterManager {
  static checkForEncounter(region: string): Encounter | null {
    const data = regions[region]
    if (!data) return null
    if (Math.random() < data.rate) {
      const playerLevel = useSpiritGuardian.getState().guardian?.level ?? 1
      const encounter = data.guardians[Math.floor(Math.random() * data.guardians.length)]
      return {
        ...encounter,
        level: encounter.level + Math.floor(playerLevel / 5),
      }
    }
    return null
  }
}
