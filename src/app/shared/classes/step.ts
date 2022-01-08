
import {Ingredient} from "./ingredient";
import {StepComponent} from "./stepcomponent";

export class Step {
  constructor(
    private _step_id: number,
    private _name: string,
    private _description: string,
    private _duration: number,
    private _components: StepComponent[]
  ) {
  }

  public toString(){
    return this._name;
  }


  get step_id(): number {
    return this._step_id;
  }

  get name(): string {
    return this._name;
  }

  get description(): string {
    return this._description;
  }

  get duration(): number {
    return this._duration;
  }

  get components(): StepComponent[] {
    return this._components;
  }
}
