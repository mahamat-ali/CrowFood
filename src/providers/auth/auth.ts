import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/catch';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {
  private authState: Observable<firebase.User>
  private currentUser: firebase.User = null;
  constructor(public afAuth: AngularFireAuth) {
    console.log('Hello AuthProvider Provider');

    this.authState = this.afAuth.authState;
    this.authState.subscribe(user => {
      if (user) {
        this.currentUser = user;
      } else {
        this.currentUser = null;
      }
    });
  }

  getAuthState() {
    return this.authState;
  }

  signUp() {

  }

  logIn(user: any) {
    this.afAuth.auth.signInWithEmailAndPassword(user.username, user.password)
      .then(res => console.log(res))
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
      });
  }

  logOut() {
    this.afAuth.auth.signOut();
  }



}
