import { Injectable } from '@angular/core';
import {CookieService} from "ngx-cookie-service";
import {ApiService} from "../http/api.service";
import {HttpErrorResponse, HttpResponseBase} from "@angular/common/http";
import {LocalStorageService} from "../storage/local-storage.service";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private localStorageService: LocalStorageService,
    private apiService: ApiService
  ) {
  }

  public getSessionToken(){
    return this.localStorageService.get("SessionToken")
  }

  public setSessionToken(newValue: string){
    this.localStorageService.set("SessionToken", newValue)
  }

  public login(email: string, password: string){
    return new Promise((resolve, reject) => {
      this.apiService.put("/account/login", {
        email,
        password
      }).then((data: any) => {
        this.setSessionToken(data.session_token)
        resolve(data)
      }).catch((err: HttpErrorResponse) => {
        console.log(err)
        reject(err.message)
      })
    })
  }

  public isLoggedIn(){
    return new Promise((resolve, reject) => {
      this.apiService.get("/account", {}).then((data) => {
        resolve(data)
      }).catch(() => {
        reject()
      })
    })
  }
}
