import {Unit} from "./unit";
import {IngredientCategory} from "./ingredientcategory";
import {Allergene} from "./allergene";

export class Ingredient {
  constructor(
    private _ingredient_id: number,
    private _name: string,
    private price: number,
    private unit: Unit,
    private category: IngredientCategory,
    private allergenes: Allergene[]
  ) {
  }

  get ingredient_id(): number {
    return this._ingredient_id;
  }

  get name(): string {
    return this._name;
  }

  getAllergenes(){
    for (const allergene in this.allergenes){
      
    }
  }

  public toString(){
    return this.name;
  }
}
