import { Component, AfterViewInit } from '@angular/core';
import {Allergene} from "../shared/classes/allergene";
import {AllergenesService} from "../shared/dao/allergenes.service";
import {Ingredient} from "../shared/classes/ingredient";
import {IngredientsService} from "../shared/dao/ingredients.service";
import {IngredientCategory} from "../shared/classes/ingredientcategory";
import {IngredientCategoriesService} from "../shared/dao/ingredientCategories.service";
//declare var require: any;

@Component({
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements AfterViewInit {
  subtitle: string;
  allergenes: Allergene[] = []
  ingredients: Ingredient[] = []
  ingredientscategory: IngredientCategory[] = []
  constructor(allergeneService: AllergenesService, ingredientService: IngredientsService, ingredientCategoryService: IngredientCategoriesService) {
    this.subtitle = 'This is some text within a card block.';
    allergeneService.getAll().then((allergenes) => {
      console.log(allergenes)
      this.allergenes = allergenes
    }).catch(console.error)
    ingredientService.getAll().then((ingredients) => {
      console.log(ingredients)
      this.ingredients = ingredients
    }).catch(console.error)
    ingredientCategoryService.getAll().then((ingredientscategory) => {
      console.log(ingredientscategory)
      this.ingredientscategory = ingredientscategory
    }).catch(console.error)
  }

  getAllergenes(){
    return this.allergenes
  }

  getIngredients(){
    return this.ingredients
  }

  getIngredientsCategory(){
    return this.ingredientscategory
  }

  ngAfterViewInit() { }
}
