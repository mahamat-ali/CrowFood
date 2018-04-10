webpackJsonp([8],{

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_dish_dish__ = __webpack_require__(158);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = (function () {
    function HomePage(navCtrl, dishservice) {
        this.navCtrl = navCtrl;
        this.dishservice = dishservice;
    }
    HomePage.prototype.ngOnInit = function () {
        var _this = this;
        this.dishservice.getFeaturedDish()
            .subscribe(function (dish) { return _this.dish = dish; }, function (errmess) { return _this.dishErrMess = errmess; });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/terap30/Documents/ionic3-firebase-auth-master/src/pages/home/home.html"*/'<ion-header>\n	<ion-navbar>\n		<button ion-button menuToggle>\n			<ion-icon name="menu"></ion-icon>\n		</button>\n		<ion-title>Home</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content>\n	<ion-card *ngIf="dish">\n		<img src="{{dish.image}}" />\n		<ion-card-content>\n			<ion-card-title>\n				{{dish.name | uppercase}}\n			</ion-card-title>\n			<p>\n				{{dish.description}}\n			</p>\n		</ion-card-content>\n	</ion-card>\n	<div [hidden]="dish || dishErrMess">\n		<ion-spinner></ion-spinner>\n		<h4>Loading . . . Please Wait</h4>\n	</div>\n	<div *ngIf="dishErrMess">\n		<h2>Error</h2>\n		<h4>{{dishErrMess}}</h4>\n	</div>\n	<ion-fab right bottom>\n		<button ion-fab color="accent">\n			<ion-icon name="arrow-dropup"></ion-icon>\n		</button>\n		<ion-fab-list side="top">\n			<button ion-fab class="btn-mail">\n				<ion-icon name="mail"></ion-icon>\n			</button>\n			<button ion-fab class="btn-google-plus">\n				<ion-icon name="logo-googleplus"></ion-icon>\n			</button>\n			<button ion-fab class="btn-youtube">\n				<ion-icon name="logo-youtube"></ion-icon>\n			</button>\n			<button ion-fab class="btn-twitter">\n				<ion-icon name="logo-twitter"></ion-icon>\n			</button>\n			<button ion-fab class="btn-facebook">\n				<ion-icon name="logo-facebook"></ion-icon>\n			</button>\n			<button ion-fab class="btn-linkedin">\n				<ion-icon name="logo-linkedin"></ion-icon>\n			</button>\n		</ion-fab-list>\n	</ion-fab>\n</ion-content>'/*ion-inline-end:"/home/terap30/Documents/ionic3-firebase-auth-master/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_dish_dish__["a" /* DishProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.page.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_app__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = (function () {
    function AuthService(afAuth) {
        var _this = this;
        this.afAuth = afAuth;
        afAuth.authState.subscribe(function (user) {
            _this.user = user;
        });
    }
    AuthService.prototype.signInWithEmail = function (credentials) {
        console.log('Sign in with email');
        return this.afAuth.auth.signInWithEmailAndPassword(credentials.email, credentials.password);
    };
    AuthService.prototype.signUp = function (credentials) {
        return this.afAuth.auth.createUserWithEmailAndPassword(credentials.email, credentials.password);
    };
    Object.defineProperty(AuthService.prototype, "authenticated", {
        get: function () {
            return this.user !== null;
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.getEmail = function () {
        return this.user && this.user.email;
    };
    AuthService.prototype.signOut = function () {
        return this.afAuth.auth.signOut();
    };
    AuthService.prototype.signInWithGoogle = function () {
        console.log('Sign in with google');
        return this.oauthSignIn(new __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"].GoogleAuthProvider());
    };
    AuthService.prototype.oauthSignIn = function (provider) {
        var _this = this;
        if (!window.cordova) {
            return this.afAuth.auth.signInWithPopup(provider);
        }
        else {
            return this.afAuth.auth.signInWithRedirect(provider)
                .then(function () {
                return _this.afAuth.auth.getRedirectResult().then(function (result) {
                    // This gives you a Google Access Token.
                    // You can use it to access the Google API.
                    var token = result.credential.accessToken;
                    // The signed-in user info.
                    var user = result.user;
                    console.log(token, user);
                }).catch(function (error) {
                    // Handle Errors here.
                    alert(error.message);
                });
            });
        }
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], AuthService);
    return AuthService;
}());

//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_delay__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_delay___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_delay__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_order_order__ = __webpack_require__(341);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var OrderPage = (function () {
    function OrderPage(navCtrl, navParams, database, orderservice) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.database = database;
        this.orderservice = orderservice;
    }
    OrderPage.prototype.ngOnInit = function () {
        var _this = this;
        // this.orderPrice = this.navParams.get('totalPrice');
        // this.orderQuantity = this.navParams.get('totalQuantity');
        // this.orderDate = this.navParams.get('orderDate'); 
        this.orderservice.getOrder()
            .subscribe(function (orders) { return _this.orders = orders; }, function (errMsg) { return _this.errMsg = errMsg; });
    };
    OrderPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OrderPage');
    };
    OrderPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-order',template:/*ion-inline-start:"/home/terap30/Documents/ionic3-firebase-auth-master/src/pages/order/order.html"*/'<!--\n  Generated template for the OrderPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Order</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div *ngIf="orders">\n    <ion-card *ngFor="let order of orders">\n      <ion-card-header color="secondary">\n        Order Successful\n      </ion-card-header>\n      <ion-card-content color="grey">\n        <div>\n          <h3 class="card-title" text-uppercase>Total Items: {{order.quantity}}</h3>\n          <h3 class="card-title" text-uppercase>Total price: {{order.price}}&#8377;</h3>\n        </div>\n      </ion-card-content>\n    </ion-card>\n  </div>\n</ion-content>'/*ion-inline-end:"/home/terap30/Documents/ionic3-firebase-auth-master/src/pages/order/order.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_5__providers_order_order__["a" /* OrderProvider */]])
    ], OrderPage);
    return OrderPage;
}());

//# sourceMappingURL=order.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DishProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_delay__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_delay___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_delay__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_firestore__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auth_auth__ = __webpack_require__(303);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/*
  Generated class for the DishProvider provider.
  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var DishProvider = (function () {
    function DishProvider(afs, authService) {
        var _this = this;
        this.afs = afs;
        this.authService = authService;
        this.currentUser = null;
        this.authService.getAuthState()
            .subscribe(function (user) {
            if (user) {
                _this.currentUser = user;
            }
            else {
                _this.currentUser = null;
            }
        });
    }
    DishProvider.prototype.getDishes = function () {
        return this.afs.collection('menu')
            .snapshotChanges()
            .map(function (actions) {
            return actions.map(function (action) {
                var data = action.payload.doc.data();
                var _id = action.payload.doc.id;
                return __assign({ _id: _id }, data);
            });
        });
    };
    DishProvider.prototype.getDish = function (id) {
        return this.afs.doc('menu/' + id)
            .snapshotChanges()
            .map(function (action) {
            var data = action.payload.data();
            var _id = action.payload.id;
            return __assign({ _id: _id }, data);
        });
    };
    DishProvider.prototype.getFeaturedDish = function () {
        return this.afs.collection('menu', function (ref) { return ref.where('featured', '==', true); }).snapshotChanges()
            .map(function (actions) {
            return actions.map(function (action) {
                var data = action.payload.doc.data();
                var _id = action.payload.doc.id;
                return __assign({ _id: _id }, data);
            })[0];
        });
    };
    DishProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_angularfire2_firestore__["a" /* AngularFirestore */],
            __WEBPACK_IMPORTED_MODULE_5__auth_auth__["a" /* AuthProvider */]])
    ], DishProvider);
    return DishProvider;
}());

//# sourceMappingURL=dish.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AboutPage = (function () {
    function AboutPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AboutPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AboutPage');
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/home/terap30/Documents/ionic3-firebase-auth-master/src/pages/about/about.html"*/'<!--\n  Generated template for the AboutPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>About Us</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-card>\n    <ion-card-header color="primary">\n      Our History\n    </ion-card-header>\n    <ion-card-content>\n      <p>Started in 2018, Crowd Food quickly established itself as a culinary icon par excellence in Tobi. With\n        its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele\n        in Hong Kong. Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive\n        on your plate the next time you visit us. The restaurant traces its humble beginnings to The Frying Pan, a successful\n        chain started by our CEO, Mrs. Vedika Trivedi, that featured for the first time the world\'s best cuisines in a pan.\n      </p>\n    </ion-card-content>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"/home/terap30/Documents/ionic3-firebase-auth-master/src/pages/about/about.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_cart_cart__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__order_order__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_firestore__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_delay__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_delay___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_delay__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the CartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CartPage = (function () {
    function CartPage(navCtrl, navParams, cartservice, toastCtrl, loadingCtrl, alertCtrl, afs) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.cartservice = cartservice;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.afs = afs;
        this.orderCollection = this.afs.collection('orders');
        this.ordered = true;
        this.OrderPage = __WEBPACK_IMPORTED_MODULE_3__order_order__["a" /* OrderPage */];
        this.price = 0;
        this.quantity = 0;
    }
    CartPage.prototype.ngOnInit = function () {
        var _this = this;
        this.cartservice.getItemsAddedToCarts()
            .subscribe(function (cartItems) { return _this.cartItems = cartItems; }, function (errmess) { return _this.errMess = errmess; });
    };
    CartPage.prototype.addQuantity = function () {
        return this.quantity += 1;
    };
    CartPage.prototype.removeQuantity = function () {
        return this.quantity -= 1;
    };
    CartPage.prototype.goToOrder = function (cartItems) {
        var _this = this;
        for (var _i = 0, cartItems_1 = cartItems; _i < cartItems_1.length; _i++) {
            var cartItem = cartItems_1[_i];
            this.price += parseInt(cartItem.price);
            this.quantity += parseInt(cartItem.quantity);
            this.orderDate = new Date().getDate();
        }
        this.orderCollection.add({
            quantity: this.quantity,
            price: this.price,
            orderDate: new Date().getDate()
        }).then(function (docRef) {
            _this.orderCollection.doc(docRef.id).update({
                orderId: docRef.id
            });
        }).catch(function (err) {
            console.log(err);
        });
        this.ordered = !this.ordered;
        this.navCtrl.push(this.OrderPage, {
            totalPrice: this.price,
            totalQuantity: this.quantity,
            orderDate: this.orderDate
        });
    };
    CartPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CartPage');
    };
    CartPage.prototype.deleteItemFromCart = function (item, id) {
        var _this = this;
        console.log('delete', id);
        var alert = this.alertCtrl.create({
            title: 'Confirm Delete',
            message: 'Do you want to delete Dish ' + id,
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Delete cancelled');
                    }
                },
                {
                    text: 'Delete',
                    handler: function () {
                        var loading = _this.loadingCtrl.create({
                            content: 'Deleting . . .'
                        });
                        var toast = _this.toastCtrl.create({
                            message: 'Dish ' + id + ' deleted successfully',
                            duration: 3000
                        });
                        loading.present();
                        _this.cartservice.deleteItemFromCart(id)
                            .subscribe(function (cartItems) { _this.cartItems = cartItems; loading.dismiss(); toast.present(); }, function (errmess) { _this.errMess = errmess; loading.dismiss(); });
                    }
                }
            ]
        });
        alert.present();
        item.close();
    };
    CartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cart',template:/*ion-inline-start:"/home/terap30/Documents/ionic3-firebase-auth-master/src/pages/cart/cart.html"*/'<!--\n  Generated template for the CartPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Cart</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n\n<ion-content>\n\n  <div *ngIf="cartItems">\n    <ion-list>\n      <ion-item-sliding *ngFor="let cartItem of cartItems" #item>\n        <!-- <ion-item-options side="left">\n          <button ion-button color="primary" (click)="addQuantity(cartItem.quantity)">\n              <ion-icon name="add"></ion-icon>\n          </button>\n          <button ion-button color="danger" (click)="removeQuantity(cartItem.quantity)">\n              <ion-icon name="remove"></ion-icon>\n          </button>\n        </ion-item-options> -->\n        <ion-item>\n          <ion-thumbnail item-left>\n            <img src="{{cartItem.image}}" />\n          </ion-thumbnail>\n          <h3>{{cartItem.name}}</h3>\n          <p>Price: {{cartItem.price}} &#8377;</p>\n          <p>{{cartItem.quantity}}</p>\n        </ion-item>\n        <ion-item-options side="right">\n          <button ion-button color="danger" (click)="deleteItemFromCart(item, cartItem.id)">\n            <ion-icon name="trash"></ion-icon>\n          </button>\n        </ion-item-options>\n      </ion-item-sliding>\n    </ion-list>\n  </div>\n  <div [hidden]="cartItems || errMess">\n    <ion-spinner></ion-spinner>\n    <h4>Loading . . . Please Wait</h4>\n  </div>\n  <div *ngIf="errMess">\n    <h2>Error</h2>\n    <h4>{{ errMess }}</h4>\n  </div>\n</ion-content>\n<ion-footer>\n  <div *ngIf="cartItems">\n    <div *ngIf="ordered">\n      <button no-shadow ion-button color="balanced" (click)="goToOrder(cartItems)" full *ngIf="cartItems">\n        <ion-icon name="checkin"></ion-icon>\n        order\n      </button>\n    </div>\n  </div>\n</ion-footer>'/*ion-inline-end:"/home/terap30/Documents/ionic3-firebase-auth-master/src/pages/cart/cart.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_cart_cart__["a" /* CartProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_firestore__["a" /* AngularFirestore */]])
    ], CartPage);
    return CartPage;
}());

//# sourceMappingURL=cart.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ContactPage = (function () {
    function ContactPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ContactPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ContactPage');
    };
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"/home/terap30/Documents/ionic3-firebase-auth-master/src/pages/contact/contact.html"*/'<!--\n  Generated template for the ContactPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Contact Us</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-card>\n    <ion-card-header color="primary">\n      Our Address\n    </ion-card-header>\n    <ion-card-content>\n      <address>\n        Block-2 3rd CME\n        <br> Hosur Road, Christ\n        <br> Bangalore-560029\n        <br>\n        <ion-icon name="call"></ion-icon>: +91 9972803631\n        <br>\n        <ion-icon name="print"></ion-icon>: +91 9972803631\n        <br>\n        <ion-icon name="mail"></ion-icon>: crowd@food.net\n      </address>\n      <button ion-button icon-left clear small>\n        <ion-icon name="call"></ion-icon>\n        <div>CALL</div>\n      </button>\n      <button ion-button icon-left clear small>\n        <ion-icon name="mail"></ion-icon>\n        <div>EMAIL</div>\n      </button>\n    </ion-card-content>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"/home/terap30/Documents/ionic3-firebase-auth-master/src/pages/contact/contact.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DishdetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_cart_cart__ = __webpack_require__(96);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the DishdetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var DishdetailPage = (function () {
    function DishdetailPage(navCtrl, navParams, toastCtrl, cartservice) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.cartservice = cartservice;
        this.dish = navParams.get('dish');
        this.cartItem = cartservice.isAddedToCart(this.dish.id);
    }
    DishdetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DishdetailPage');
    };
    DishdetailPage.prototype.addToItemsInCart = function () {
        console.log('Adding to cart', this.dish.id);
        this.cartItem = this.cartservice.addToCart(this.dish.id);
        this.toastCtrl.create({
            message: 'Dish ' + this.dish.id + ' added to cart as successfully',
            position: 'middle',
            duration: 3000
        }).present();
    };
    DishdetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dishdetail',template:/*ion-inline-start:"/home/terap30/Documents/ionic3-firebase-auth-master/src/pages/dishdetail/dishdetail.html"*/'<!--\n  Generated template for the DishdetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Dish Details</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card *ngIf="dish">\n    <img src="{{dish.image}}" />\n    <ion-card-content>\n      <ion-card-title>\n        {{dish.name | uppercase}}\n      </ion-card-title>\n      <p>\n        {{dish.description}}\n      </p>\n    </ion-card-content>\n  </ion-card>\n  <div [hidden]="dish || errMess">\n    <ion-spinner></ion-spinner>\n    <h4>Loading . . . Please Wait</h4>\n  </div>\n  <div *ngIf="errMess">\n    <h2>Error</h2>\n    <h4>{{errMess}}</h4>\n  </div>\n\n  <ion-fab bottom right [hidden]="cartItem">\n    <button ion-fab (click)="addToItemsInCart()">\n      <ion-icon name="ios-add-circle-outline"></ion-icon>\n    </button>\n  </ion-fab>\n  <ion-fab bottom right *ngIf="cartItem">\n    <button ion-fab>\n      <ion-icon name="ios-add-circle"></ion-icon>\n    </button>\n  </ion-fab>\n</ion-content>'/*ion-inline-end:"/home/terap30/Documents/ionic3-firebase-auth-master/src/pages/dishdetail/dishdetail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_cart_cart__["a" /* CartProvider */]])
    ], DishdetailPage);
    return DishdetailPage;
}());

//# sourceMappingURL=dishdetail.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home_page__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__signup_signup__ = __webpack_require__(342);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginPage = (function () {
    function LoginPage(navCtrl, auth, fb) {
        this.navCtrl = navCtrl;
        this.auth = auth;
        this.loginForm = fb.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].email])],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].minLength(6)])]
        });
    }
    LoginPage.prototype.login = function () {
        var _this = this;
        var data = this.loginForm.value;
        if (!data.email) {
            return;
        }
        var credentials = {
            email: data.email,
            password: data.password
        };
        this.auth.signInWithEmail(credentials)
            .then(function () { return _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home_page__["a" /* HomePage */]); }, function (error) { return _this.loginError = error.message; });
    };
    LoginPage.prototype.signup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__signup_signup__["a" /* SignupPage */]);
    };
    LoginPage.prototype.loginWithGoogle = function () {
        var _this = this;
        this.auth.signInWithGoogle()
            .then(function () { return _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home_page__["a" /* HomePage */]); }, function (error) { return console.log(error.message); });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/home/terap30/Documents/ionic3-firebase-auth-master/src/pages/login/login.html"*/'<ion-header>\n	<ion-navbar>\n		<button ion-button menuToggle>\n			<ion-icon name="menu"></ion-icon>\n		</button>\n		<ion-title>Crowd Food</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content>\n	<form (ngSubmit)="login()" [formGroup]="loginForm">\n		<ion-list inset>\n\n			<ion-item [ngClass]="{ invalid: emailErrors.hasError(\'*\', [\'touched\', \'dirty\']) }">\n				<ion-input type="text" placeholder="Email" formControlName="email"></ion-input>\n			</ion-item>\n\n			<div ngxErrors="email" #emailErrors="ngxErrors">\n				<div [ngxError]="[\'email\', \'required\']" [when]="[\'touched\', \'dirty\']">It should be a valid email</div>\n			</div>\n\n			<ion-item [ngClass]="{ invalid: passwordErrors.hasError(\'*\', [\'touched\']) }">\n				<ion-input type="password" placeholder="Password" formControlName="password"></ion-input>\n			</ion-item>\n\n			<div ngxErrors="password" #passwordErrors="ngxErrors">\n				<div [ngxError]="[\'minlength\', \'required\']" [when]="[\'touched\']">It should be at least 5 characters</div>\n			</div>\n		</ion-list>\n\n		<div padding-horizontal>\n			<div class="form-error">{{loginError}}</div>\n\n			<button ion-button full type="submit" [disabled]="!loginForm.valid">Log in</button>\n			<div class="login-footer">\n				<p>\n					<a href="#">Forgot password?</a>\n					If you\'re a new user, please sign up.\n				</p>\n			</div>\n\n			<ion-list>\n\n				<button ion-button icon-left block clear (click)="loginWithGoogle()">\n					<ion-icon name="logo-google"></ion-icon>\n					Log in with Google\n				</button>\n\n				<button ion-button icon-left block clear (click)="signup()">\n					<ion-icon name="person-add"></ion-icon>\n					Sign up\n				</button>\n			</ion-list>\n		</div>\n	</form>\n</ion-content>\n'/*ion-inline-end:"/home/terap30/Documents/ionic3-firebase-auth-master/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_menu_menu__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dishdetail_dishdetail__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_cart_cart__ = __webpack_require__(96);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MenuPage = (function () {
    function MenuPage(navCtrl, navParams, toastCtrl, cartservice, menuservice) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.cartservice = cartservice;
        this.menuservice = menuservice;
        this.restaurantName = navParams.get('restoName');
    }
    MenuPage.prototype.ngOnInit = function () {
        var _this = this;
        // this.menuservice.getMenus()
        //   .subscribe(menus => this.menus = menus,
        //     errmess => this.errMess = errmess); 
        this.menuservice.getMenus().forEach(function (menu) {
            for (var i = 0; i < menu.length; i++) {
                _this.menus = menu;
            }
        });
    };
    MenuPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MenuPage');
        console.log(this.menus);
    };
    MenuPage.prototype.dishSelected = function (event, dish) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__dishdetail_dishdetail__["a" /* DishdetailPage */], {
            dish: dish
        });
    };
    MenuPage.prototype.addToItemsInCart = function () {
        console.log('Adding to cart', this.menu.id);
        this.cartservice.addToCart(this.menu.id);
        this.toastCtrl.create({
            message: 'Dish ' + this.menu.id + ' added to cart as successfully',
            position: 'middle',
            duration: 3000
        }).present();
    };
    MenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-menu',template:/*ion-inline-start:"/home/terap30/Documents/ionic3-firebase-auth-master/src/pages/menu/menu.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Menu</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="card-background-page">\n\n  <div *ngIf="menus">\n    <div *ngFor="let menues of menus">\n      <div *ngIf="(menues.name == restaurantName)">\n        <ion-card *ngFor="let dish of menues.menu" (click)="dishSelected($event, dish)">\n          <img src="{{dish.image}}" />\n          <div class="card-title">{{dish.name}}</div>\n          <div class="card-subtitle">{{dish.description}}</div>\n        </ion-card>\n      </div>\n    </div>\n  </div>\n  <div [hidden]="menus || errMess">\n    <ion-spinner></ion-spinner>\n    <h4>Loading . . . Please Wait</h4>\n  </div>\n  <div *ngIf="errMess">\n    <h2>Error</h2>\n    <h4>{{errMess}}</h4>\n  </div>\n\n</ion-content>'/*ion-inline-end:"/home/terap30/Documents/ionic3-firebase-auth-master/src/pages/menu/menu.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_cart_cart__["a" /* CartProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_menu_menu__["a" /* MenuProvider */]])
    ], MenuPage);
    return MenuPage;
}());

//# sourceMappingURL=menu.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestaurantPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu_menu__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_crowdserving_crowdserving__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(176);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the RestaurantPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RestaurantPage = (function () {
    function RestaurantPage(database, restaurantservice, navCtrl) {
        this.database = database;
        this.restaurantservice = restaurantservice;
        this.navCtrl = navCtrl;
    }
    RestaurantPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RestaurantPage');
    };
    RestaurantPage.prototype.ngOnInit = function () {
        var _this = this;
        this.restaurantservice.getRestaurantsList()
            .subscribe(function (restaurants) { return _this.restaurants = restaurants; }, function (errMess) { return _this.errMess = errMess; });
    };
    RestaurantPage.prototype.restaurantSelected = function (event, restaurant, name) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__menu_menu__["a" /* MenuPage */], {
            restaurant: restaurant,
            restoName: name
        });
    };
    RestaurantPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-restaurant',template:/*ion-inline-start:"/home/terap30/Documents/ionic3-firebase-auth-master/src/pages/restaurant/restaurant.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Restaurant</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="card-background-page">\n  <div *ngIf="restaurants">\n    <ion-card *ngFor="let restaurant of restaurants" (click)="restaurantSelected($event, restaurant, restaurant.name)">\n      <img src="{{restaurant.image}}" />\n    </ion-card>\n  </div>\n</ion-content>'/*ion-inline-end:"/home/terap30/Documents/ionic3-firebase-auth-master/src/pages/restaurant/restaurant.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_3__providers_crowdserving_crowdserving__["a" /* CrowdservingProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
    ], RestaurantPage);
    return RestaurantPage;
}());

//# sourceMappingURL=restaurant.js.map

/***/ }),

/***/ 222:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 222;

/***/ }),

/***/ 280:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about/about.module": [
		601,
		7
	],
	"../pages/cart/cart.module": [
		602,
		6
	],
	"../pages/contact/contact.module": [
		603,
		5
	],
	"../pages/dishdetail/dishdetail.module": [
		604,
		4
	],
	"../pages/login/login.module": [
		605,
		3
	],
	"../pages/menu/menu.module": [
		606,
		2
	],
	"../pages/order/order.module": [
		607,
		1
	],
	"../pages/restaurant/restaurant.module": [
		608,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 280;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_delay__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_delay___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_delay__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AuthProvider = (function () {
    function AuthProvider(afAuth) {
        var _this = this;
        this.afAuth = afAuth;
        this.currentUser = null;
        console.log('Hello AuthProvider Provider');
        this.authState = this.afAuth.authState;
        this.authState.subscribe(function (user) {
            if (user) {
                _this.currentUser = user;
            }
            else {
                _this.currentUser = null;
            }
        });
    }
    AuthProvider.prototype.getAuthState = function () {
        return this.authState;
    };
    AuthProvider.prototype.signUp = function () {
    };
    AuthProvider.prototype.logIn = function (user) {
        this.afAuth.auth.signInWithEmailAndPassword(user.username, user.password)
            .then(function (res) { return console.log(res); })
            .catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
        });
    };
    AuthProvider.prototype.logOut = function () {
        this.afAuth.auth.signOut();
    };
    AuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], AuthProvider);
    return AuthProvider;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_delay__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_delay___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_delay__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OrderProvider = (function () {
    function OrderProvider(afs) {
        this.afs = afs;
        console.log('Hello OrderProvider Provider');
    }
    OrderProvider.prototype.getOrder = function () {
        return this.afs.collection('orders')
            .snapshotChanges()
            .map(function (actions) {
            return actions.map(function (actions) {
                var data = actions.payload.doc.data();
                var _id = actions.payload.doc.id;
                return __assign({ _id: _id }, data);
            });
        });
    };
    OrderProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["a" /* AngularFirestore */]])
    ], OrderProvider);
    return OrderProvider;
}());

//# sourceMappingURL=order.js.map

/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home_page__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__(112);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SignupPage = (function () {
    function SignupPage(fb, navCtrl, auth) {
        this.navCtrl = navCtrl;
        this.auth = auth;
        this.form = fb.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].email])],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].minLength(6)])]
        });
    }
    SignupPage.prototype.signup = function () {
        var _this = this;
        var data = this.form.value;
        var credentials = {
            email: data.email,
            password: data.password
        };
        this.auth.signUp(credentials).then(function () { return _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home_page__["a" /* HomePage */]); }, function (error) { return _this.signupError = error.message; });
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'as-page-signup',template:/*ion-inline-start:"/home/terap30/Documents/ionic3-firebase-auth-master/src/pages/signup/signup.html"*/'<ion-header>\n	<ion-navbar>\n		<ion-title>Sign up</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content>\n\n	<form (ngSubmit)="signup()" [formGroup]="form">\n		<ion-list inset>\n\n			<ion-item [ngClass]="{ invalid: emailErrors.hasError(\'*\', [\'touched\']) }">\n				<ion-input type="text" placeholder="Email" formControlName="email"></ion-input>\n			</ion-item>\n\n			<div ngxErrors="email" #emailErrors="ngxErrors">\n				<div [ngxError]="[\'email\', \'required\']" [when]="[\'touched\']">It should be a valid email</div>\n			</div>\n\n			<ion-item [ngClass]="{ invalid: passwordErrors.hasError(\'*\', [\'touched\']) }">\n				<ion-input type="password" placeholder="Password" formControlName="password"></ion-input>\n			</ion-item>\n\n			<div ngxErrors="password" #passwordErrors="ngxErrors">\n				<div [ngxError]="[\'minlength\', \'required\']" [when]="[\'touched\']">It should be at least 6 characters</div>\n			</div>\n		</ion-list>\n\n		<div padding-horizontal>\n			<div class="form-error">{{signupError}}</div>\n\n			<button ion-button full type="submit" [disabled]="!form.valid">Sign up</button>\n		</div>\n	</form>\n</ion-content>\n'/*ion-inline-end:"/home/terap30/Documents/ionic3-firebase-auth-master/src/pages/signup/signup.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_delay__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_delay___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_delay__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the MenuProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var MenuProvider = (function () {
    // menus: Menus[];
    // menu: Menus;
    // errMsg: String;
    function MenuProvider(afs) {
        this.afs = afs;
        console.log('Hello Menu Provider');
    }
    MenuProvider.prototype.getMenus = function () {
        return this.afs.collection('restaurants')
            .snapshotChanges()
            .map(function (actions) {
            return actions.map(function (actions) {
                var data = actions.payload.doc.data();
                var _id = actions.payload.doc.id;
                return __assign({ _id: _id }, data);
            });
        });
    };
    MenuProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["a" /* AngularFirestore */]])
    ], MenuProvider);
    return MenuProvider;
}());

//# sourceMappingURL=menu.js.map

/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CrowdservingProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_delay__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_delay___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_delay__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CrowdservingProvider = (function () {
    function CrowdservingProvider(afs) {
        this.afs = afs;
    }
    CrowdservingProvider.prototype.getRestaurantsList = function () {
        return this.afs.collection('restaurants')
            .snapshotChanges()
            .map(function (actions) {
            return actions.map(function (actions) {
                var data = actions.payload.doc.data();
                var _id = actions.payload.doc.id;
                return __assign({ _id: _id }, data);
            });
        });
    };
    CrowdservingProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["a" /* AngularFirestore */]])
    ], CrowdservingProvider);
    return CrowdservingProvider;
}());

//# sourceMappingURL=crowdserving.js.map

/***/ }),

/***/ 384:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Config; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return firebaseConfig; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Config = (function () {
    function Config() {
        this.wordpressApiUrl = 'http://demo.titaniumtemplates.com/wordpress/?json=1';
    }
    Config = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], Config);
    return Config;
}());

var firebaseConfig = {
    fire: {
        apiKey: "AIzaSyAOee4BLN8Xv1Yc9H_shJc8pLaOQLyHH1s",
        authDomain: "crowdfood-9eca0.firebaseapp.com",
        databaseURL: "https://crowdfood-9eca0.firebaseio.com",
        projectId: "crowdfood-9eca0",
        storageBucket: "crowdfood-9eca0.appspot.com",
        messagingSenderId: "530075399462"
    }
};
//# sourceMappingURL=config.js.map

/***/ }),

/***/ 385:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_module__ = __webpack_require__(402);



Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__agm_core__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ultimate_ngxerrors__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__config__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home_module__ = __webpack_require__(595);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(600);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angularfire2_auth__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_login_login__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_auth_service__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_signup_signup__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_dish_dish__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_cart_cart__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_menu_menu__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angularfire2_database__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_crowdserving_crowdserving__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_order_order__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_auth_auth__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_angularfire2_firestore__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_restaurant_restaurant__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_menu_menu__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_dishdetail_dishdetail__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_cart_cart__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_order_order__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_about_about__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_contact_contact__ = __webpack_require__(207);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};































var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_restaurant_restaurant__["a" /* RestaurantPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_menu_menu__["a" /* MenuPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_dishdetail_dishdetail__["a" /* DishdetailPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_cart_cart__["a" /* CartPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_order_order__["a" /* OrderPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_contact_contact__["a" /* ContactPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/about/about.module#AboutPageModule', name: 'AboutPage', segment: 'about', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cart/cart.module#CartPageModule', name: 'CartPage', segment: 'cart', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contact/contact.module#ContactPageModule', name: 'ContactPage', segment: 'contact', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dishdetail/dishdetail.module#DishdetailPageModule', name: 'DishdetailPage', segment: 'dishdetail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/menu/menu.module#MenuPageModule', name: 'MenuPage', segment: 'menu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/order/order.module#OrderPageModule', name: 'OrderPage', segment: 'order', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/restaurant/restaurant.module#RestaurantPageModule', name: 'RestaurantPage', segment: 'restaurant', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_0__agm_core__["a" /* AgmCoreModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_10_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_7__config__["b" /* firebaseConfig */].fire),
                __WEBPACK_IMPORTED_MODULE_18_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_22_angularfire2_firestore__["b" /* AngularFirestoreModule */],
                __WEBPACK_IMPORTED_MODULE_3__ultimate_ngxerrors__["a" /* NgxErrorsModule */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home_module__["a" /* HomeModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_restaurant_restaurant__["a" /* RestaurantPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_menu_menu__["a" /* MenuPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_dishdetail_dishdetail__["a" /* DishdetailPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_cart_cart__["a" /* CartPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_order_order__["a" /* OrderPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_contact_contact__["a" /* ContactPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__config__["a" /* Config */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_11_angularfire2_auth__["a" /* AngularFireAuth */],
                __WEBPACK_IMPORTED_MODULE_13__services_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_15__providers_dish_dish__["a" /* DishProvider */],
                __WEBPACK_IMPORTED_MODULE_16__providers_cart_cart__["a" /* CartProvider */],
                __WEBPACK_IMPORTED_MODULE_21__providers_auth_auth__["a" /* AuthProvider */],
                __WEBPACK_IMPORTED_MODULE_20__providers_order_order__["a" /* OrderProvider */],
                __WEBPACK_IMPORTED_MODULE_17__providers_menu_menu__["a" /* MenuProvider */],
                __WEBPACK_IMPORTED_MODULE_19__providers_crowdserving_crowdserving__["a" /* CrowdservingProvider */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 595:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_email_service__ = __webpack_require__(596);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_call_service__ = __webpack_require__(597);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_page__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_in_app_browser_service__ = __webpack_require__(598);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_maps_service__ = __webpack_require__(599);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var HomeModule = (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["e" /* IonicModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__home_page__["a" /* HomePage */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_4__home_page__["a" /* HomePage */]],
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__services_email_service__["a" /* EmailService */],
                __WEBPACK_IMPORTED_MODULE_3__services_call_service__["a" /* CallService */],
                __WEBPACK_IMPORTED_MODULE_5__services_in_app_browser_service__["a" /* InAppBrowserService */],
                __WEBPACK_IMPORTED_MODULE_6__services_maps_service__["a" /* MapsService */]
            ]
        })
    ], HomeModule);
    return HomeModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 596:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Email */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Email = (function () {
    function Email() {
    }
    return Email;
}());

var EmailService = (function () {
    function EmailService() {
    }
    EmailService.prototype.sendEmail = function (email) {
        var plugins = window.cordova.plugins;
        plugins.email.isAvailable(function () {
            plugins.email.open(email);
        });
    };
    EmailService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], EmailService);
    return EmailService;
}());

//# sourceMappingURL=email.service.js.map

/***/ }),

/***/ 597:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CallService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CallService = (function () {
    function CallService() {
    }
    CallService.prototype.call = function (phoneNumber) {
        window.location.href = 'tel:' + phoneNumber;
    };
    CallService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], CallService);
    return CallService;
}());

//# sourceMappingURL=call.service.js.map

/***/ }),

/***/ 598:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InAppBrowserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var InAppBrowserService = (function () {
    function InAppBrowserService() {
    }
    InAppBrowserService.prototype.open = function (url) {
        window.open(url, '_system', 'location=yes');
        return false;
    };
    InAppBrowserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], InAppBrowserService);
    return InAppBrowserService;
}());

//# sourceMappingURL=in-app-browser.service.js.map

/***/ }),

/***/ 599:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MapsService = (function () {
    function MapsService(platform) {
        this.platform = platform;
    }
    MapsService.prototype.openMapsApp = function (location) {
        var q;
        if (this.platform.is('android')) {
            q = 'geo:' + location;
        }
        else {
            q = 'maps://maps.apple.com/?q=' + location;
        }
        window.location.href = q;
    };
    MapsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */]])
    ], MapsService);
    return MapsService;
}());

//# sourceMappingURL=maps.service.js.map

/***/ }),

/***/ 600:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_status_bar__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_home_home_page__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_service__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_restaurant_restaurant__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_cart_cart__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_order_order__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_about_about__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_contact_contact__ = __webpack_require__(207);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var MyApp = (function () {
    function MyApp(app, platform, menu, statusBar, auth) {
        this.statusBar = statusBar;
        this.auth = auth;
        this.menu = menu;
        this.app = app;
        this.platform = platform;
        this.initializeApp();
        // set our app's pages
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_3__pages_home_home_page__["a" /* HomePage */], icon: 'home' },
            { title: 'Restaurants', icon: 'restaurant', component: __WEBPACK_IMPORTED_MODULE_6__pages_restaurant_restaurant__["a" /* RestaurantPage */] },
            { title: 'Cart', icon: 'ios-cart-outline', component: __WEBPACK_IMPORTED_MODULE_7__pages_cart_cart__["a" /* CartPage */] },
            { title: 'Order', icon: 'ios-cash', component: __WEBPACK_IMPORTED_MODULE_8__pages_order_order__["a" /* OrderPage */] },
            { title: 'Contact Us', icon: 'contact', component: __WEBPACK_IMPORTED_MODULE_10__pages_contact_contact__["a" /* ContactPage */] },
            { title: 'About Us', icon: 'information-circle', component: __WEBPACK_IMPORTED_MODULE_9__pages_about_about__["a" /* AboutPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
        });
        this.auth.afAuth.authState
            .subscribe(function (user) {
            if (user) {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_3__pages_home_home_page__["a" /* HomePage */];
            }
            else {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
            }
        }, function () {
            _this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        });
    };
    MyApp.prototype.login = function () {
        this.menu.close();
        this.auth.signOut();
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */]);
    };
    MyApp.prototype.logout = function () {
        this.menu.close();
        this.auth.signOut();
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_home_home_page__["a" /* HomePage */]);
    };
    MyApp.prototype.openPage = function (page) {
        this.menu.close();
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/terap30/Documents/ionic3-firebase-auth-master/src/app/app.html"*/'<ion-menu id="leftMenu" [content]="content" type="overlay">\n\n	<ion-header>\n\n		<ion-toolbar>\n\n			<ion-title>CrowdFood</ion-title>\n\n		</ion-toolbar>\n\n	</ion-header>\n\n\n\n<ion-content>\n\n	<ion-list>\n\n		<ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n			<ion-icon [name]="p.icon" item-left></ion-icon>\n\n			{{p.title}}\n\n		</ion-item>\n\n		<ion-list-header *ngIf="auth.getEmail()">{{auth.getEmail()}}</ion-list-header>\n\n\n\n		<ion-item (click)="logout()" *ngIf="auth.authenticated">\n\n			<ion-icon name="log-out" item-left></ion-icon>\n\n			Log out\n\n		</ion-item>\n\n\n\n		<ion-item (click)="login()" *ngIf="!auth.authenticated">\n\n			<ion-icon name="log-in" item-left></ion-icon>\n\n			Log in\n\n		</ion-item>\n\n	</ion-list>\n\n\n\n</ion-content>\n\n\n\n</ion-menu>\n\n\n\n<ion-nav id="nav" [root]="rootPage" #content swipe-back-enabled="false"></ion-nav>\n\n\n\n'/*ion-inline-end:"/home/terap30/Documents/ionic3-firebase-auth-master/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dish_dish__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_delay__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_delay___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_delay__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/*
  Generated class for the CartProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var CartProvider = (function () {
    function CartProvider(http, dishservice) {
        this.http = http;
        this.dishservice = dishservice;
        console.log('Hello CartProvider Provider');
        this.items = [];
    }
    CartProvider.prototype.addToCart = function (id) {
        if (!this.isAddedToCart(id))
            this.items.push(id);
        console.log('items', this.items);
        return true;
    };
    CartProvider.prototype.isAddedToCart = function (id) {
        return this.items.some(function (el) { return el === id; });
    };
    CartProvider.prototype.getItemsAddedToCarts = function () {
        var _this = this;
        return this.dishservice.getDishes()
            .map(function (dishes) { return dishes.filter(function (dish) { return _this.items.some(function (el) { return el === dish.id; }); }); });
    };
    CartProvider.prototype.deleteItemFromCart = function (id) {
        var index = this.items.indexOf(id);
        if (index >= 0) {
            this.items.splice(index, 1);
            return this.getItemsAddedToCarts();
        }
        else {
            console.log('Deleting non-existant cart item', id);
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw('Deleting non-existant cart item' + id);
        }
    };
    CartProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__dish_dish__["a" /* DishProvider */]])
    ], CartProvider);
    return CartProvider;
}());

//# sourceMappingURL=cart.js.map

/***/ })

},[385]);
//# sourceMappingURL=main.js.map