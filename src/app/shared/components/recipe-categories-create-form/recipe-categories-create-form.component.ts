import {Component, OnInit, ViewChild} from '@angular/core';
import {Allergene} from "../../classes/allergene";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {NotificationService} from "../../notification/notification.service";
import {AllergenesService} from "../../dao/allergenes.service";
import {RecipeCategory} from "../../classes/recipecategory";
import {Recipe} from "../../classes/recipe";
import {RecipeCategoriesService} from "../../dao/recipe-categories.service";

@Component({
  selector: 'app-recipe-categories-create-form',
  templateUrl: './recipe-categories-create-form.component.html',
  styleUrls: ['./recipe-categories-create-form.component.scss']
})
export class RecipeCategoriesCreateFormComponent implements OnInit {
  @ViewChild('content') content: any;

  recipeCategory: RecipeCategory = new RecipeCategory(-1, "")
  callbacks: ((success: any, error: any) => void)[] = []
  recipeCategoryForm: FormGroup = new FormGroup({});
  closeResult = ''

  constructor(
    private modalService: NgbModal,
    private notificationService: NotificationService,
    private recipeCategoriesService: RecipeCategoriesService
  ) {
  }

  addCallbackOnSubmit(callback: (success: any, error: any) => void){
    this.callbacks.push(callback)
  }

  open() {
    this.modalService.open(this.content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
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
    this.recipeCategoryForm = new FormGroup({
      name: new FormControl(this.recipeCategory.name, [
        Validators.required,
        Validators.minLength(4),
      ])
    })
  }

  onSubmit(){
    const recipeCategoryFormValue = this.recipeCategoryForm.value
    this.recipeCategory.name = recipeCategoryFormValue.name

    this.recipeCategoriesService.post(this.recipeCategory).then(() => {
      for (const callback of this.callbacks) {
        callback(this.recipeCategory, undefined)
      }

      this.notificationService.showSuccess("", "Recette de catégorie créé")
    }).catch((err) => {
      for (const callback of this.callbacks) {
        callback(undefined, err)
      }

      this.notificationService.showError(err.error, "Erreur rencontrée")
    })
  }

  getName(){return this.recipeCategoryForm.get('name')}
}
