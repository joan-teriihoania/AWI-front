import {Unit} from "./unit";
import {IngredientCategory} from "./ingredientcategory";
import {Allergene} from "./allergene";

export class Ingredient {
  constructor(
    private ingredient_id: number,
    private name: string,
    private price: number,
    private unit: Unit,
    private category: IngredientCategory,
    private allergenes: Allergene[]
  ) {
  }

  public toString(){
    return this.name;
  }
}
