export class IngredientCategory {
  constructor(
    private _ingredient_category_id: number,
    private _name: string
  ) {
  }
  
  get ingredient_category_id(): number {
    return this._ingredient_category_id;
  }

  get name(): string {
    return this._name;
  }
  public toString(){
    return this.name;
  }
}
