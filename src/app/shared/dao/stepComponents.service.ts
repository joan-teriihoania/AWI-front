import { Injectable } from '@angular/core';
import {ApiService} from "../http/api.service";
import {StepComponent} from "../classes/stepcomponent";


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
      return this.apiService.put<StepComponent>("/step_components", {})
    }
  
    // Considered not created if ID is -1
    put(stepcomponent: StepComponent, createIfNotExists = true){
      if(createIfNotExists && stepcomponent.step_component_id === -1){
        // if created, sets returned object as the given one to update its id
        return new Promise((resolve, reject) => {
          this.post(stepcomponent).then((stepcomponent_) => {
            stepcomponent = stepcomponent_
            resolve(stepcomponent)
          }).catch(reject)
        })
      } else {
        return this.apiService.put<StepComponent>("/step_components/" + stepcomponent.step_component_id, {
          //name: stepcomponent.name
        })
      }
    }
  
    delete(stepcomponent: StepComponent){
      return this.apiService.delete<any>("/step_components/" + stepcomponent.step_component_id, {})
    }
  }
