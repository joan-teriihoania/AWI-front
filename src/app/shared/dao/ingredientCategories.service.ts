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
      return this.apiService.post<IngredientCategory>("/ingredient_categories", {name: ingredient_category.name})
    }

    // Considered not created if ID is -1
    put(ingredient_category: IngredientCategory){
      return this.apiService.put<IngredientCategory>("/ingredient_categories/" + ingredient_category.ingredient_category_id, {
        name: ingredient_category.name
      })
    }

    delete(ingredient_category: IngredientCategory){
      return this.apiService.delete<any>("/ingredient_categories/" + ingredient_category.ingredient_category_id, {})
    }
  }
