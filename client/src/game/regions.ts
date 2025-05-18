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

]
