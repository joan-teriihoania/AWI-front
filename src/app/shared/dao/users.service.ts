import { Injectable } from '@angular/core';
import {ApiService} from "../http/api.service";
import {Allergene} from "../classes/allergene";
import {User} from "../classes/user";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private apiService: ApiService) { }

  getAll(){
    return this.apiService.get<User[]>("/admin/users", {})
  }

  block(user: User){
    return this.apiService.put<User>("/admin/users/" + user.user_id + "/block", {})
  }

  unblock(user: User){
    return this.apiService.put<User>("/admin/users/" + user.user_id + "/unblock", {})
  }

  activate(user: User){
    return this.apiService.put<User>("/admin/users/" + user.user_id + "/activate", {})
  }

  deactivate(user: User){
    return this.apiService.put<User>("/admin/users/" + user.user_id + "/deactivate", {})
  }

  changeEmail(user: User){
    return this.apiService.put<User>("/admin/users/" + user.user_id + "/email", {
      email: user.email
    })
  }

  // Considered not created if ID is -1
  put(allergene: Allergene, createIfNotExists = true){
    return this.apiService.put<Allergene>("/allergenes/" + allergene.allergene_id, {
      name: allergene.name
    })
  }

  delete(user: User){
    return this.apiService.delete<any>("/admin/users/" + user.user_id, {})
  }
}
