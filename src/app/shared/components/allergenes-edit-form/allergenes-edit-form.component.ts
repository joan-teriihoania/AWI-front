import {Component, ContentChild, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Allergene} from "../../classes/allergene";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AllergenesService} from "../../dao/allergenes.service";
import {NotificationService} from "../../notification/notification.service";
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-allergenes-edit-form',
  templateUrl: './allergenes-edit-form.component.html',
  styleUrls: ['./allergenes-edit-form.component.scss']
})
export class AllergenesEditFormComponent implements OnInit {
  @Input() allergene: Allergene = new Allergene(-1, "")
  @ViewChild('content') content: any;
  allergeneForm: FormGroup = new FormGroup({});
  closeResult = ''

  constructor(
    private modalService: NgbModal,
    private notificationService: NotificationService,
    private allergeneService: AllergenesService
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
    this.allergeneForm = new FormGroup({
      name: new FormControl(this.allergene.name, [
        Validators.required,
        Validators.minLength(4),
      ])
    })
  }

  onSubmit(){
    const allergeneFormValue = this.allergeneForm.value
    const copyAllergene = JSON.parse(JSON.stringify(this.allergene))
    copyAllergene.name = allergeneFormValue.name

    this.allergeneService.put(copyAllergene).then(() => {
      this.allergene.name = copyAllergene.name
      this.notificationService.showSuccess("", "Allerg??ne modifi??")
    }).catch((err) => {
      this.notificationService.showError(err.error, "Erreur rencontr??e")
    })
  }

  getName(){return this.allergeneForm.get('name')}
}
