import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { BusDetailsPage } from '../bus-details/bus-details';


import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/**
 * Generated class for the BusListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bus-list',
  templateUrl: 'bus-list.html',
})
export class BusListPage {
  loading: any;
  busData:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http:Http,
    public loadingCtrl: LoadingController) {
    this.presentLoadingDefault();
    this.http.get('assets/data/mangaloreRoute.json').map(res => res.json()).subscribe(data => {
        this.busData = data;
        console.log(this.busData);
        this.loading.dismiss();
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BusListPage');
  }

  busDetails(data){
    this.navCtrl.push(BusDetailsPage, {
      data: data
    });
  }

  presentLoadingDefault() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    this.loading.present();
  }

}
