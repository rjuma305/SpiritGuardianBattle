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
  // Earth
  terra: {
    id: 'terra',
    element: Element.Earth,
    evolvesTo: [{ guardianId: 'gaia', conditions: { level: 10 } }],
  },
  gaia: {
    id: 'gaia',
    element: Element.Earth,
    evolvesTo: [{ guardianId: 'titan', conditions: { level: 20, itemId: 'earth-stone' } }],
  },
  sprout: {
    id: 'sprout',
    element: Element.Earth,
    evolvesTo: [{ guardianId: 'bloom', conditions: { level: 5 } }],
  },
  bloom: {
    id: 'bloom',
    element: Element.Earth,
    evolvesTo: [{ guardianId: 'verdant', conditions: { level: 15, itemId: 'nature-stone' } }],
  },

  // Wind
  gale: {
    id: 'gale',
    element: Element.Wind,
    evolvesTo: [{ guardianId: 'zephyr', conditions: { level: 10 } }],
  },
  zephyr: {
    id: 'zephyr',
    element: Element.Wind,
    evolvesTo: [{ guardianId: 'tempest', conditions: { level: 20, itemId: 'wind-stone' } }],
  },
  breeze: {
    id: 'breeze',
    element: Element.Wind,
    evolvesTo: [{ guardianId: 'gust', conditions: { level: 5 } }],
  },
  gust: {
    id: 'gust',
    element: Element.Wind,
    evolvesTo: [{ guardianId: 'tempest', conditions: { level: 15, itemId: 'wind-stone' } }],
  },

  // Water
  aqua: {
    id: 'aqua',
    element: Element.Water,
    evolvesTo: [{ guardianId: 'torrent', conditions: { level: 10 } }],
  },
  torrent: {
    id: 'torrent',
    element: Element.Water,
    evolvesTo: [{ guardianId: 'leviathan', conditions: { level: 20, itemId: 'water-stone' } }],
  },
  droplet: {
    id: 'droplet',
    element: Element.Water,
    evolvesTo: [{ guardianId: 'wave', conditions: { level: 5 } }],
  },
  wave: {
    id: 'wave',
    element: Element.Water,
    evolvesTo: [{ guardianId: 'tsunami', conditions: { level: 15, itemId: 'water-stone' } }],
  },

  // Fire
  ember: {
    id: 'ember',
    element: Element.Fire,
    evolvesTo: [{ guardianId: 'blaze', conditions: { level: 5 } }],
  },
  blaze: {
    id: 'blaze',
    element: Element.Fire,
    evolvesTo: [{ guardianId: 'inferno', conditions: { level: 10 } }],
  },
  inferno: {
    id: 'inferno',
    element: Element.Fire,
    evolvesTo: [{ guardianId: 'pyroclasm', conditions: { level: 20, itemId: 'fire-stone' } }],
  },

  // Light
  glimmer: {
    id: 'glimmer',
    element: Element.Light,
    evolvesTo: [{ guardianId: 'radiant', conditions: { level: 5 } }],
  },
  radiant: {
    id: 'radiant',
    element: Element.Light,
    evolvesTo: [{ guardianId: 'lumen', conditions: { level: 10 } }],
  },
  lumen: {
    id: 'lumen',
    element: Element.Light,
    evolvesTo: [{ guardianId: 'seraph', conditions: { level: 20, itemId: 'light-stone' } }],
  },
  luminous: {
    id: 'luminous',
    element: Element.Light,
    evolvesTo: [], // optional 3rd-tier alternative
  },

  // Shadow
  shade: {
    id: 'shade',
    element: Element.Shadow,
    evolvesTo: [{ guardianId: 'dusk', conditions: { level: 10 } }, { guardianId: 'gloom', conditions: { level: 5 } }],
  },
  dusk: {
    id: 'dusk',
    element: Element.Shadow,
    evolvesTo: [{ guardianId: 'umbra', conditions: { level: 20, itemId: 'shadow-stone' } }],
  },
  gloom: {
    id: 'gloom',
    element: Element.Shadow,
    evolvesTo: [{ guardianId: 'abyss', conditions: { level: 15, itemId: 'shadow-stone' } }],
  },

  // Ice
  frost: {
    id: 'frost',
    element: Element.Ice,
    evolvesTo: [{ guardianId: 'glacier', conditions: { level: 10 } }, { guardianId: 'chill', conditions: { level: 5 } }],
  },
  chill: {
    id: 'chill',
    element: Element.Ice,
    evolvesTo: [{ guardianId: 'blizzard', conditions: { level: 15, itemId: 'ice-stone' } }],
  },
  glacier: {
    id: 'glacier',
    element: Element.Ice,
    evolvesTo: [{ guardianId: 'blizzard', conditions: { level: 20, itemId: 'ice-stone' } }],
  },

  // Lightning
  volt: {
    id: 'volt',
    element: Element.Lightning,
    evolvesTo: [{ guardianId: 'spark', conditions: { level: 10 } }],
  },
  spark: {
    id: 'spark',
    element: Element.Lightning,
    evolvesTo: [{ guardianId: 'storm', conditions: { level: 20, itemId: 'lightning-stone' } }, { guardianId: 'bolt', conditions: { level: 5 } }],
  },
  bolt: {
    id: 'bolt',
    element: Element.Lightning,
    evolvesTo: [{ guardianId: 'storm', conditions: { level: 15, itemId: 'lightning-stone' } }],
  },
}

export function checkEvolution(
  id: string,
  level: number,
  items: string[],
  location: string
): string | null {
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
