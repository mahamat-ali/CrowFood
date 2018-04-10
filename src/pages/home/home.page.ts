import { Component, OnInit, Inject } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Dishes } from '../../models/dishes';
import { DishProvider } from '../../providers/dish/dish';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage implements OnInit {

	dish: Dishes;
	dishErrMess: string;

	constructor(public navCtrl: NavController,
		private dishservice: DishProvider) { }

	ngOnInit() {
		this.dishservice.getFeaturedDish()
			.subscribe(dish => this.dish = dish,
				errmess => this.dishErrMess = <any>errmess);
	}

}