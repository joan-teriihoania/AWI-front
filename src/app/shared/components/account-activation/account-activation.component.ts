import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import swal from "sweetalert2";
import {LoginService} from "../../session/login.service";
import {PopupService} from "../../notification/popup.service";

@Component({
  selector: 'app-account-activation',
  templateUrl: './account-activation.component.html',
  styleUrls: ['./account-activation.component.scss']
})
export class AccountActivationComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private loginService: LoginService,
    private popupService: PopupService
  ) {
  }

  ngOnInit(): void {
    swal.showLoading()
    this.loginService.activate(this.route.snapshot.params.id).subscribe(() => {
      this.popupService.showSuccess("Activation de compte", "Votre compte a été activé ! Vous pouvez à présent vous connecter.")
    }, (err) => {
      this.popupService.showError("Activation de compte", `Une erreur est survenue lors de l'activation de votre compte : <code>${err.error}</code>`);
    }, () => {
      swal.hideLoading()
    })
  }

}
