import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the OrderDetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-order-details',
  templateUrl: 'order-details.html',
})
export class OrderDetailsPage {
  order:any = {}
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    var o = navParams.get('order');

    this.order.items = [];
    this.order.items.push({ itemId :1, itemName: 'Abs', price:200, quantity: 4})
    this.order.items.push({ itemId :2, itemName: 'Pch', price:300, quantity: 4})
    this.order.items.push({ itemId :3, itemName: 'Rrofl', price:150, quantity: 4})
    this.order.items.push({ itemId :4, itemName: 'Flol', price:199, quantity: 4})

    this.order.discount = 20;
    this.order.discountCoupon = 'Lol';
    this.order.serviceCharge = 10;
    this.order.delieveryFee = 20;
    this.order.total = 100;
    this.order.orderId = o.orderId;

    this.order.review = '';

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderDetailsPage');
  }

  SubmitReview(userReview){
    this.order.review = userReview;
    this.navCtrl.pop();
  }

}
