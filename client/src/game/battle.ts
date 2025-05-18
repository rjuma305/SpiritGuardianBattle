import { Element, getElementalMultiplier } from './elements'
import { AudioManager } from './AudioManager'

export interface BattleGuardian {
  id: string
  name: string
  level: number
  element: Element
  hp: number
  attack: number
  defense: number
}

export enum BattleState {
  PlayerTurn,
  EnemyTurn,
  Won,
  Lost,
}

export class Battle {
  player: BattleGuardian
  enemy: BattleGuardian
  state: BattleState = BattleState.PlayerTurn

  constructor(player: BattleGuardian, enemy: BattleGuardian) {
    this.player = { ...player }
    this.enemy = { ...enemy }
    AudioManager.playMusic('battle')
  }

  attack(attacker: BattleGuardian, defender: BattleGuardian) {
    const multiplier = getElementalMultiplier(attacker.element, defender.element)
    const damage = Math.max(1, (attacker.attack - defender.defense) * multiplier)
    defender.hp -= damage

    AudioManager.playSound('attack')

    if (defender.hp <= 0) {
      defender.hp = 0
      this.state = attacker === this.player ? BattleState.Won : BattleState.Lost
      AudioManager.stopMusic('battle')
    }
  }

  playerActionAttack() {
    if (this.state !== BattleState.PlayerTurn) return
    this.attack(this.player, this.enemy)
    if (this.state === BattleState.PlayerTurn) {
      this.state = BattleState.EnemyTurn
    }
  }

  enemyTurn() {
    if (this.state !== BattleState.EnemyTurn) return
    this.attack(this.enemy, this.player)
    if (this.state === BattleState.EnemyTurn) {
      this.state = BattleState.PlayerTurn
    }
  }
}
