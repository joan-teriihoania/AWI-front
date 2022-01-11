import { Injectable } from '@angular/core';
import {ApiService} from "../http/api.service";
import {Allergene} from "../classes/allergene";
import {Recipe} from "../classes/recipe";
import {Step} from "../classes/step";

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  constructor(private apiService: ApiService) { }

  getById(recipe_id: number) {
    return this.apiService.get<Recipe>("/recipes/" + recipe_id, {})
  }

  get(recipe: Recipe) {
    return this.getById(recipe.recipe_id)
  }

  getAll(){
    return this.apiService.get<Recipe[]>("/recipes", {})
  }

  put(recipe: Recipe){
    return this.apiService.put<Recipe>("/recipes/" + recipe.recipe_id, {
      name: recipe.name,
      nb_couvert: recipe.nb_couvert,
      user_id: recipe.author.user_id,
      recipe_category_id: recipe.category.recipe_category_id
    })
  }

  post(recipe: Recipe){
    return this.apiService.post<Recipe>("/recipes", {
      name: recipe.name,
      nb_couvert: recipe.nb_couvert,
      user_id: recipe.author.user_id,
      recipe_category_id: recipe.category.recipe_category_id
    })
  }

  delete(recipe: Recipe){
    return this.apiService.delete<any>("/recipes/" + recipe.recipe_id, {})
  }

  addStep(recipe: Recipe, step: Step, position: number, quantity: number){
    return this.apiService.post<Recipe>("/recipes/" + recipe.recipe_id + "/steps/" + step.step_id, {
      position,
      quantity
    })
  }

  removeStep(recipe: Recipe, step: Step){
    return this.apiService.delete<Recipe>("/recipes/" + recipe.recipe_id + "/steps/" + step.step_id, {})
  }
}
