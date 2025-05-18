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
  verdant: {
    id: 'verdant',
    element: Element.Earth,
  },
  breeze: {
    id: 'breeze',
    element: Element.Wind,
    evolvesTo: [
      {
        guardianId: 'gust',
        conditions: { level: 5 },
      },
    ],
  },
  gust: {
    id: 'gust',
    element: Element.Wind,
    evolvesTo: [
      {
        guardianId: 'cyclone',
        conditions: { level: 15, itemId: 'wind-stone' },
      },
    ],
  },
  cyclone: {
    id: 'cyclone',
    element: Element.Wind,
  },
  droplet: {
    id: 'droplet',
    element: Element.Water,
    evolvesTo: [
      {
        guardianId: 'current',
        conditions: { level: 5 },
      },
    ],
  },
  current: {
    id: 'current',
    element: Element.Water,
    evolvesTo: [
      {
        guardianId: 'tidal',
        conditions: { level: 15, itemId: 'water-stone' },
      },
    ],
  },
  tidal: {
    id: 'tidal',
    element: Element.Water,
  },
  ember: {
    id: 'ember',
    element: Element.Fire,
    evolvesTo: [
      {
        guardianId: 'flare',
        conditions: { level: 5 },
      },
    ],
  },
  flare: {
    id: 'flare',
    element: Element.Fire,
    evolvesTo: [
      {
        guardianId: 'inferno',
        conditions: { level: 15, itemId: 'fire-stone' },
      },
    ],
  },
  inferno: {
    id: 'inferno',
    element: Element.Fire,
  },
  gleam: {
    id: 'gleam',
    element: Element.Light,
    evolvesTo: [
      {
        guardianId: 'glow',
        conditions: { level: 5 },
      },
    ],
  },
  glow: {
    id: 'glow',
    element: Element.Light,
    evolvesTo: [
      {
        guardianId: 'radiant',
        conditions: { level: 15, itemId: 'light-stone' },
      },
    ],
  },
  radiant: {
    id: 'radiant',
    element: Element.Light,
  },
  shade: {
    id: 'shade',
    element: Element.Shadow,
    evolvesTo: [
      {
        guardianId: 'gloom',
        conditions: { level: 5 },
      },
    ],
  },
  gloom: {
    id: 'gloom',
    element: Element.Shadow,
    evolvesTo: [
      {
        guardianId: 'umbra',
        conditions: { level: 15, itemId: 'shadow-stone' },
      },
    ],
  },
  umbra: {
    id: 'umbra',
    element: Element.Shadow,
  },
  flake: {
    id: 'flake',
    element: Element.Ice,
    evolvesTo: [
      {
        guardianId: 'frost',
        conditions: { level: 5 },
      },
    ],
  },
  frost: {
    id: 'frost',
    element: Element.Ice,
    evolvesTo: [
      {
        guardianId: 'blizzard',
        conditions: { level: 15, itemId: 'ice-stone' },
      },
    ],
  },
  blizzard: {
    id: 'blizzard',
    element: Element.Ice,
  },
  jolt: {
    id: 'jolt',
    element: Element.Lightning,
    evolvesTo: [
      {
        guardianId: 'bolt',
        conditions: { level: 5 },
      },
    ],
  },
  bolt: {
    id: 'bolt',
    element: Element.Lightning,
    evolvesTo: [
      {
        guardianId: 'storm',
        conditions: { level: 15, itemId: 'lightning-stone' },
      },
    ],
  },
  storm: {
    id: 'storm',
    element: Element.Lightning,
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
