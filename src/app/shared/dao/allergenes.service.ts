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

  put(allergene: Allergene){
    return this.apiService.put<Allergene>("/allergenes", {name: allergene.name})
  }

  // Considered not created if ID is -1
  post(allergene: Allergene, createIfNotExists = true){
    if(createIfNotExists && allergene.allergene_id === -1){
      // if created, sets returned object as the given one to update its id
      return new Promise((resolve, reject) => {
        this.put(allergene).then((allergene_) => {
          allergene = allergene_
          resolve(allergene)
        }).catch(reject)
      })
    } else {
      return this.apiService.post<Allergene>("/allergenes/" + allergene.allergene_id, {
        name: allergene.name
      })
    }
  }

  delete(allergene: Allergene){
    return this.apiService.delete<any>("/allergenes/" + allergene.allergene_id, {})
  }
}
