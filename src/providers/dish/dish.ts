import { Injectable } from '@angular/core';
import { Dishes } from '../../models/dishes';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/catch';
import { AngularFirestore } from 'angularfire2/firestore';
import * as firebase from 'firebase/app';
import { AuthProvider } from '../auth/auth';

/*
  Generated class for the DishProvider provider.
  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class DishProvider {

  private currentUser: firebase.User = null;
  constructor(private afs: AngularFirestore,
    private authService: AuthProvider) {
    this.authService.getAuthState()
      .subscribe((user) => {
        if (user) {
          this.currentUser = user;
        } else {
          this.currentUser = null;
        }
      });
  }

  getDishes(): Observable<Dishes[]> {
    return this.afs.collection<Dishes>('menu')
      .snapshotChanges()
      .map(actions => {
        return actions.map(action => {
          const data = action.payload.doc.data() as Dishes;
          const _id = action.payload.doc.id;
          return { _id, ...data };
        });
      });
  }

  getDish(id: number): Observable<Dishes> {
    return this.afs.doc<Dishes>('menu/' + id)
      .snapshotChanges()
      .map(action => {
        const data = action.payload.data() as Dishes;
        const _id = action.payload.id;
        return { _id, ...data };
      });
  }

  getFeaturedDish(): Observable<Dishes> {
    return this.afs.collection<Dishes>('menu', ref => ref.where('featured', '==', true)).snapshotChanges()
      .map(actions => {
        return actions.map(action => {
          const data = action.payload.doc.data() as Dishes;
          const _id = action.payload.doc.id;
          return { _id, ...data };
        })[0];
      });
  }


}