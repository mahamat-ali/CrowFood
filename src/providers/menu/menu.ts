import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Menus } from '../../models/menu';
import * as firestore from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/catch';
import { Action } from 'rxjs/scheduler/Action';
import { Menu } from 'ionic-angular';

/*
  Generated class for the MenuProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MenuProvider {

  // menus: Menus[];
  // menu: Menus;
  // errMsg: String;

  constructor(private afs: AngularFirestore){
    console.log('Hello Menu Provider');

  }

  getMenus(): Observable<Menus[]> {
    return this.afs.collection<Menus>('restaurants')
      .snapshotChanges()
      .map(actions => {
        return actions.map(actions => {
          const data = actions.payload.doc.data() as Menus;
          const _id = actions.payload.doc.id;
          return { _id, ...data };
        });
      });
  }
} 

