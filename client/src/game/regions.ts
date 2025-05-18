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
    id: 'volcano',
    name: 'Molten Volcano',
    element: Element.Fire,
    description: 'A dangerous region of lava and ash.',
    features: ['heat vents', 'lava pools'],
  },
  {
    id: 'mountain',
    name: 'Whistling Peaks',
    element: Element.Wind,
    description: 'High mountains with constant winds.',
    features: ['cliff paths', 'ancient shrines'],
  },
  {
    id: 'peaks',
    name: 'Windy Peaks',
    element: Element.Wind,
    description: 'High mountains battered by strong winds.',
    features: ['cliff paths', 'training posts'],
  },
  {
    id: 'lake',
    name: 'Crystal Lake',
    element: Element.Water,
    description: 'Clear waters hiding mysterious depths.',
    features: ['fishing pier', 'waterfall'],
  },
  {
    id: 'temple',
    name: 'Temple of Light',
    element: Element.Light,
    description: 'A sacred place bathed in radiant energy.',
    features: ['healing altar', 'shining statues'],
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
    description: 'Dark caverns where light fears to tread.',
    features: ['echoing halls', 'hidden chambers'],
  },
  {
    id: 'glacier',
    name: 'Frozen Glacier',
    element: Element.Ice,
    description: 'A frigid land of eternal winter.',
    features: ['slippery slopes', 'ice caves'],
  },
  {
    id: 'stormlands',
    name: 'Stormlands',
    element: Element.Lightning,
    description: 'Fields wracked by constant thunderstorms.',
    features: ['magnetic rocks', 'thunder plains'],
  },
  {
    id: 'stormpeak',
    name: 'Stormpeak Ridge',
    element: Element.Lightning,
    description: 'A perilous ridge where storms gather.',
    features: ['thunder plains', 'charged stones'],
  },
]
