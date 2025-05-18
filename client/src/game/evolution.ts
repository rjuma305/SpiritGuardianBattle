import { Element } from './elements'

export interface EvolutionCondition {
  level?: number
  itemId?: string
  location?: string
}

export interface EvolutionNode {
  id: string
  element: Element
  evolvesTo?: {
    guardianId: string
    conditions: EvolutionCondition
  }[]
}

export const evolutionChains: Record<string, EvolutionNode> = {
  sprout: {
    id: 'sprout',
    element: Element.Earth,
    evolvesTo: [
      {
        guardianId: 'bloom',
        conditions: { level: 5 },
      },
    ],
  },
  bloom: {
    id: 'bloom',
    element: Element.Earth,
    evolvesTo: [
      {
        guardianId: 'verdant',
        conditions: { level: 15, itemId: 'nature-stone' },
      },
    ],
  },

}

export function checkEvolution(id: string, level: number, items: string[], location: string): string | null {
  const node = evolutionChains[id]
  if (!node || !node.evolvesTo) return null
  for (const evo of node.evolvesTo) {
    const cond = evo.conditions
    const meetsLevel = cond.level ? level >= cond.level : true
    const hasItem = cond.itemId ? items.includes(cond.itemId) : true
    const inLocation = cond.location ? cond.location === location : true
    if (meetsLevel && hasItem && inLocation) return evo.guardianId
  }
  return null
}
