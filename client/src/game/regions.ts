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
    id: 'plains',
    name: 'Whispering Plains',
    element: 'wind',
    description: 'Open fields where the breeze never stops.',
    features: ['training posts'],
  },
  {
    id: 'river',
    name: 'Crystal River',
    element: 'water',
    description: 'A serene river that winds across the land.',
    features: ['fishing spots'],
  },
  {
    id: 'volcano',
    name: 'Molten Volcano',
    element: 'fire',
    description: 'A dangerous region of lava and ash.',
    features: ['heat vents', 'lava pools'],
  },
  {
    id: 'shrine',
    name: 'Luminous Shrine',
    element: 'light',
    description: 'Ruins said to house a gentle radiance.',
    features: ['healing altar'],
  },
  {
    id: 'crypt',
    name: 'Shadow Crypt',
    element: 'shadow',
    description: 'A dark mausoleum filled with echoes.',
    features: ['hidden passageways'],
  },
  {
    id: 'glacier',
    name: 'Frozen Glacier',
    element: 'ice',
    description: 'Snow and ice stretch as far as the eye can see.',
    features: ['slippery paths'],
  },
  {
    id: 'stormpeak',
    name: 'Stormpeak Mountains',
    element: 'lightning',
    description: 'Mountains where storms rage endlessly.',
    features: ['charged stones'],
  },
]
