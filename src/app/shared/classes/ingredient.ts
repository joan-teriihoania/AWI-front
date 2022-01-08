import {Unit} from "./unit";
import {IngredientCategory} from "./ingredientcategory";
import {Allergene} from "./allergene";

export class Ingredient {
  constructor(
    private _ingredient_id: number,
    private _name: string,
    private _price: number,
    private _unit: Unit,
    private _category: IngredientCategory,
    private allergenes: Allergene[]
  ) {
  }

  get ingredient_id(): number {
    return this._ingredient_id;
  }

  get name(): string {
    return this._name;
  }

  get price(): number {
    return this._price;
  }

  get unit(): Unit {
    return this._unit;
  }

  getUnitID(){
    return this._unit.unit_id;
  }

  get category(): IngredientCategory {
    return this._category;
  }

  getCategoryID(){
    return this._category.ingredient_category_id;
  }

  getAllergenes(){
    for (const allergene in this.allergenes){
      
    }
  }

  public toString(){
    return this.name;
  }
}
