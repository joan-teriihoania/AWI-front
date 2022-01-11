export class RecipeCategory {
  constructor(
    private _recipe_category_id: number,
    private _name: string
  ) {
  }

  get recipe_category_id(): number {
    return this._recipe_category_id;
  }

  set recipe_category_id(value: number) {
    this._recipe_category_id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }
}
