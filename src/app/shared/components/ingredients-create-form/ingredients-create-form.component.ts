import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Ingredient} from "../../classes/ingredient";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {NotificationService} from "../../notification/notification.service";
import {IngredientsService} from "../../dao/ingredients.service";
import {Unit} from "../../classes/unit";
import {IngredientCategory} from "../../classes/ingredientcategory";
import {Allergene} from '../../classes/allergene';

@Component({
  selector: 'app-ingredients-create-form',
  templateUrl: './ingredients-create-form.component.html',
  styleUrls: ['./ingredients-create-form.component.scss']
})
export class IngredientsCreateFormComponent implements OnInit {
  @ViewChild('content') content: any;

  ingredient: Ingredient = new Ingredient(-1, "",-1,new Unit(-1,""),new IngredientCategory(-1,""),[])
  callbacks: ((success: any, error: any) => void)[] = []
  ingredientForm: FormGroup = new FormGroup({});
  closeResult = ''

  constructor(
    private modalService: NgbModal,
    private notificationService: NotificationService,
    private ingredientService: IngredientsService
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
    this.ingredient.name = ingredientFormValue.name
    this.ingredient.price = ingredientFormValue.price;
    this.ingredient.unit = ingredientFormValue.unit;
    this.ingredient.category = ingredientFormValue.category;
    this.ingredient.allergenes = ingredientFormValue.allergenes;
    this.ingredientService.post(this.ingredient).then(() => {
      for (const callback of this.callbacks) {
        callback(this.ingredient, undefined)
      }

      this.notificationService.showSuccess("", "Allergène créé")
    }).catch((err) => {
      for (const callback of this.callbacks) {
        callback(undefined, err)
      }

      this.notificationService.showError(err.error, "Erreur rencontrée")
    })
  }

  getName(){return this.ingredientForm.get('name')}

}
