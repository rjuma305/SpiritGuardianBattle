const regions: Record<string, RegionEncounterData> = {
  forest: {
    rate: 0.2,
    guardians: [
      { guardianId: 'terra', element: Element.Earth, level: 1 },
      { guardianId: 'sprout', element: Element.Earth, level: 1 }, // merged both earth guardians
    ],
  },
  mountain: {
    rate: 0.25,
    guardians: [
      { guardianId: 'gale', element: Element.Wind, level: 2 },
    ],
  },
  lake: {
    rate: 0.25,
    guardians: [
      { guardianId: 'aqua', element: Element.Water, level: 2 },
    ],
  },
  volcano: {
    rate: 0.3,
    guardians: [
      { guardianId: 'blaze', element: Element.Fire, level: 3 },
    ],
  },
  sanctuary: {
    rate: 0.2,
    guardians: [
      { guardianId: 'radiant', element: Element.Light, level: 3 },
    ],
  },
  abyss: {
    rate: 0.3,
    guardians: [
      { guardianId: 'shade', element: Element.Shadow, level: 4 },
    ],
  },
  glacier: {
    rate: 0.25,
    guardians: [
      { guardianId: 'frost', element: Element.Ice, level: 3 },
    ],
  },
  stormpeak: {
    rate: 0.35,
    guardians: [
      { guardianId: 'volt', element: Element.Lightning, level: 4 },
    ],
  },
}
