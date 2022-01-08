export class Unit {
  constructor(
    private _unit_id: number,
    private name: string
  ) {
  }

  get unit_id(): number {
    return this._unit_id;
  }

  public toString(){
    return this.name;
  }
}
