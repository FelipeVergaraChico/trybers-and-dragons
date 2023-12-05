import { EnergyType } from '../Energy';
import Archetypes from './Archetypes';

export default class Necromancer extends Archetypes {
  private _ability: EnergyType = 'mana';
  static counter = 0;

  constructor(name: string) {
    super(name);
    Necromancer.counter += 1;
  }
  
  get energyType(): EnergyType {
    return this._ability;
  }

  static override createdArchetypeInstances(): number {
    return Necromancer.counter;
  }
}