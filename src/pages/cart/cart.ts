import { Component, OnInit, Inject } from '@angular/core';
import { IonicPage, NavController, NavParams, ItemSliding, ToastController, LoadingController, AlertController } from 'ionic-angular';
import { CartProvider } from '../../providers/cart/cart';
import { Dish } from '../../shared/dish';
import { baseURL } from '../../shared/baseurl';
/**
 * Generated class for the CartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage implements OnInit{

  cartItems: Dish[];
  errMess: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private cartservice: CartProvider,
    public toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    @Inject('BaseURL') private BaseURL) {
  }

  ngOnInit() {
    this.cartservice.getItemsAddedToCarts()
      .subscribe(cartItems => this.cartItems = cartItems,
        errmess => this.errMess = errmess);
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad CartPage');
  }

  deleteItemFromCart(item: ItemSliding, id: number) {
    console.log('delete', id);
    let alert = this.alertCtrl.create({
      title: 'Confirm Delete',
      message: 'Do you want to delete Dish ' + id,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Delete cancelled');
          }
        },
        {
          text: 'Delete',
          handler: () => {
            let loading = this.loadingCtrl.create({
              content: 'Deleting . . .'
            });
            let toast = this.toastCtrl.create({
              message: 'Dish ' + id + ' deleted successfully',
              duration: 3000
            });
            loading.present();
            this.cartservice.deleteItemFromCart(id)
              .subscribe(cartItems => { this.cartItems = cartItems; loading.dismiss(); toast.present(); },
                errmess => { this.errMess = errmess; loading.dismiss(); });
          }
        }
      ]
    });
    alert.present();
    item.close();
  }

}