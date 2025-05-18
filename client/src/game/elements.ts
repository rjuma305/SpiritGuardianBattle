export enum Element {
  Fire = 'fire',
  Water = 'water',
  Earth = 'earth',

}

export interface ElementalStats {
  attack: number;
  defense: number;
}

export const elementalAdvantages: Record<Element, Element[]> = {

};

export function getElementalMultiplier(attacker: Element, defender: Element): number {
  if (elementalAdvantages[attacker].includes(defender)) return 1.5;
  if (elementalAdvantages[defender].includes(attacker)) return 0.5;
  return 1;
}
