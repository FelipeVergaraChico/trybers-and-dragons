import { EnergyType } from '../Energy';
import Archetypes from './Archetypes';

export default class Mage extends Archetypes {
  private _ability: EnergyType = 'mana';
  static counter = 0;

  constructor(name: string) {
    super(name);
    Mage.counter += 1;
  }
  
  get energyType(): EnergyType {
    return this._ability;
  }

  static override createdArchetypeInstances() {
    return Mage.counter;
  }
}