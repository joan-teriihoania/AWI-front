import { Injectable } from '@angular/core';
import {ApiService} from "../http/api.service";
import {Ingredient} from "../classes/ingredient";
import { Allergene } from '../classes/allergene';

@Injectable({
    providedIn: 'root'
  })
  export class IngredientsService {
  
    constructor(private apiService: ApiService) { }
  
    getById(ingredient_id: number) {
      return this.apiService.get<Ingredient>("/ingredients/" + ingredient_id, {})
    }
  
    get(ingredient: Ingredient) {
      return this.getById(ingredient.ingredient_id)
    }
  
    getAll(){
      return this.apiService.get<Ingredient[]>("/ingredients", {})
    }
  
    post(ingredient: Ingredient){
      return this.apiService.put<Ingredient>("/ingredients", {unit_id:ingredient.getUnitID(),ingredient_category_id:ingredient.getCategoryID(),name: ingredient.name, price: ingredient.price})
    }
  
    // Considered not created if ID is -1
    put(ingredient: Ingredient, createIfNotExists = true){
      if(createIfNotExists && ingredient.ingredient_id === -1){
        // if created, sets returned object as the given one to update its id
        return new Promise((resolve, reject) => {
          this.post(ingredient).then((ingredient_) => {
            ingredient = ingredient_
            resolve(ingredient)
          }).catch(reject)
        })
      } else {
        return this.apiService.put<Ingredient>("/ingredients/" + ingredient.ingredient_id, {
            unit_id:ingredient.getUnitID(),
            ingredient_category_id:ingredient.getCategoryID(),
            name: ingredient.name,
            price: ingredient.price
        })
      }
    }
  
    delete(ingredient: Ingredient){
      return this.apiService.delete<any>("/ingredients/" + ingredient.ingredient_id, {})
    }

    addAllergene(ingredient : Ingredient, allergene : Allergene){
        return this.apiService.put<Ingredient>("/ingredients/"+ingredient.ingredient_id+"/allergenes/"+allergene.allergene_id, {name: allergene.name})
    }

    removeAllergene(ingredient : Ingredient, allergene : Allergene){
        return this.apiService.delete<any>("/ingredients/"+ingredient.ingredient_id+"/allergenes/"+allergene.allergene_id,{})
    }
  }