import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import {CheckoutPage} from '../checkout/checkout';
/**
 * Generated class for the AddressPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-address',
  templateUrl: 'address.html',
})
export class AddressPage {
  selectedItem : any;
  user: any={};
  address: any[];
  selectedAddress : any;
  newAddress: FormGroup;
  isNewAddress: boolean = true;
  mobile: number;
  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder) {
    this.selectedItem = navParams.get('order');
    this.address = [
      { FlatNo: 101, Apartment: 'ABC', StreetName: 'StreetName', Sector: 'Sector', City: 'City', IsSelected : false}
    ];
    this.newAddress = this.formBuilder.group({
      FlatNo: ['', Validators.required],
      Apartment : ['', Validators.required],
      StreetName : ['', Validators.required],
      Sector : ['', Validators.required],
      City : ['', Validators.required]
      });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddressPage');
  }
  SaveUserContact(){
    this.user.contact = this.mobile;
  }

  SubmitAddress(){
    console.log(this.newAddress.value);
    this.isNewAddress = !this.isNewAddress;
    this.newAddress.value.IsSelected = true;
    for(var i = 0 ; i < this.address.length; i++){ this.address[i].IsSelected = false};
    this.address.push(this.newAddress.value);
    this.selectedAddress = this.newAddress.value;

    this.newAddress = this.formBuilder.group({
      FlatNo: ['', Validators.required],
      Apartment : ['', Validators.required],
      StreetName : ['', Validators.required],
      Sector : ['', Validators.required],
      City : ['', Validators.required]
      });
  }

  AddAddress(){
    this.isNewAddress = !this.isNewAddress;

  }

  CheckOut(){
    this.user.address = this.SelectAddress;
    this.user.order = this.selectedItem;
    this.navCtrl.push(CheckoutPage, { userCheckOut: this.user});
  }

  SelectAddress(item, index){
    this.selectedAddress = item;
    for(var i = 0 ; i < this.address.length; i++){ this.address[i].IsSelected = false};
    this.address[index].IsSelected = true;
  }

}
