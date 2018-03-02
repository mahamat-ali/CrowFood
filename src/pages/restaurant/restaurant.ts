import { Component, Inject, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestaurantProvider } from '../../providers/restaurant/restaurant';
import { Restaurant } from '../../shared/restaurants';
import { MenuPage } from '../menu/menu';
/**
 * Generated class for the RestaurantPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-restaurant',
  templateUrl: 'restaurant.html',
})
export class RestaurantPage implements OnInit{

  restaurants: Restaurant[];
  restaurant: Restaurant;
  errMess: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    @Inject('BaseURL') private BaseURL,
    private restaurantservice: RestaurantProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RestaurantPage');
  }

  ngOnInit() {
    this.restaurantservice.getRestaurants()
      .subscribe(restaurants => this.restaurants = restaurants,
        errmess => this.errMess = errmess);
  }

  restaurantSelected(event, restaurant) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(MenuPage, {
      restaurant: restaurant
    });
  }
  

}
