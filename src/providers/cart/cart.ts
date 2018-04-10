import { Injectable } from '@angular/core';
import { Dishes } from '../../models/dishes';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import { DishProvider } from '../dish/dish';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/catch';

/*
  Generated class for the CartProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CartProvider {

  items: Array<any>
  constructor(public http: Http,
    private dishservice: DishProvider) {
    console.log('Hello CartProvider Provider');
    this.items = [];
  }

  addToCart(id: number): boolean {
    if (!this.isAddedToCart(id))
      this.items.push(id);
    console.log('items', this.items);
    return true;
  }

  isAddedToCart(id: number): boolean {
    return this.items.some(el => el === id);
  }

  getItemsAddedToCarts(): Observable<Dishes[]> {
    return this.dishservice.getDishes()
      .map(dishes => dishes.filter(dish => this.items.some(el => el === dish.id)));
  }

  deleteItemFromCart(id: number): Observable<Dishes[]> {
    let index = this.items.indexOf(id);
    if (index >= 0) {
      this.items.splice(index, 1);
      return this.getItemsAddedToCarts();
    }
    else {
      console.log('Deleting non-existant cart item', id);
      return Observable.throw('Deleting non-existant cart item' + id);
    }
  }


}
