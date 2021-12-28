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

  public isLoggedIn(){
    return new Promise((resolve) => {
      this.apiService.get("/account", {}).then((data) => {
        resolve(true)
      }).catch(() => {
        resolve(false)
      })
    })
  }
}
