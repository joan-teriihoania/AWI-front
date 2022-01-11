import { Injectable } from '@angular/core';
import {ApiService} from "../http/api.service";
import {Allergene} from "../classes/allergene";
import {Step} from "../classes/step";

@Injectable({
  providedIn: 'root'
})
export class StepService {

  constructor(private apiService: ApiService) { }

  getById(step_id: number) {
    return this.apiService.get<Step>("/steps/" + step_id, {})
  }

  get(step: Step) {
    return this.getById(step.step_id)
  }

  getAll(){
    return this.apiService.get<Step[]>("/steps", {})
  }

  post(step: Step){
    return this.apiService.post<Step>("/steps", {
      name: step.name,
      description: step.description,
      duration: step.duration
    })
  }

  put(step: Step){
    return this.apiService.put<Step>("/steps/" + step.step_id, {
      name: step.name,
      description: step.description,
      duration: step.duration
    })
  }

  delete(step: Step){
    return this.apiService.delete<any>("/steps/" + step.step_id, {})
  }
}
