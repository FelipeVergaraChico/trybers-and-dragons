import Race from './Race';

export default class Halfling extends Race {
  private _maxLifePoints = 60;
  static counter = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Halfling.counter += 1;
  }
  
  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static override createdRacesInstances(): number {
    return Halfling.counter;
  }
}