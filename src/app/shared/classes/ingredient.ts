import {Unit} from "./unit";
import {IngredientCategory} from "./ingredientcategory";
import {Allergene} from "./allergene";
import {Component} from "./component";

export class Ingredient implements Component {
  constructor(
    private _ingredient_id: number,
    private _name: string,
    private _price: number,
    private _unit: Unit,
    private _category: IngredientCategory,
    private _allergenes: Allergene[]
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

  get allergenes(){
    return this._allergenes
  }

  public toString(){
    return this.name;
  }

  getId(): number {
    return this.ingredient_id;
  }
}
