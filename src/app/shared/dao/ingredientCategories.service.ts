import { Injectable } from '@angular/core';
import {ApiService} from "../http/api.service";
import {IngredientCategory} from "../classes/ingredientcategory";


@Injectable({
    providedIn: 'root'
  })
  export class IngredientCategoriesService {
  
    constructor(private apiService: ApiService) { }
  
    getById(ingredient_category_id: number) {
      return this.apiService.get<IngredientCategory>("/ingredient_categories/" + ingredient_category_id, {})
    }
  
    get(ingredient_category: IngredientCategory) {
      return this.getById(ingredient_category.ingredient_category_id)
    }
  
    getAll(){
      return this.apiService.get<IngredientCategory[]>("/ingredient_categories", {})
    }
  
    post(ingredient_category: IngredientCategory){
      return this.apiService.put<IngredientCategory>("/ingredient_categories", {name: ingredient_category.name})
    }
  
    // Considered not created if ID is -1
    put(ingredient_category: IngredientCategory, createIfNotExists = true){
      if(createIfNotExists && ingredient_category.ingredient_category_id === -1){
        // if created, sets returned object as the given one to update its id
        return new Promise((resolve, reject) => {
          this.post(ingredient_category).then((ingredient_category_) => {
            ingredient_category = ingredient_category_
            resolve(ingredient_category)
          }).catch(reject)
        })
      } else {
        return this.apiService.put<IngredientCategory>("/ingredient_categories/" + ingredient_category.ingredient_category_id, {
          name: ingredient_category.name
        })
      }
    }
  
    delete(ingredient_category: IngredientCategory){
      return this.apiService.delete<any>("/ingredient_categories/" + ingredient_category.ingredient_category_id, {})
    }
  }
