import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { User } from 'models/user.model';


@Injectable()
export class UserService {

  constructor(private _auth: AngularFireAuth, private _database: AngularFireDatabase) { }

  login(): firebase.Promise<any> {
    return this._auth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout(): firebase.Promise<any> {
    return this._auth.auth.signOut();
  }

  getAuthState(): Observable<firebase.User> {
    return this._auth.authState;
  }

  get(_userId: string): Observable<User> {
    return this._database.object(`/users/${_userId}`);
  }

  update(_userId: string, _user: User) {
    return this._database.object(`/users/${_userId}`).set(_user);
  }
}
