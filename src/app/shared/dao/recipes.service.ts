import { Injectable } from '@angular/core';
import {ApiService} from "../http/api.service";
import {Allergene} from "../classes/allergene";
import {Recipe} from "../classes/recipe";

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
    return this.apiService.put<Recipe>("/recipes", {
      name: recipe.name,
      nb_couvert: recipe.nb_couvert,
      user_id: recipe.author.username,
      recipe_category_id: recipe.category.recipe_category_id
    })
  }

  // Considered not created if ID is -1
  post(recipe: Recipe, createIfNotExists = true){
    if(createIfNotExists && recipe.recipe_id === -1){
      // if created, sets returned object as the given one to update its id
      return new Promise((resolve, reject) => {
        this.put(recipe).then((recipe_) => {
          recipe = recipe_
          resolve(recipe)
        }).catch(reject)
      })
    } else {
      return this.apiService.post<Recipe>("/recipes/" + recipe.recipe_id, {
        name: recipe.name,
        nb_couvert: recipe.nb_couvert,
        user_id: recipe.author.username,
        recipe_category_id: recipe.category.recipe_category_id
      })
    }
  }

  delete(recipe: Recipe){
    return this.apiService.delete<any>("/recipes/" + recipe.recipe_id, {})
  }
}
