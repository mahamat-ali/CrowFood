import { Component, OnInit, Inject} from '@angular/core';
import { Dish } from '../../shared/dish';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { DishProvider } from '../../providers/dish/dish';
import { DishdetailPage } from '../dishdetail/dishdetail';
import { CartProvider } from '../../providers/cart/cart';
import { RestaurantProvider } from '../../providers/restaurant/restaurant';
import { Restaurant } from '../../shared/restaurants';
/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage implements OnInit {
  dishes: Dish[];
  errMess: string;
  dish: Dish;

  constructor(public navCtrl: NavController, public navParams: NavParams,
      @Inject('BaseURL') private BaseURL,
      private toastCtrl: ToastController,
      private cartservice: CartProvider,
      private dishservice: DishProvider,
      private restaurantservice: RestaurantProvider){
  }
    

  ngOnInit(){
    this.dishservice.getDishes()
      .subscribe(dishes => this.dishes = dishes,
        errmess => this.errMess = errmess);
       
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

  dishSelected(event, dish) {
    this.navCtrl.push(DishdetailPage, {
      dish: dish
    });
  }

 

  

  addToItemsInCart() {
    console.log('Adding to cart', this.dish.id);
    this.cartservice.addToCart(this.dish.id);
    this.toastCtrl.create({
      message: 'Dish ' + this.dish.id + ' added to cart as successfully',
      position: 'middle',
      duration: 3000
    }).present();
  }

  
}
