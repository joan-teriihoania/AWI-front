import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {LoginService} from "../../session/login.service";
import {HttpErrorResponse} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";
import {ApiService} from "../../http/api.service";
import {PopupService} from "../../notification/popup.service";
import {NotificationService} from "../../notification/notification.service";

@Component({
  selector: 'app-account-reset-page',
  templateUrl: './account-reset-page.component.html',
  styleUrls: ['./account-reset-page.component.scss']
})
export class AccountResetPageComponent implements OnInit {
  accountResetForm: FormGroup = new FormGroup({})
  errorMessage: string = ""
  isLogged: boolean = false

  constructor(
    private loginService: LoginService,
    private route: ActivatedRoute,
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
    this.accountResetForm = new FormGroup({
      password: new FormControl("", [
        Validators.required,
        Validators.minLength(12)
      ])
    })
  }

  onSubmit(){
    this.apiService.put("/account/reset/" + this.route.snapshot.params.id, {
      new_password: this.accountResetForm.value.password
    }).then((data: any) => {
      this.popupService.showSuccess("Réinitialisation", "Votre compte a été réinitialisé avec votre nouveau mot de passe. Vous pouvez dés à présent vous y connecter.")
    }).catch((err: HttpErrorResponse) => {
      this.notificationService.showError(err.error, "Erreur rencontrée")
    })
  }

}
