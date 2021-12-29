import {Ingredient} from "./ingredient";

export interface StepComponent {
  getIngredients(): Ingredient[]
  getName(): string
  getDescription(): string
  getDuration(): number
}
