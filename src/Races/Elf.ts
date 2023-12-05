import Race from './Race';

export default class Elf extends Race {
  private _maxLifePoints = 99;
  static counter = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Elf.counter += 1;
  }
  
  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static override createdRacesInstances(): number {
    return Elf.counter;
  }
}