import {User} from "./user";
import {Step} from "./step";
import {StepComponent} from "./stepcomponent";
import {Ingredient} from "./ingredient";
import {Component} from "./component";
import {RecipeCategory} from "./recipecategory";

export class Recipe implements Component {
  constructor(
    private _recipe_id: number,
    private _name: string,
    private _nb_couvert: number,
    private _author: User,
    private _category: RecipeCategory,
    private _steps: [
      {
        quantity: number
        step: Step
      }
    ],
    private _ingredients: Ingredient[]
  ) {
  }

  public toString(){
    return this._name;
  }

  get recipe_id(): number {
    return this._recipe_id;
  }

  set recipe_id(value: number) {
    this._recipe_id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get nb_couvert(): number {
    return this._nb_couvert;
  }

  set nb_couvert(value: number) {
    this._nb_couvert = value;
  }

  get author(): User {
    return this._author;
  }

  set author(value: User) {
    this._author = value;
  }

  get category(): RecipeCategory {
    return this._category;
  }

  set category(value: RecipeCategory) {
    this._category = value;
  }

  get steps(): [{ quantity: number; step: Step }] {
    return this._steps;
  }

  set steps(value: [{ quantity: number; step: Step }]) {
    this._steps = value;
  }

  get ingredients(): Ingredient[] {
    return this._ingredients;
  }

  set ingredients(value: Ingredient[]) {
    this._ingredients = value;
  }

  getId(): number {
    return this.recipe_id;
  }
}
