import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, DateTime } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { RestaurantModel } from '../../models/restaurant';
import * as firestore from 'firebase/app';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import { Action } from 'rxjs/scheduler/Action';
import { Order } from '../../models/orders';
import { OrderProvider } from '../../providers/order/order';





@IonicPage()
@Component({
  selector: 'page-order',
  templateUrl: 'order.html',
})
export class OrderPage implements OnInit {

  orders: Order[];
  order: Order;
  errMsg: string;


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private database: AngularFireDatabase,
    private orderservice: OrderProvider) {
  }

  ngOnInit() {
    // this.orderPrice = this.navParams.get('totalPrice');
    // this.orderQuantity = this.navParams.get('totalQuantity');
    // this.orderDate = this.navParams.get('orderDate'); 
    this.orderservice.getOrder()
      .subscribe(orders => this.orders = orders,
        errMsg => this.errMsg = errMsg);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderPage');
  }


}
