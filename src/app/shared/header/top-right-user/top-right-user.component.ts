import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
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
    this.loginService.isLoggedInObservable().subscribe((data: any) => {
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
    }, (err) => {
      this.user = null
    })
  }

  ngOnInit(): void {
  }

  logout(){
    this.loginService.logout()
    window.location.reload()
  }

}
