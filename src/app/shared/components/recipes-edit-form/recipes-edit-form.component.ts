import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../../classes/user";
import {RecipeCategory} from "../../classes/recipecategory";
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {NotificationService} from "../../notification/notification.service";
import {RecipesService} from "../../dao/recipes.service";
import {UsersService} from "../../dao/users.service";
import {LoginService} from "../../session/login.service";
import {RecipeCategoriesService} from "../../dao/recipe-categories.service";
import {RecipeCategoriesCreateFormComponent} from "../recipe-categories-create-form/recipe-categories-create-form.component";
import {Recipe} from "../../classes/recipe";

@Component({
  selector: 'app-recipes-edit-form',
  templateUrl: './recipes-edit-form.component.html',
  styleUrls: ['./recipes-edit-form.component.scss']
})
export class RecipesEditFormComponent implements OnInit {
  @Input() recipe: Recipe | null = null
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
      this.notificationService.showError("Vous devez être connecté pour modifier des recettes", "Connexion requise")
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
      // tslint:disable-next-line:no-non-null-assertion
      name: new FormControl(this.recipe!.name, [
        Validators.required,
        Validators.minLength(4),
      ]),
      // tslint:disable-next-line:no-non-null-assertion
      nb_couvert: new FormControl(this.recipe!.nb_couvert, [
        Validators.required,
        Validators.min(1),
      ]),
      // tslint:disable-next-line:no-non-null-assertion
      category: new FormControl(this.recipe!.category, [
        Validators.required
      ])
    })
  }

  onSubmit(){
    const recipeFormValue = this.recipeForm.value

    const copyRecipe: Recipe = JSON.parse(JSON.stringify(this.recipe))
    copyRecipe.name = recipeFormValue.name
    copyRecipe.nb_couvert = recipeFormValue.nb_couvert
    copyRecipe.category = recipeFormValue.category

    this.recipeService.put(copyRecipe).then(() => {
      for (const callback of this.callbacks) {
        callback(copyRecipe, undefined)
      }
      this.recipe!.name = copyRecipe.name;
      this.recipe!.nb_couvert = copyRecipe.nb_couvert;
      this.recipe!.category = copyRecipe.category;
      this.notificationService.showSuccess("", "Recette modifiée")
    }).catch((err) => {
      for (const callback of this.callbacks) {
        callback(undefined, err)
      }

      this.notificationService.showError(err.error, "Erreur rencontrée")
    })
  }

  getName(){return this.recipeForm.get('name')}
}
