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
  volcano: {
    rate: 0.3,
    guardians: [

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
