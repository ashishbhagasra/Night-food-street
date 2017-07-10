import { Component } from '@angular/core';

import {AddressPage} from '../address/address';

import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-item-details',
  templateUrl: 'item-details.html'
})
export class ItemDetailsPage {
  selectedItem: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('order');
  }

  chooseAddress(){
    this.navCtrl.push(AddressPage, { order: this.selectedItem });
  }
}
