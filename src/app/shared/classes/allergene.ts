export class Allergene {
  constructor(
    public _allergene_id: number,
    private _name: string
  ) {
  }

  get allergene_id(): number {
    return this._allergene_id;
  }

  set allergene_id(value: number) {
    this._allergene_id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }
}
