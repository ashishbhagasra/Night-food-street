import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { BLE } from '@ionic-native/BLE';


@Component({
  selector: 'page-repos',
  templateUrl: 'repos.html'
})
export class ReposPage {
  devices: any=[];
  isScanning : boolean;

  constructor(public navCtrl: NavController, public ble:BLE, public alertCtrl: AlertController) {
    this.devices = [];
    this.isScanning = false;

    this.ble.isEnabled().then(()=>
    {
        console.log("Bluetooth is enabled");
    },
    ()=> {
        console.log("Bluetooth is *not* enabled");
        this.ble.enable().then(
          function() {
              console.log("Bluetooth is enabled by user");
          },
          function() {
              console.log("User denied access");
          }
        );
    }
  );
  }

  ionViewDidLoad() {
    console.log('Hello Repos Page');
  }

  StartScanning(){
    console.log("Scanning started!");
    this.devices = [];
    this.isScanning = true;
    this.ble.startScan([]).subscribe(device => {
      this.devices.push(device);
    });

    setTimeout(() => {
        this.ble.stopScan().then(() => {
        console.log("Scanning has stopped");
        console.log(JSON.stringify(this.devices))
        this.isScanning = false;
        for(var i =0; i< this.devices.length; i++){
          var adData = new Uint8Array(this.devices[i].advertising);
          let hex = (Array.prototype.map.call(adData, x => ('00' + x.toString(16)).slice(-2)).join('')).toString(16);
          this.devices[i].hex = hex;

          this.devices[i].month = parseInt( hex.substring(46, 48), 16);
          this.devices[i].day = parseInt( hex.substring(48, 50), 16);
          this.devices[i].hour = parseInt( hex.substring(50, 52), 16);
          this.devices[i].minutes = parseInt( hex.substring(52, 54), 16);
          this.devices[i].seconds = parseInt( hex.substring(54, 56), 16);
          this.devices[i].year = parseInt( hex.substring(42, 46), 16);
          this.devices[i].kWh = parseInt( hex.substring(52, 58), 16);
          this.devices[i].ActivePower = parseInt( hex.substring(58, 62), 16);
        }

      });
    }, 3000);
  }

  ConnectToDevice(device){
    console.log("Connect to Device");
    console.log(JSON.stringify(device));
    var adData = new Uint8Array(device.advertising);
    let hex = (Array.prototype.map.call(adData, x => ('00' + x.toString(16)).slice(-2)).join('')).toString(16);
    hex = hex.split('').map(function (char) {
        return char.charCodeAt(0).toString(2);
    }).join(' ');

    let alert = this.alertCtrl.create({
      title: device.id,
      subTitle: JSON.stringify(hex),
      buttons: ['OK']
    });
    alert.present();
  }
}
