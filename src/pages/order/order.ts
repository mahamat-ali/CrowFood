import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the OrderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-order',
  templateUrl: 'order.html',
})
export class OrderPage implements OnInit{

  totalPrice: number;
  totalQuantity: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.totalPrice = navParams.data.totalPrice;
    this.totalQuantity = navParams.data.totalQuantity;
  }
  ngOnInit() {
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderPage');
  }

}
