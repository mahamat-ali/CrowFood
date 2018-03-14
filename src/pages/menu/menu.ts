import { Component, OnInit, Inject} from '@angular/core';
import { Dish } from '../../shared/dish';
import { IonicPage, NavController, NavParams, ToastController, Menu } from 'ionic-angular';
import { MenuProvider  } from '../../providers/menu/menu';
import { DishdetailPage } from '../dishdetail/dishdetail';
import { CartProvider } from '../../providers/cart/cart';
import { Menus } from '../../models/menu';
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
  menus: Menus[]
  errMess: string;
  menu: Menus;

  constructor(public navCtrl: NavController, public navParams: NavParams,
      @Inject('BaseURL') private BaseURL,
      private toastCtrl: ToastController,
      private cartservice: CartProvider,
      private menuservice: MenuProvider){
        
    
  }
    

  ngOnInit(){
    this.menuservice.getMenus()
      .subscribe(menus => this.menus = menus,
        errmess => this.errMess = errmess); 
      
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
    console.log(this.menus);
  }

  dishSelected(event, dish) {
    this.navCtrl.push(DishdetailPage, {
      dish: dish
    });
  }

 

  

  addToItemsInCart() {
    console.log('Adding to cart', this.menu.id);
    this.cartservice.addToCart(this.menu.id);
    this.toastCtrl.create({
      message: 'Dish ' + this.menu.id + ' added to cart as successfully',
      position: 'middle',
      duration: 3000
    }).present();
  }

  
}
