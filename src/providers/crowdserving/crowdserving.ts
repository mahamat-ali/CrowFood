import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { RestaurantModel } from '../../models/restaurant';
import * as firestore from 'firebase/app';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/catch';
// import {AuthService } from 
import { Observable } from 'rxjs/Observable';
import { Action } from 'rxjs/scheduler/Action';


@Injectable()
export class CrowdservingProvider {

  constructor(private afs: AngularFirestore) {
  }

  getRestaurantsList(): Observable<RestaurantModel[]> {
    return this.afs.collection<RestaurantModel>('restaurants')
      .snapshotChanges()
      .map(actions => {
        return actions.map(actions => {
          const data = actions.payload.doc.data() as RestaurantModel;
          const _id = actions.payload.doc.id;
          return { _id, ...data };
        });
      });
  }

}
