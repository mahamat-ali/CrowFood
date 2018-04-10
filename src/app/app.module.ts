import { AgmCoreModule } from '@agm/core';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { NgxErrorsModule } from '@ultimate/ngxerrors';
import { BrowserModule } from '@angular/platform-browser';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { Config } from '../config';
import { HomeModule } from '../pages/home/home.module';
import { MyApp } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { firebaseConfig } from '../config';
import { LoginPage } from '../pages/login/login';
import { AuthService } from '../services/auth.service';
import { SignupPage } from '../pages/signup/signup';
import { DishProvider } from '../providers/dish/dish';
import { CartProvider } from '../providers/cart/cart';
import { MenuProvider } from '../providers/menu/menu';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestore } from 'angularfire2/firestore';
import { CrowdservingProvider } from '../providers/crowdserving/crowdserving';
import { OrderProvider } from '../providers/order/order';
import { AuthProvider } from '../providers/auth/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { RestaurantPage } from '../pages/restaurant/restaurant';
import { MenuPage } from '../pages/menu/menu';
import { DishdetailPage } from '../pages/dishdetail/dishdetail';
import { CartPage } from '../pages/cart/cart';
import { OrderPage } from '../pages/order/order';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';





@NgModule({
	declarations: [
		MyApp,
		LoginPage,
		SignupPage,
		RestaurantPage,
		MenuPage,
		DishdetailPage,
		CartPage,
		OrderPage,
		AboutPage,
		ContactPage
	],
	imports: [
		BrowserModule,
		HttpModule,
		IonicModule.forRoot(MyApp),
		AgmCoreModule.forRoot(),
		AngularFireModule.initializeApp(firebaseConfig.fire),
		AngularFireDatabaseModule,
		AngularFirestoreModule,
		NgxErrorsModule,
		HomeModule
	],
	bootstrap: [IonicApp],
	entryComponents: [
		MyApp,
		LoginPage,
		SignupPage,
		RestaurantPage,
		MenuPage,
		DishdetailPage,
		CartPage,
		OrderPage,
		AboutPage,
		ContactPage
	],
	providers: [
		Config,
		StatusBar,
		{provide: ErrorHandler, useClass: IonicErrorHandler},
		AngularFireAuth,
		AuthService,
		DishProvider,
		CartProvider,
		AuthProvider,
		OrderProvider,
		MenuProvider,
		CrowdservingProvider,
	]
})
export class AppModule {
}
