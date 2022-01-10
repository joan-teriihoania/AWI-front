
import {Component, ContentChild, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from "../../classes/ingredient";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {IngredientsService} from "../../dao/ingredients.service";
import {NotificationService} from "../../notification/notification.service";
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Unit} from "../../classes/unit";
import {IngredientCategory} from "../../classes/ingredientcategory";
import {Allergene} from '../../classes/allergene';

@Component({
  selector: 'app-ingredients-edit-form',
  templateUrl: './ingredients-edit-form.component.html',
  styleUrls: ['./ingredients-edit-form.component.scss']
})
export class IngredientsEditFormComponent implements OnInit {
  
  @Input() ingredient: Ingredient = new Ingredient(-1, "",-1,new Unit(-1,""),new IngredientCategory(-1,""),[])
  @ViewChild('content') content: any;
  ingredientForm: FormGroup = new FormGroup({});
  closeResult = ''

  constructor(
    private modalService: NgbModal,
    private notificationService: NotificationService,
    private ingredientService: IngredientsService
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
    this.ingredientForm = new FormGroup({
      name: new FormControl(this.ingredient.name, [
        Validators.required,
        Validators.minLength(4),
      ]),
      price: new FormControl(this.ingredient.price, [
        Validators.required,
        Validators.minLength(1),
      ]),
      unit: new FormControl(this.ingredient.unit, [
        Validators.required,
        Validators.minLength(1),
      ]),
      ingredientCategory: new FormControl(this.ingredient.category, [
        Validators.required,
        Validators.minLength(4),
      ]),
      allergenes: new FormControl(this.ingredient.allergenes, [
      ])
    })
  }

  onSubmit(){
    const ingredientFormValue = this.ingredientForm.value
    const copyIngredient = JSON.parse(JSON.stringify(this.ingredient))
    copyIngredient.name = ingredientFormValue.name
    copyIngredient.price=ingredientFormValue.price
    copyIngredient.unit = ingredientFormValue.unit
    copyIngredient.category = ingredientFormValue.category
    copyIngredient.allergenes = ingredientFormValue.allergenes

    this.ingredientService.put(copyIngredient).then(() => {
      this.ingredient.name = copyIngredient.name;
      this.ingredient.price = copyIngredient.price;
      this.ingredient.unit = copyIngredient.unit;
      this.ingredient.category = copyIngredient.category;
      this.ingredient.allergenes = copyIngredient.allergenes;
      this.notificationService.showSuccess("", "Ingrédient modifié")
    }).catch((err) => {
      this.notificationService.showError(err.error, "Erreur rencontrée")
    })
  }

  getName(){return this.ingredientForm.get('name')}
}

