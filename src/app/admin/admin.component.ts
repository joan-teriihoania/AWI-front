import { Component, OnInit } from '@angular/core';
import {User} from "../shared/classes/user";
import {ApiService} from "../shared/http/api.service";
import {UsersService} from "../shared/dao/users.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  users: User[] = []

  constructor(
    private userService: UsersService
  ) {
    userService.getAll().then(r => {
      return this.users = r;
    })
  }

  ngOnInit(): void {
  }

  getUsers(){
    return this.users;
  }

}
