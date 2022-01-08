import {User} from "./user";
import {Step} from "./step";
import {StepComponent} from "./stepcomponent";
import {Ingredient} from "./ingredient";

export class Recipe  {
  constructor(
    private _recipe_id: number,
    private name: string,
    private nb_couvert: number,
    private user: User,
    private steps: Step[]
  ) {
  }
  get recipe_id(): number {
    return this._recipe_id;
  }

  public toString(){
    return this.name;
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
}
