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
    private _allergenes: Allergene[]
  ) {
  }

  get ingredient_id(): number {
    return this._ingredient_id;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get price(): number {
    return this._price;
  }

  set price(value : number){
    this._price = value;
  }

  get unit(): Unit {
    return this._unit;
  }

  set unit(value : Unit){
    this._unit=value;
  }

  getUnitID(){
    return this._unit.unit_id;
  }

  get category(): IngredientCategory {
    return this._category;
  }
  
  set category(value : IngredientCategory){
    this._category=value;
  }

  getCategoryID(){
    return this._category.ingredient_category_id;
  }

  get allergenes(){
    return this._allergenes
  }

  set allergenes(value : Allergene[]){
    this._allergenes=value;
  }

  public toString(){
    return this.name;
  }
}
