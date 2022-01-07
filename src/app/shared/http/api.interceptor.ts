import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {LoginService} from "../session/login.service";

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  constructor(private loginService: LoginService) {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    req = req.clone({
      setHeaders: {
        'Content-Type' : 'application/json; charset=utf-8',
        Accept       : 'application/json',
        Authorization: `Bearer ${this.loginService.getSessionToken()}`,
      },
    });

    return next.handle(req);
  }
}
