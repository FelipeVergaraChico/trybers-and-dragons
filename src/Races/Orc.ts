import Race from './Race';

export default class Orc extends Race {
  private _maxLifePoints = 74;
  static counter = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Orc.counter += 1;
  }
  
  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static override createdRacesInstances(): number {
    return Orc.counter;
  }
}