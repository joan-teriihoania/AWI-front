import { Component, AfterViewInit } from '@angular/core';
import {Allergene} from "../shared/classes/allergene";
import {AllergenesService} from "../shared/dao/allergenes.service";
import {Ingredient} from "../shared/classes/ingredient";
import {IngredientsService} from "../shared/dao/ingredients.service";
import {IngredientCategory} from "../shared/classes/ingredientcategory";
import {IngredientCategoriesService} from "../shared/dao/ingredientCategories.service";
import {Recipe} from "../shared/classes/recipe";
import {RecipesService} from "../shared/dao/recipes.service";
import {AllergenesEditFormComponent} from "../shared/components/allergenes-edit-form/allergenes-edit-form.component";
import {AllergenesCreateFormComponent} from "../shared/components/allergenes-create-form/allergenes-create-form.component";
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
  recipes: Recipe[] = []

  constructor(
    private allergeneService: AllergenesService,
    private recipeService: RecipesService
  ) {
    this.subtitle = 'This is some text within a card block.';
    this.populateAllergenes()
    this.populateRecipes()
  }

  populateAllergenes(){
    this.allergeneService.getAll().then((allergenes) => {
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

  populateRecipes(){
    this.recipeService.getAll().then((recipes: Recipe[]) => {
      this.recipes = recipes
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
  getRecipes(){
    return this.recipes
  }

  addAllergene(component: AllergenesCreateFormComponent){
    component.addCallbackOnSubmit((success: any, error: any) => {
      if(success){
        this.populateAllergenes()
      } else {
        console.log(error)
      }
    })
    component.open()
  }

  ngAfterViewInit() { }
}
