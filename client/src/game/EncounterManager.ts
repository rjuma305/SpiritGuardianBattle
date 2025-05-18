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
      { guardianId: 'breeze', element: Element.Wind, level: 2 },
    ],
  },
  volcano: {
    rate: 0.3,
    guardians: [
      { guardianId: 'flameling', element: Element.Fire, level: 3 },
    ],
  },
  lake: {
    rate: 0.25,
    guardians: [
      { guardianId: 'droplet', element: Element.Water, level: 1 },
      { guardianId: 'wave', element: Element.Water, level: 4 },
    ],
  },
  peaks: {
    rate: 0.22,
    guardians: [
      { guardianId: 'breeze', element: Element.Wind, level: 2 },
      { guardianId: 'gust', element: Element.Wind, level: 5 },
    ],
  },
  temple: {
    rate: 0.15,
    guardians: [
      { guardianId: 'glimmer', element: Element.Light, level: 3 },
    ],
  },
  abyss: {
    rate: 0.28,
    guardians: [
      { guardianId: 'shade', element: Element.Shadow, level: 3 },
    ],
  },
  glacier: {
    rate: 0.2,
    guardians: [
      { guardianId: 'frost', element: Element.Ice, level: 2 },
    ],
  },
  stormlands: {
    rate: 0.3,
    guardians: [
      { guardianId: 'spark', element: Element.Lightning, level: 3 },
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
