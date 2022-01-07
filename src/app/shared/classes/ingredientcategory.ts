export class IngredientCategory {
  constructor(
    private ingredient_category_id: number,
    private name: string
  ) {
  }

  public toString(){
    return this.name;
  }
}
