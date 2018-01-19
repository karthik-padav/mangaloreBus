import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BusDetailsPage } from '../bus-details/bus-details';

/**
 * Generated class for the SearchedBusListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-searched-bus-list',
  templateUrl: 'searched-bus-list.html',
})
export class SearchedBusListPage {
  busList:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.navParams.get('listOfbuses');
    this.busList = this.navParams.data;
    console.log(this.navParams)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchedBusListPage');
    console.log(this.busList);
  }

  busDetails(data){
    this.navCtrl.push(BusDetailsPage, {
      data: data
    });
  }
}
