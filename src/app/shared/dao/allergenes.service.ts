import { Injectable } from '@angular/core';
import {ApiService} from "../http/api.service";
import {Allergene} from "../classes/allergene";

@Injectable({
  providedIn: 'root'
})
export class AllergenesService {

  constructor(private apiService: ApiService) { }

  getById(allergene_id: number) {
    return this.apiService.get<Allergene>("/allergenes/" + allergene_id, {})
  }

  get(allergene: Allergene) {
    return this.getById(allergene.allergene_id)
  }

  getAll(){
    return this.apiService.get<Allergene[]>("/allergenes", {})
  }

  post(allergene: Allergene){
    return this.apiService.post<Allergene>("/allergenes", {name: allergene.name})
  }

  // Considered not created if ID is -1
  put(allergene: Allergene, createIfNotExists = true){
    return this.apiService.put<Allergene>("/allergenes/" + allergene.allergene_id, {
      name: allergene.name
    })
  }

  delete(allergene: Allergene){
    return this.apiService.delete<any>("/allergenes/" + allergene.allergene_id, {})
  }
}
