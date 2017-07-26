import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  private user: any = false;

  constructor(private _userService: UserService) {
    this._userService.getAuthState().subscribe(
      res => this.user = res,
      err => console.error('authState-navbar', err)
    )
  }

  ngOnInit() {
  }

  login() {
    this._userService.login()
      .then(
      res => console.log(`Logged in as ${res.user.displayName}`)
      ).catch(
      err => console.error('login-navbar', err)
      )
  }

  logout() {
    this._userService.logout()
      .then(
      res => console.log('logout-navbar', res)
      ).catch(
      err => console.error('logout-navbar', err)
      )
  }





}
