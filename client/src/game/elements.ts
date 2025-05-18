export enum Element {
  Fire = 'fire',
  Water = 'water',
  Earth = 'earth',
  Air = 'air',
  Light = 'light',
  Dark = 'dark',
}

export interface ElementalStats {
  attack: number;
  defense: number;
}

export const elementalAdvantages: Record<Element, Element[]> = {
  [Element.Fire]: [Element.Earth],
  [Element.Water]: [Element.Fire],
  [Element.Earth]: [Element.Air],
  [Element.Air]: [Element.Water],
  [Element.Light]: [Element.Dark],
  [Element.Dark]: [Element.Light],
};

export function getElementalMultiplier(attacker: Element, defender: Element): number {
  if (elementalAdvantages[attacker].includes(defender)) return 1.5;
  if (elementalAdvantages[defender].includes(attacker)) return 0.5;
  return 1;
}
