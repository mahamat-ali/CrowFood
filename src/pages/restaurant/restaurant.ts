import { Component, Inject, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestaurantProvider } from '../../providers/restaurant/restaurant';
import { Restaurant } from '../../shared/restaurants';
import { MenuPage } from '../menu/menu';
import { RestaurantModel } from '../../models/restaurant';
import { CrowdservingProvider } from '../../providers/crowdserving/crowdserving';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';

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


  restaurants: RestaurantModel[];
  errMess: string;
  restaurant: RestaurantModel;

  constructor(private database: AngularFireDatabase,
    private restaurantservice: CrowdservingProvider,
    private navCtrl: NavController) {
     
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RestaurantPage');
  }

  ngOnInit() {
    this.restaurantservice.getRestaurantsList()
      .subscribe(restaurants => this.restaurants = restaurants,
        errMess => this.errMess = errMess);
  }


  restaurantSelected(event, restaurant, name:string) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(MenuPage, {
      restaurant: restaurant,
      restoName: name
    });
  }
  

}
