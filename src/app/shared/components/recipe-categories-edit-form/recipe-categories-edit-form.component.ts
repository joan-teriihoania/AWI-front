import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Allergene} from "../../classes/allergene";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {NotificationService} from "../../notification/notification.service";
import {AllergenesService} from "../../dao/allergenes.service";
import {RecipeCategory} from "../../classes/recipecategory";
import {RecipeCategoriesService} from "../../dao/recipe-categories.service";

@Component({
  selector: 'app-recipe-categories-edit-form',
  templateUrl: './recipe-categories-edit-form.component.html',
  styleUrls: ['./recipe-categories-edit-form.component.scss']
})
export class RecipeCategoriesEditFormComponent implements OnInit {
  @Input() recipeCategory: RecipeCategory = new RecipeCategory(-1, "")
  @ViewChild('content') content: any;
  recipeCategoryForm: FormGroup = new FormGroup({});
  closeResult = ''

  constructor(
    private modalService: NgbModal,
    private notificationService: NotificationService,
    private recipeCategoryService: RecipeCategoriesService
  ) {
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
    const copyRecipeCategory = JSON.parse(JSON.stringify(this.recipeCategory))
    copyRecipeCategory.name = recipeCategoryFormValue.name

    this.recipeCategoryService.put(copyRecipeCategory).then(() => {
      this.recipeCategory.name = copyRecipeCategory.name
      this.notificationService.showSuccess("", "Catégorie de recette modifiée")
    }).catch((err) => {
      this.notificationService.showError(err.error, "Erreur rencontrée")
    })
  }

  getName(){return this.recipeCategoryForm.get('name')}
}
