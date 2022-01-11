import { Injectable } from '@angular/core';
import {ApiService} from "../http/api.service";
import {StepComponent} from "../classes/stepcomponent";
import {Step} from "../classes/step";
import {Recipe} from "../classes/recipe";
import {Ingredient} from "../classes/ingredient";


@Injectable({
    providedIn: 'root'
  })
  export class StepComponentsService {

    constructor(private apiService: ApiService) { }

    getById(step_component_id: number) {
      return this.apiService.get<StepComponent>("/step_components/" + step_component_id, {})
    }

    get(stepcomponent: StepComponent) {
      return this.getById(stepcomponent.step_component_id)
    }

    getAll(){
      return this.apiService.get<StepComponent[]>("/step_components", {})
    }

    post(stepcomponent: StepComponent){
      return this.apiService.put<StepComponent>("/step_components", {
        step_id:stepcomponent.step.step_id,
        quantity:stepcomponent.quantity,
        sub_step_id: stepcomponent.component instanceof Step ? stepcomponent.component.getId() : null,
        sub_recipe_id: stepcomponent.component instanceof Recipe ? stepcomponent.component.getId() : null,
        sub_ingredient_id: stepcomponent.component instanceof Ingredient ? stepcomponent.component.getId() : null
      })
    }

    // Considered not created if ID is -1
    put(stepcomponent: StepComponent){
      return this.apiService.put<StepComponent>("/step_components/" + stepcomponent.step_component_id, {
        step_id:stepcomponent.step.step_id,
        quantity:stepcomponent.quantity,
        sub_step_id: stepcomponent.component instanceof Step ? stepcomponent.component.getId() : null,
        sub_recipe_id: stepcomponent.component instanceof Recipe ? stepcomponent.component.getId() : null,
        sub_ingredient_id: stepcomponent.component instanceof Ingredient ? stepcomponent.component.getId() : null
      })
    }

    delete(stepcomponent: StepComponent){
      return this.apiService.delete<any>("/step_components/" + stepcomponent.step_component_id, {})
    }
  }
