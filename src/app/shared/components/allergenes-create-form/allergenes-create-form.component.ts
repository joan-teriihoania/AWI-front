import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Allergene} from "../../classes/allergene";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {NotificationService} from "../../notification/notification.service";
import {AllergenesService} from "../../dao/allergenes.service";

@Component({
  selector: 'app-allergenes-create-form',
  templateUrl: './allergenes-create-form.component.html',
  styleUrls: ['./allergenes-create-form.component.scss']
})
export class AllergenesCreateFormComponent implements OnInit {
  @ViewChild('content') content: any;

  allergene: Allergene = new Allergene(-1, "")
  callbacks: ((success: any, error: any) => void)[] = []
  allergeneForm: FormGroup = new FormGroup({});
  closeResult = ''

  constructor(
    private modalService: NgbModal,
    private notificationService: NotificationService,
    private allergeneService: AllergenesService
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
      for (const callback of this.callbacks) {
        callback(this.allergene, undefined)
      }

      this.notificationService.showSuccess("", "Allergène créé")
    }).catch((err) => {
      for (const callback of this.callbacks) {
        callback(undefined, err)
      }

      this.notificationService.showError(err.error, "Erreur rencontrée")
    })
  }

  getName(){return this.allergeneForm.get('name')}

}
