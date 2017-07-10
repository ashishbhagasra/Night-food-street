import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {OrderDetailsPage} from '../order-details/order-details';

@IonicPage()
@Component({
  selector: 'page-user-orders',
  templateUrl: 'user-orders.html',
})
export class UserOrdersPage {
  orders: any = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.orders.push({ orderId: 1, price: 100, onDate: '2/2/2017' });
    this.orders.push({ orderId: 2, price: 100, onDate: '3/2/2017' });
    this.orders.push({ orderId: 3, price: 100, onDate: '4/2/2017' });
    this.orders.push({ orderId: 4, price: 100, onDate: '5/2/2017' });
    this.orders.push({ orderId: 5, price: 100, onDate: '6/2/2017' });
    this.orders.push({ orderId: 6, price: 100, onDate: '7/2/2017' });
    this.orders.push({ orderId: 7, price: 100, onDate: '8/2/2017' });
    this.orders.push({ orderId: 8, price: 100, onDate: '9/2/2017' });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserOrdersPage');
  }

  OrderDetails(order){
    this.navCtrl.push(OrderDetailsPage, { order: order});
  }

}
