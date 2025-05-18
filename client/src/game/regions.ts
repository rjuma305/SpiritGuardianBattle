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
    id: 'mountain',
    name: 'Whistling Peaks',
    element: 'wind',
    description: 'High mountains with constant winds.',
    features: ['cliff paths', 'ancient shrines'],
  },
  {
    id: 'lake',
    name: 'Crystal Lake',
    element: 'water',
    description: 'A serene lake with clear waters.',
    features: ['fishing spots', 'waterfalls'],
  },
  {
    id: 'volcano',
    name: 'Molten Volcano',
    element: 'fire',
    description: 'A dangerous region of lava and ash.',
    features: ['heat vents', 'lava pools'],
  },
  {
    id: 'sanctuary',
    name: 'Sanctuary of Light',
    element: 'light',
    description: 'A sacred land bathed in light.',
    features: ['holy fountain', 'blessed altar'],
  },
  {
    id: 'abyss',
    name: 'Shadow Abyss',
    element: 'shadow',
    description: 'Dark caverns that swallow all light.',
    features: ['dark crystals', 'echoing tunnels'],
  },
  {
    id: 'glacier',
    name: 'Frozen Glacier',
    element: 'ice',
    description: 'A frigid land of eternal ice.',
    features: ['slippery slopes', 'ice caves'],
  },
  {
    id: 'stormpeak',
    name: 'Stormpeak Ridge',
    element: 'lightning',
    description: 'A perilous ridge where storms gather.',
    features: ['thunder plains', 'charged stones'],
  },
]
