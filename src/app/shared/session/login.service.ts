import { Injectable } from '@angular/core';
import {CookieService} from "ngx-cookie-service";
import {ApiService} from "../http/api.service";
import {HttpErrorResponse, HttpResponseBase} from "@angular/common/http";
import {LocalStorageService} from "../storage/local-storage.service";
import {Observable, Subject} from "rxjs";
import {User} from "../classes/user";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  loginStateChange: Subject<boolean> = new Subject<boolean>()

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
        this.loginStateChange.next(true)
        resolve(data)
      }).catch((err: HttpErrorResponse) => {
        console.log(err)
        reject(err.error)
      })
    })
  }

  logout(){
    this.setSessionToken("")
    this.loginStateChange.next(false)
  }

  public isLoggedIn(){
    return new Promise((resolve, reject) => {
      this.isLoggedInObservable().toPromise().then((data) => {
        this.loginStateChange.next(true)
        resolve(data)
      }).catch(() => {
        this.loginStateChange.next(false)
        reject()
      })
    })
  }

  public isLoggedInObservable(){
    return this.apiService.getObservable("/account", {})
  }
}
