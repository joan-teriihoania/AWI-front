import {Component, OnInit, ViewChild} from '@angular/core';
import {Allergene} from "../../classes/allergene";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {NotificationService} from "../../notification/notification.service";
import {AllergenesService} from "../../dao/allergenes.service";
import {Recipe} from "../../classes/recipe";
import {RecipesService} from "../../dao/recipes.service";
import {User} from "../../classes/user";
import {Ingredient} from "../../classes/ingredient";
import {Step} from "../../classes/step";
import {LoginService} from "../../session/login.service";
import {UsersService} from "../../dao/users.service";
import {RecipeCategoriesService} from "../../dao/recipe-categories.service";
import {RecipeCategory} from "../../classes/recipecategory";
import {RecipeCategoriesCreateFormComponent} from "../recipe-categories-create-form/recipe-categories-create-form.component";

@Component({
  selector: 'app-recipes-create-form',
  templateUrl: './recipes-create-form.component.html',
  styleUrls: ['./recipes-create-form.component.scss']
})
export class RecipesCreateFormComponent implements OnInit {
  @ViewChild('content') content: any;

  callbacks: ((success: any, error: any) => void)[] = []
  recipeForm: FormGroup = new FormGroup({});
  closeResult = ''
  errorMessage = ""
  isLogged: boolean = false
  user: User | null = null
  recipeCategories: RecipeCategory[] = []

  constructor(
    private modalService: NgbModal,
    private notificationService: NotificationService,
    private recipeService: RecipesService,
    private userService: UsersService,
    private loginService: LoginService,
    private recipeCategoryService: RecipeCategoriesService
  ) {
    loginService.isLoggedIn().then((user) => {
      this.user = user
      this.isLogged = true
    }).catch(() => {
      this.isLogged = false
    })

    this.populateRecipeCategories()
  }

  public populateRecipeCategories(){
    this.recipeCategoryService.getAll().then((recipeCategories) => {
      this.recipeCategories = recipeCategories;
    })
  }

  addCallbackOnSubmit(callback: (success: any, error: any) => void){
    this.callbacks.push(callback)
  }

  open() {
    if (this.isLogged) {
      this.modalService.open(this.content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    } else {
      this.notificationService.showError("Vous devez être connecté pour créer des recettes", "Connexion requise")
    }
  }

  public getRecipeCategories(){
    return this.recipeCategories
  }

  public addRecipeCategory(component: RecipeCategoriesCreateFormComponent){
    component.addCallbackOnSubmit((success: any, error: any) => {
      if(success){
        this.populateRecipeCategories()
      } else {
        console.log(error)
      }
    })
    component.open()
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  ngOnInit(): void {
    this.recipeForm = new FormGroup({
      name: new FormControl("", [
        Validators.required,
        Validators.minLength(4),
      ]),
      nb_couvert: new FormControl("", [
        Validators.required,
        Validators.min(1),
      ]),
      category: new FormControl("", [
        Validators.required
      ])
    })
  }

  onSubmit(){
    const recipeFormValue = this.recipeForm.value
    console.log(recipeFormValue)
    const recipe: Recipe = new Recipe(
      -1,
      recipeFormValue.name,
      recipeFormValue.nb_couvert,
      // tslint:disable-next-line:no-non-null-assertion
      this.user!,
      recipeFormValue.category,
      // @ts-ignore
      [],
      []
    )

    this.recipeService.post(recipe).then(() => {
      for (const callback of this.callbacks) {
        callback(recipe, undefined)
      }

      this.notificationService.showSuccess("", "Recette créé")
    }).catch((err) => {
      for (const callback of this.callbacks) {
        callback(undefined, err)
      }

      this.notificationService.showError(err.error, "Erreur rencontrée")
    })
  }

  getName(){return this.recipeForm.get('name')}

}
