import {User} from "./user";
import {Step} from "./step";
import {StepComponent} from "./stepcomponent";
import {Ingredient} from "./ingredient";

export class Recipe implements StepComponent {
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

  getIngredients(): Ingredient[] {
    const allIngredients: Ingredient[] = []
    for (let i = 0; i < this.steps.length;i++) {
      const step = this.steps[i]
      for (const ingredient of step.getIngredients()) {
        allIngredients.push(ingredient)
      }
    }
    return allIngredients
  }

  getName(): string {
    return "";
  }
}
