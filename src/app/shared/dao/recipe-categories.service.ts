import { Injectable } from '@angular/core';
import {ApiService} from "../http/api.service";
import {IngredientCategory} from "../classes/ingredientcategory";
import {RecipeCategory} from "../classes/recipecategory";
import {Recipe} from "../classes/recipe";

@Injectable({
  providedIn: 'root'
})
export class RecipeCategoriesService {

  constructor(private apiService: ApiService) { }

  getById(recipe_category_id: number) {
    return this.apiService.get<RecipeCategory>("/recipe_categories/" + recipe_category_id, {})
  }

  get(recipe_category: RecipeCategory) {
    return this.getById(recipe_category.recipe_category_id)
  }

  getAll(){
    return this.apiService.get<RecipeCategory[]>("/recipe_categories", {})
  }

  post(recipe_category: RecipeCategory){
    return this.apiService.post<RecipeCategory>("/recipe_categories", {name: recipe_category.name})
  }

  // Considered not created if ID is -1
  put(recipe_category: RecipeCategory){
    return this.apiService.put<RecipeCategory>("/recipe_categories/" + recipe_category.recipe_category_id, {
      name: recipe_category.name
    })
  }

  delete(recipe_category: RecipeCategory){
    return this.apiService.delete<any>("/recipe_categories/" + recipe_category.recipe_category_id, {})
  }
}
