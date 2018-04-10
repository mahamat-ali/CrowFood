import { Component, Inject } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Dish } from '../../shared/dish';
import { CartProvider } from '../../providers/cart/cart';

/**
 * Generated class for the DishdetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-dishdetail',
  templateUrl: 'dishdetail.html',
})
export class DishdetailPage {
  cartItem: boolean;
  dish: Dish;
  errMess: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private toastCtrl: ToastController,
    private cartservice: CartProvider) {

    this.dish = navParams.get('dish');
    this.cartItem = cartservice.isAddedToCart(this.dish.id);
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad DishdetailPage');
  }


  addToItemsInCart() {
    console.log('Adding to cart', this.dish.id);
    this.cartItem = this.cartservice.addToCart(this.dish.id);
    this.toastCtrl.create({
      message: 'Dish ' + this.dish.id + ' added to cart as successfully',
      position: 'middle',
      duration: 3000
    }).present();
  }
}