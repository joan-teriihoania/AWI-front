import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {LoginService} from "../../session/login.service";

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {
  registerForm: FormGroup = new FormGroup({})
  errorMessage: string = ""
  isLogged: boolean = false

  constructor(
    private loginService: LoginService
  ) {
    loginService.isLoggedIn().then(() => {
      this.isLogged = true
    }).catch(() => {
      this.isLogged = false
    })
  }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      username: new FormControl("", [
        Validators.required,
        Validators.minLength(4)
      ]),
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
    this.loginService.register(
      this.registerForm.value.username,
      this.registerForm.value.email,
      this.registerForm.value.password
    ).then(() => {

    }).catch((err: string) => {
      this.errorMessage = err
    })
  }

}
