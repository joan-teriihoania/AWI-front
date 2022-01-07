import {StepComponent} from "./stepcomponent";
import {Ingredient} from "./ingredient";

export class Step implements StepComponent {
  constructor(
    private step_id: number,
    private name: string,
    private description: string,
    private duration: number,
    private components: Map<StepComponent, number>
  ) {
  }

  public toString(){
    return this.name;
  }

  getDescription(): string {
    return this.description;
  }

  getDuration(): number {
    return this.duration;
  }

  getIngredients(): Ingredient[] {
    const allIngredients: Ingredient[] = []
    for (const [key, value] of this.components) {
      for (let i = 0; i < value; i++) {
        for (const ingredient of key.getIngredients()) {
          allIngredients.push(ingredient)
        }
      }
    }
    return allIngredients
  }

  getName(): string {
    return this.name;
  }
}
