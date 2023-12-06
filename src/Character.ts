import Archetypes, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

export default class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetypes;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;
  private _name: string;

  constructor(name: string) {
    this._name = name;
    this._dexterity = getRandomInt(1, 10);
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._race = new Elf('Elf', this._dexterity);
    this._archetype = new Mage('Mage');
    this._maxLifePoints = (this._race.maxLifePoints) / 2;
    this._lifePoints = this._maxLifePoints;
    this._energy = { type_: this._archetype.energyType, amount: getRandomInt(1, 10) };
  }

  get race(): Race {
    return this._race;
  }

  get archetype(): Archetypes {
    return this._archetype;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  get defense(): number {
    return this._defense;
  }

  get dexterity(): number {
    return this._dexterity;
  }

  get name(): string {
    return this._name;
  }

  get energy(): Energy {
    return { type_: this._energy.type_, amount: this._energy.amount };
  }

  receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this._defense;
    this.calculateDamage(damage);
    this.isAlive();

    return this.lifePoints;
  }

  private calculateDamage(damage: number): void {
    if (damage > 0) {
      this._lifePoints -= damage;
    } else {
      this._lifePoints -= 1;
    }
  }

  private isAlive(): void {
    if (this._lifePoints < 0) {
      this._lifePoints = -1;
    }
  }

  attack(enemy: Fighter): void {
    enemy.receiveDamage(this._strength);
  }

  levelUp() {
    this._maxLifePoints += getRandomInt(1, 10);
    this._strength += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    this._energy = { ...this._energy, amount: 10 };
    this.verifyMaxLifePoints();
    this._lifePoints = this._maxLifePoints;
  }

  private verifyMaxLifePoints(): void {
    if (this._maxLifePoints > this._race.maxLifePoints) {
      this._maxLifePoints = this._race.maxLifePoints;
    }
  }

  special = (enemy: Fighter): void => {
    enemy.receiveDamage((this._strength * 1.5) + this.dexterity);
  };
}