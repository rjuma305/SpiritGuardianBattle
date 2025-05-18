export enum Element {
  Earth = 'earth',
  Wind = 'wind',
  Water = 'water',
  Fire = 'fire',
  Light = 'light',
  Shadow = 'shadow',
  Ice = 'ice',
  Lightning = 'lightning',
}

export interface ElementalStats {
  attack: number;
  defense: number;
}

export const elementalAdvantages: Record<Element, Element[]> = {
  [Element.Fire]: [Element.Ice],
  [Element.Water]: [Element.Fire],
  [Element.Earth]: [Element.Lightning],
  [Element.Wind]: [Element.Earth],
  [Element.Light]: [Element.Shadow],
  [Element.Shadow]: [Element.Light],
  [Element.Ice]: [Element.Wind],
  [Element.Lightning]: [Element.Water],
};

export function getElementalMultiplier(attacker: Element, defender: Element): number {
  if (elementalAdvantages[attacker].includes(defender)) return 1.5;
  if (elementalAdvantages[defender].includes(attacker)) return 0.5;
  return 1;
}
