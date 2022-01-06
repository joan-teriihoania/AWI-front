import {Component, Input, OnInit} from '@angular/core';
import {Allergene} from "../../classes/allergene";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AllergenesService} from "../../dao/allergenes.service";
import {NotificationService} from "../../toastr/notification.service";

@Component({
  selector: 'app-allergenes-edit-form',
  templateUrl: './allergenes-edit-form.component.html',
  styleUrls: ['./allergenes-edit-form.component.scss']
})
export class AllergenesEditFormComponent implements OnInit {
  @Input() allergene: Allergene = new Allergene(-1, "")
  allergeneForm: FormGroup = new FormGroup({});

  constructor(
    private notificationService: NotificationService,
    private allergeneService: AllergenesService
  ) {}

  ngOnInit(): void {
    this.allergeneForm = new FormGroup({
      name: new FormControl(this.allergene.name, [
        Validators.required,
        Validators.minLength(4),
      ])
    })
  }

  onSubmit(){
    const allergeneFormValue = this.allergeneForm.value
    this.allergene.name = allergeneFormValue.name
    this.allergeneService.post(this.allergene).then(() => {
      this.notificationService.showSuccess("", "Allergène modifié")
    }).catch((err) => {
      this.notificationService.showSuccess(err, "Erreur rencontrée")
    })
  }

  getName(){return this.allergeneForm.get('name')}

}
