import { Element } from './elements'
import { useSpiritGuardian } from './stores/useSpiritGuardian'
import { AudioManager } from './AudioManager'

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
      { guardianId: 'terra', element: Element.Earth, level: 1 },
      { guardianId: 'sprout', element: Element.Earth, level: 1 },
    ],
  },
  mountain: {
    rate: 0.25,
    guardians: [{ guardianId: 'gale', element: Element.Wind, level: 2 }],
  },
  lake: {
    rate: 0.25,
    guardians: [{ guardianId: 'aqua', element: Element.Water, level: 2 }],
  },
  volcano: {
    rate: 0.3,
    guardians: [{ guardianId: 'blaze', element: Element.Fire, level: 3 }],
  },
  sanctuary: {
    rate: 0.2,
    guardians: [{ guardianId: 'radiant', element: Element.Light, level: 3 }],
  },
  abyss: {
    rate: 0.3,
    guardians: [{ guardianId: 'shade', element: Element.Shadow, level: 4 }],
  },
  glacier: {
    rate: 0.25,
    guardians: [{ guardianId: 'frost', element: Element.Ice, level: 3 }],
  },
  stormpeak: {
    rate: 0.35,
    guardians: [{ guardianId: 'volt', element: Element.Lightning, level: 4 }],
  },
}

// 🧠 Enhanced manager combining audio + level scaling
export class EncounterManager {
  static checkForEncounter(regionId: string): Encounter | null {
    const data = regions[regionId]
    if (!data) return null

    if (Math.random() < data.rate) {
      const playerLevel = useSpiritGuardian.getState().guardian?.level ?? 1
      const baseEncounter =
        data.guardians[Math.floor(Math.random() * data.guardians.length)]

      // Play audio
      AudioManager.playSound('encounter')
      AudioManager.playGuardianVoice(baseEncounter.guardianId)

      // Return scaled encounter
      return {
        ...baseEncounter,
        level: baseEncounter.level + Math.floor(playerLevel / 5),
      }
    }

    return null
  }
}

export { regions }
