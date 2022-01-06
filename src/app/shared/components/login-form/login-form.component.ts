import { Component, OnInit } from '@angular/core';
import {LoginService} from "../../session/login.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({})
  errorMessage: string = ""

  constructor(
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl("", [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl("", [
        Validators.required
      ])
    })
  }

  onSubmit(){
    this.loginService.login(this.loginForm.value.email, this.loginForm.value.password).then(() => {

    }).catch((err: string) => {
      this.errorMessage = err
    })
  }

}
