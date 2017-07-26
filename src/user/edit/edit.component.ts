import { User } from './../../models/user.model';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  private user: User;

  constructor(private _userService: UserService) {
    this.getUser();
  }

  ngOnInit() {
  }

  getUser() {
    this._userService.getAuthState().subscribe(
      res => this._userService.get(res.uid).subscribe(
        result => this.user = result
      )
    );
  }

  updateUser() {
    this._userService.update(this.user.uid, this.user).then(
      res => console.log('User updated')
    ).catch(
      err => console.error('User failed to update', err)
      );
  }

}
