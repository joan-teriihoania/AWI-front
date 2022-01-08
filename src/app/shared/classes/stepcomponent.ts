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

  get quantity(): number {
    return this._quantity;
  }
}
