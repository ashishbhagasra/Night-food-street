import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Nfs } from './app.component';


import { ItemDetailsPage } from '../pages/item-details/item-details';
import {AddressPage} from '../pages/address/address';
import {CheckoutPage} from '../pages/checkout/checkout';
import { HomePage } from '../pages/home/home';
import { ItemsPage } from '../pages/items/items';
import { UserOrdersPage} from '../pages/user-orders/user-orders';
import {OrderDetailsPage} from '../pages/order-details/order-details';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Geolocation } from '@ionic-native/geolocation';

import { GithubUsers  } from '../providers/github-users/github-users';

@NgModule({
  declarations: [
    Nfs,
    ItemDetailsPage,
    AddressPage,
    CheckoutPage,
    HomePage,
    ItemsPage,
    UserOrdersPage,
    OrderDetailsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(Nfs),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    Nfs,
    ItemDetailsPage,
    AddressPage,
    CheckoutPage,
    HomePage,
    ItemsPage,
    UserOrdersPage,
    OrderDetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GithubUsers,
    Geolocation
  ]
})
export class AppModule {}
