import {Ingredient} from "./ingredient";
import {Step} from "./step";
import {Recipe} from "./recipe";
import {Component} from "./component";

export class StepComponent {
  get step_component_id(): number {
    return this._step_component_id;
  }

  constructor(
    private _step_component_id: number,
    private _step: Step,
    private _component: Component,
    private _quantity: number
  ) {}

  get step(): Step {
    return this._step;
  }

  get component(): Component {
    return this._component;
  }

  getComponentID(): number {
    return this.component.getId()
  }

  get quantity(): number {
    return this._quantity;
  }
}
