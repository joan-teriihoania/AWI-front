
import {Ingredient} from "./ingredient";

export class Step {
  constructor(
    private step_id: number,
    private name: string,
    private description: string,
    private duration: number
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

  

  getName(): string {
    return this.name;
  }
}
