import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Order } from '../../models/orders';
import * as firestore from 'firebase/app';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import { Action } from 'rxjs/scheduler/Action';




@Injectable()
export class OrderProvider {

  constructor(private afs: AngularFirestore) {
    console.log('Hello OrderProvider Provider');
  }

  getOrder(): Observable<Order[]> {
    return this.afs.collection<Order>('orders')
      .snapshotChanges()
      .map(actions => {
        return actions.map(actions => {
          const data = actions.payload.doc.data() as Order;
          const _id = actions.payload.doc.id;
          return { _id, ...data };
        });
      });
  }

}
