import { Component, ViewChild } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar';
import { App, MenuController, Nav, Platform } from 'ionic-angular';
import { HomePage } from '../pages/home/home.page';
import { LoginPage } from '../pages/login/login';
import { AuthService } from '../services/auth.service';
import { RestaurantPage } from '../pages/restaurant/restaurant';
import { CartPage } from '../pages/cart/cart';
import { OrderPage } from '../pages/order/order';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';

@Component({
	templateUrl: 'app.html'
})
export class MyApp {
	pages;
	rootPage;

	private app;
	private platform;
	private menu: MenuController;

	@ViewChild(Nav) nav: Nav;

	constructor(app: App, platform: Platform,
		menu: MenuController,
		private statusBar: StatusBar,
		private auth: AuthService) {
		this.menu = menu;
		this.app = app;
		this.platform = platform;
		this.initializeApp();

		// set our app's pages
		this.pages = [
			{ title: 'Home', component: HomePage, icon: 'home' },
			{ title: 'Restaurants', icon: 'restaurant', component: RestaurantPage },
			{ title: 'Cart', icon: 'ios-cart-outline', component: CartPage },
			{ title: 'Order', icon: 'ios-cash', component: OrderPage },
			{ title: 'Contact Us', icon: 'contact', component: ContactPage },
			{ title: 'About Us', icon: 'information-circle', component: AboutPage }
		];
	}

	initializeApp() {
			this.platform.ready().then(() => {
				this.statusBar.styleDefault();
			});

			this.auth.afAuth.authState
				.subscribe(
					user => {
						if (user) {
							this.rootPage = HomePage;
						} else {
							this.rootPage = LoginPage;
						}
					},
					() => {
						this.rootPage = LoginPage;
					}
				);
	}

	login() {
		this.menu.close();
		this.auth.signOut();
		this.nav.setRoot(LoginPage);
	}

	logout() {
		this.menu.close();
		this.auth.signOut();
		this.nav.setRoot(HomePage);
	}

	openPage(page) {
	this.menu.close();
	this.nav.setRoot(page.component);
	}
}
