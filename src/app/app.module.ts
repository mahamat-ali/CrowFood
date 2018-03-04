import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';
import { MenuPage } from '../pages/menu/menu';
import { ContactPage } from '../pages/contact/contact';
import { DishdetailPage } from '../pages/dishdetail/dishdetail';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DishProvider } from '../providers/dish/dish';
import { ProcessHttpmsgProvider } from '../providers/process-httpmsg/process-httpmsg';
import { baseURL } from '../shared/baseurl';
import { LoginPage } from '../pages/login/login';
import { RestaurantPage } from '../pages/restaurant/restaurant';
import { IonicStorageModule } from '@ionic/storage';
import { RestaurantProvider } from '../providers/restaurant/restaurant';
import { CartProvider } from '../providers/cart/cart';
import { CartPage } from '../pages/cart/cart';
import { OrderPage } from '../pages/order/order';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AboutPage,
    MenuPage,
    ContactPage,
    DishdetailPage,
    LoginPage,
    RestaurantPage,
    CartPage,
    OrderPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    HttpClientModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AboutPage,
    MenuPage,
    ContactPage,
    DishdetailPage,
    LoginPage,
    RestaurantPage,
    CartPage,
    OrderPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DishProvider,
    ProcessHttpmsgProvider,
    { provide: 'BaseURL', useValue: baseURL },
    RestaurantProvider,
    CartProvider,
  ]
})
export class AppModule {}
