import {User} from "./user";
import {Step} from "./step";
import {StepComponent} from "./stepcomponent";
import {Ingredient} from "./ingredient";

export class Recipe  {
  constructor(
    private recipe_id: number,
    private name: string,
    private nb_couvert: number,
    private user: User,
    private steps: Step[]
  ) {
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
