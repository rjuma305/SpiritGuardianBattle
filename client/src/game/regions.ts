export interface Region {
  id: string
  name: string
  element: string
  description: string
  features: string[]
}

export const regions: Region[] = [
  {
    id: 'forest',
    name: 'Verdant Forest',
    element: 'earth',
    description: 'A lush forest filled with life.',
    features: ['healing spring', 'training grove'],
  },
  {
    id: 'volcano',
    name: 'Molten Volcano',
    element: 'fire',
    description: 'A dangerous region of lava and ash.',
    features: ['heat vents', 'lava pools'],
  },
  {
    id: 'peaks',
    name: 'Windy Peaks',
    element: 'wind',
    description: 'High mountains battered by strong winds.',
    features: ['cliff paths', 'training posts'],
  },
  {
    id: 'lake',
    name: 'Crystal Lake',
    element: 'water',
    description: 'Clear waters hiding mysterious depths.',
    features: ['fishing pier', 'waterfall'],
  },
  {
    id: 'temple',
    name: 'Temple of Light',
    element: 'light',
    description: 'A sacred place bathed in radiant energy.',
    features: ['healing altar', 'shining statues'],
  },
  {
    id: 'abyss',
    name: 'Shadow Abyss',
    element: 'shadow',
    description: 'Dark caverns where light fears to tread.',
    features: ['echoing halls', 'hidden chambers'],
  },
  {
    id: 'glacier',
    name: 'Frozen Glacier',
    element: 'ice',
    description: 'A frigid land of eternal winter.',
    features: ['slippery slopes', 'ice caves'],
  },
  {
    id: 'stormlands',
    name: 'Stormlands',
    element: 'lightning',
    description: 'Fields wracked by constant thunderstorms.',
    features: ['magnetic rocks', 'thunder plains'],
  },
]
