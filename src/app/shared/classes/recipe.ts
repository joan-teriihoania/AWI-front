import {User} from "./user";
import {Step} from "./step";
import {StepComponent} from "./stepcomponent";
import {Ingredient} from "./ingredient";

export class Recipe  {
  constructor(
    private _recipe_id: number,
    private _name: string,
    private _nb_couvert: number,
    private _author: User,
    private _category: {
      recipe_category_id: number
      name: string
    },
    private _steps: [
      {
        quantity: number
        step: Step
      }
    ],
    private _ingredients: Ingredient[]
  ) {
  }
  get recipe_id(): number {
    return this._recipe_id;
  }

  public toString(){
    return this._name;
  }

  getDescription(): string {
    return "";
  }

  getDuration(): number {
    return 0;
  }

  getName(): string {
    return "";
  }

  get recipe_id(): number {
    return this._recipe_id;
  }

  get name(): string {
    return this._name;
  }

  get nb_couvert(): number {
    return this._nb_couvert;
  }

  get author(): User {
    return this._author;
  }

  get category(): { recipe_category_id: number; name: string } {
    return this._category;
  }

  get steps(): [{ quantity: number; step: Step }] {
    return this._steps;
  }

  get ingredients(): Ingredient[] {
    return this._ingredients;
  }
}
