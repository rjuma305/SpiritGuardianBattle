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
      { guardianId: 'bloom', conditions: { level: 5 } },
    ],
  },
  bloom: {
    id: 'bloom',
    element: Element.Earth,
    evolvesTo: [
      { guardianId: 'verdant', conditions: { level: 15, itemId: 'nature-stone' } },
    ],
  },
  breeze: {
    id: 'breeze',
    element: Element.Wind,
    evolvesTo: [
      { guardianId: 'gust', conditions: { level: 5 } },
    ],
  },
  gust: {
    id: 'gust',
    element: Element.Wind,
    evolvesTo: [
      { guardianId: 'tempest', conditions: { level: 15, itemId: 'wind-stone' } },
    ],
  },
  droplet: {
    id: 'droplet',
    element: Element.Water,
    evolvesTo: [
      { guardianId: 'wave', conditions: { level: 5 } },
    ],
  },
  wave: {
    id: 'wave',
    element: Element.Water,
    evolvesTo: [
      { guardianId: 'tsunami', conditions: { level: 15, itemId: 'water-stone' } },
    ],
  },
  ember: {
    id: 'ember',
    element: Element.Fire,
    evolvesTo: [
      { guardianId: 'blaze', conditions: { level: 5 } },
    ],
  },
  blaze: {
    id: 'blaze',
    element: Element.Fire,
    evolvesTo: [
      { guardianId: 'inferno', conditions: { level: 15, itemId: 'fire-stone' } },
    ],
  },
  glimmer: {
    id: 'glimmer',
    element: Element.Light,
    evolvesTo: [
      { guardianId: 'radiant', conditions: { level: 5 } },
    ],
  },
  radiant: {
    id: 'radiant',
    element: Element.Light,
    evolvesTo: [
      { guardianId: 'luminous', conditions: { level: 15, itemId: 'light-stone' } },
    ],
  },
  shade: {
    id: 'shade',
    element: Element.Shadow,
    evolvesTo: [
      { guardianId: 'gloom', conditions: { level: 5 } },
    ],
  },
  gloom: {
    id: 'gloom',
    element: Element.Shadow,
    evolvesTo: [
      { guardianId: 'abyss', conditions: { level: 15, itemId: 'shadow-stone' } },
    ],
  },
  frost: {
    id: 'frost',
    element: Element.Ice,
    evolvesTo: [
      { guardianId: 'chill', conditions: { level: 5 } },
    ],
  },
  chill: {
    id: 'chill',
    element: Element.Ice,
    evolvesTo: [
      { guardianId: 'blizzard', conditions: { level: 15, itemId: 'ice-stone' } },
    ],
  },
  spark: {
    id: 'spark',
    element: Element.Lightning,
    evolvesTo: [
      { guardianId: 'bolt', conditions: { level: 5 } },
    ],
  },
  bolt: {
    id: 'bolt',
    element: Element.Lightning,
    evolvesTo: [
      { guardianId: 'storm', conditions: { level: 15, itemId: 'lightning-stone' } },
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
