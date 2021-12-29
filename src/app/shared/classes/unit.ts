export class Unit {
  constructor(
    private unit_id: number,
    private name: string
  ) {
  }

  public toString(){
    return this.name;
  }
}
