import { EnergyType } from '../Energy';
import Archetypes from './Archetypes';

export default class Warrior extends Archetypes {
  private _ability: EnergyType = 'stamina';
  static counter = 0;

  constructor(name: string) {
    super(name);
    Warrior.counter += 1;
  }
  
  get energyType(): EnergyType {
    return this._ability;
  }

  static override createdArchetypeInstances(): number {
    return Warrior.counter;
  }
}