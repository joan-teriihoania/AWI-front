import {Component, OnInit} from '@angular/core';
import {CookieService} from "ngx-cookie-service";
import {LoginService} from "./shared/session/login.service";
import {ApiService} from "./shared/http/api.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor() {}

  ngOnInit(): void {
  }


}
