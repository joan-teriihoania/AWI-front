import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {LoginService} from "../../session/login.service";
import {ApiService} from "../../http/api.service";
import {HttpErrorResponse} from "@angular/common/http";
import {PopupService} from "../../notification/popup.service";
import {NotificationService} from "../../notification/notification.service";

@Component({
  selector: 'app-account-reset-request',
  templateUrl: './account-reset-request.component.html',
  styleUrls: ['./account-reset-request.component.scss']
})
export class AccountResetRequestComponent implements OnInit {
  accountResetRequestForm: FormGroup = new FormGroup({})
  errorMessage: string = ""
  isLogged: boolean = false

  constructor(
    private loginService: LoginService,
    private apiService: ApiService,
    private popupService: PopupService,
    private notificationService: NotificationService
  ) {
    loginService.isLoggedIn().then(() => {
      this.isLogged = true
    }).catch(() => {
      this.isLogged = false
    })
  }

  ngOnInit(): void {
    this.accountResetRequestForm = new FormGroup({
      email: new FormControl("", [
        Validators.required,
        Validators.email
      ])
    })
  }

  onSubmit(){
    this.apiService.put("/account/reset", {
      email: this.accountResetRequestForm.value.email
    }).then((data: any) => {
      this.popupService.showSuccess("Réinitialisation", "Si un compte a été enregistré avec cette adresse, un mail vous a été envoyé avec un lien vous permettant de réinitialiser votre compte.")
    }).catch((err: HttpErrorResponse) => {
      this.notificationService.showError(err.error, "Erreur rencontrée")
    })
  }

}
