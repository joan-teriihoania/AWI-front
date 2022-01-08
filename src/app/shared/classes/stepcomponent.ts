import {Ingredient} from "./ingredient";
import {Step} from "./step";
import {Recipe} from "./recipe";

export class StepComponent {
  constructor(
    private _step_component_id: number,
    private _steps: Step[],
    private _sub_step: Step[],
    private _sub_recipe: Recipe[],
    private _sub_ingredient: Ingredient[],
    private _quantity: number
  ) {}
  
  get step_component_id(): number {
    return this._step_component_id;
  }


  getIngredients(){
    const allIngredients: Ingredient[] = []
    for (const ingredient of this._sub_ingredient) {
          allIngredients.push(ingredient)
    }
    return allIngredients
  }
}
