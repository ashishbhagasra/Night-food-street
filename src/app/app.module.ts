import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { BLEScan } from './app.component';

import { UsersPage } from '../pages/users/users';
import { ReposPage } from '../pages/repos/repos';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { OrganisationsPage } from '../pages/organisations/organisations';
import {AddressPage} from '../pages/address/address';
import {CheckoutPage} from '../pages/checkout/checkout';
import { HomePage } from '../pages/home/home';
import { ItemsPage } from '../pages/items/items';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Geolocation } from '@ionic-native/geolocation';
import { BLE } from '@ionic-native/BLE';

import { GithubUsers  } from '../providers/github-users/github-users';

@NgModule({
  declarations: [
    BLEScan,
    UsersPage,
    ReposPage,
    OrganisationsPage,
    ItemDetailsPage,
    AddressPage,
    CheckoutPage,
    HomePage,
    ItemsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(BLEScan),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    BLEScan,
    UsersPage,
    ReposPage,
    OrganisationsPage,
    ItemDetailsPage,
    AddressPage,
    CheckoutPage,
    HomePage,
    ItemsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GithubUsers,
    Geolocation,
    BLE
  ]
})
export class AppModule {}
