import {Component, Input, OnInit} from '@angular/core';
import {Allergene} from "../../classes/allergene";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-allergenes-edit-form',
  templateUrl: './allergenes-edit-form.component.html',
  styleUrls: ['./allergenes-edit-form.component.scss']
})
export class AllergenesEditFormComponent implements OnInit {
  @Input() allergene: Allergene = new Allergene(-1, "")
  allergeneForm: FormGroup = new FormGroup({});

  constructor() {}

  ngOnInit(): void {
    this.allergeneForm = new FormGroup({
      name: new FormControl(this.allergene.name, [
        Validators.required,
        Validators.minLength(4),
      ])
    })
  }

  onSubmit(){
    const newAllergene = this.allergeneForm.value
    this.allergene.name = newAllergene.name
    // TODO save allergene using DAO service
  }

  getName(){return this.allergeneForm.get('name')}

}
