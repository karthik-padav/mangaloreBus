import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BusDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bus-details',
  templateUrl: 'bus-details.html',
})
export class BusDetailsPage {
  busDetails:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.navParams.get('busDetails');
    this.busDetails = this.navParams.data.data;
    console.log(this.busDetails);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BusDetailsPage');
    console.log(this.navParams.data.data);
  }

}
