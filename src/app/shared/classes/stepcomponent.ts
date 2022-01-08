import {Ingredient} from "./ingredient";
import {Step} from "./step";
import {Recipe} from "./recipe";

export class StepComponent {
  get step_component_id(): number {
    return this._step_component_id;
  }

  constructor(
    private _step_component_id: number,
    private _component: Step | Recipe | Ingredient,
    private _quantity: number
  ) {}

  get component(): Step | Recipe | Ingredient {
    return this._component;
  }

  getComponentID(): number {
    let id;
    if (this.component instanceof Step){
      id = this.component.step_id;
    }
    else if(this.component instanceof Recipe){
      id = this.component.recipe_id;
    }
    else{
      id = this.component.ingredient_id;
    }
    return id;
  }

  get quantity(): number {
    return this._quantity;
  }
}
