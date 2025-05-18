export const evolutionChains: Record<string, EvolutionNode> = {
  // Branch from codex
  terra: {
    id: 'terra',
    element: Element.Earth,
    evolvesTo: [
      { guardianId: 'gaia', conditions: { level: 10 } },
    ],
  },
  gaia: {
    id: 'gaia',
    element: Element.Earth,
    evolvesTo: [
      { guardianId: 'titan', conditions: { level: 20, itemId: 'earth-stone' } },
    ],
  },

  // Branch from main
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

  gale: {
    id: 'gale',
    element: Element.Wind,
    evolvesTo: [
      { guardianId: 'zephyr', conditions: { level: 10 } },
    ],
  },
  zephyr: {
    id: 'zephyr',
    element: Element.Wind,
    evolvesTo: [
      { guardianId: 'tempest', conditions: { level: 20, itemId: 'wind-stone' } },
    ],
  },
  aqua: {
    id: 'aqua',
    element: Element.Water,
    evolvesTo: [
      { guardianId: 'torrent', conditions: { level: 10 } },
    ],
  },
  torrent: {
    id: 'torrent',
    element: Element.Water,
    evolvesTo: [
      { guardianId: 'leviathan', conditions: { level: 20, itemId: 'water-stone' } },
    ],
  },
  blaze: {
    id: 'blaze',
    element: Element.Fire,
    evolvesTo: [
      { guardianId: 'inferno', conditions: { level: 10 } },
    ],
  },
  inferno: {
    id: 'inferno',
    element: Element.Fire,
    evolvesTo: [
      { guardianId: 'pyroclasm', conditions: { level: 20, itemId: 'fire-stone' } },
    ],
  },
  radiant: {
    id: 'radiant',
    element: Element.Light,
    evolvesTo: [
      { guardianId: 'lumen', conditions: { level: 10 } },
    ],
  },
  lumen: {
    id: 'lumen',
    element: Element.Light,
    evolvesTo: [
      { guardianId: 'seraph', conditions: { level: 20, itemId: 'light-stone' } },
    ],
  },
  shade: {
    id: 'shade',
    element: Element.Shadow,
    evolvesTo: [
      { guardianId: 'dusk', conditions: { level: 10 } },
    ],
  },
  dusk: {
    id: 'dusk',
    element: Element.Shadow,
    evolvesTo: [
      { guardianId: 'umbra', conditions: { level: 20, itemId: 'shadow-stone' } },
    ],
  },
  frost: {
    id: 'frost',
    element: Element.Ice,
    evolvesTo: [
      { guardianId: 'glacier', conditions: { level: 10 } },
    ],
  },
  glacier: {
    id: 'glacier',
    element: Element.Ice,
    evolvesTo: [
      { guardianId: 'blizzard', conditions: { level: 20, itemId: 'ice-stone' } },
    ],
  },
  volt: {
    id: 'volt',
    element: Element.Lightning,
    evolvesTo: [
      { guardianId: 'spark', conditions: { level: 10 } },
    ],
  },
  spark: {
    id: 'spark',
    element: Element.Lightning,
    evolvesTo: [
      { guardianId: 'storm', conditions: { level: 20, itemId: 'lightning-stone' } },
    ],
  },
}
