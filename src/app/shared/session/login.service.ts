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
        reject(err.error)
      })
    })
  }

  public register(username: string, email: string, password: string){
    return new Promise((resolve, reject) => {
      this.apiService.put("/account/register", {
        username,
        email,
        password
      }).then((data: any) => {
        console.log(data)
        resolve(data)
      }).catch((err: HttpErrorResponse) => {
        reject(err.error)
      })
    })
  }

  activate(id: string){
    return this.apiService.putObservable("/account/activate/" + id, {})
  }

  logout(){
    this.setSessionToken("")
  }

  public isLoggedIn(){
    return this.isLoggedInObservable().toPromise()
  }

  public isLoggedInObservable(){
    return this.apiService.getObservable<User>("/account", {})
  }
}
