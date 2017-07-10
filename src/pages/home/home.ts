import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ItemsPage } from '../items/items';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  menuItems: any = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.menuItems.push({id:1, name: 'Starter'});
    this.menuItems.push({id:2, name: 'Main Course (Veg)'});
    this.menuItems.push({id:3, name: 'Main Course (Non Veg)'});
    this.menuItems.push({id:4, name: 'Appetizers'});
    this.menuItems.push({id:5, name: 'Breads'});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  ItemSelected(item){
    this.navCtrl.push(ItemsPage, {category: item});
  }

}
