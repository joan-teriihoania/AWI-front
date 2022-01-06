import { Component, OnInit } from '@angular/core';
import {LoginService} from "../../session/login.service";
import {User} from "../../classes/user";

@Component({
  selector: 'app-top-right-user',
  templateUrl: './top-right-user.component.html',
  styleUrls: ['./top-right-user.component.scss']
})
export class TopRightUserComponent implements OnInit {
  public user: User | null = null

  constructor(
    private loginService: LoginService
  ) {
    loginService.isLoggedIn().then((data: any) => {
      console.log(data)
      this.user = new User(
        data.user_id,
        data.username,
        data.img_profile,
        data.link,
        data.email,
        "",
        data.blocked,
        data.blockedReason
      );
    }).catch(() => {

    })
  }

  ngOnInit(): void {
  }

}
