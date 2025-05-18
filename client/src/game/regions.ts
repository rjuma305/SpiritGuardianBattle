import { Element } from './elements'

export interface Region {
  id: string
  name: string
  element: Element
  description: string
  features: string[]
}

export const regions: Region[] = [
  {
    id: 'forest',
    name: 'Verdant Forest',
    element: Element.Earth,
    description: 'A lush forest filled with life.',
    features: ['healing spring', 'training grove'],
  },
  {
    id: 'mountain',
    name: 'Whistling Peaks',
    element: Element.Wind,
    description: 'High mountains with constant winds.',
    features: ['cliff paths', 'ancient shrines'],
  },
  {
    id: 'lake',
    name: 'Crystal Lake',
    element: Element.Water,
    description: 'A serene lake with clear waters.',
    features: ['fishing spots', 'waterfalls'],
  },
  {
    id: 'volcano',
    name: 'Molten Volcano',
    element: Element.Fire,
    description: 'A dangerous region of lava and ash.',
    features: ['heat vents', 'lava pools'],
  },
  {
    id: 'sanctuary',
    name: 'Sanctuary of Light',
    element: Element.Light,
    description: 'A sacred land bathed in light.',
    features: ['holy fountain', 'blessed altar'],
  },
  {
    id: 'abyss',
    name: 'Shadow Abyss',
    element: Element.Shadow,
    description: 'Dark caverns that swallow all light.',
    features: ['dark crystals', 'echoing tunnels'],
  },
  {
    id: 'glacier',
    name: 'Frozen Glacier',
    element: Element.Ice,
    description: 'A frigid land of eternal ice.',
    features: ['slippery slopes', 'ice caves'],
  },
  {
    id: 'stormpeak',
    name: 'Stormpeak Ridge',
    element: Element.Lightning,
    description: 'A perilous ridge where storms gather.',
    features: ['thunder plains', 'charged stones'],
  },
]
