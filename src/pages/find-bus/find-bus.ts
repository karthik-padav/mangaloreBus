import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { SearchedBusListPage } from '../searched-bus-list/searched-bus-list';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/**
 * Generated class for the FindBusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-find-bus',
  templateUrl: 'find-bus.html',
})
export class FindBusPage {

  busData:any="";
  routes:any=[];
  loading:any;
  filterdRoutes:any=[];
  busForSelectedPlace:any=[];
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public http:Http,
              public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FindBusPage');
    this.getBusList();
  }

  loadBus(){
    this.presentLoadingDefault();
    return new Promise( (resolve, reject) => {
        this.http.get('assets/data/mangaloreRoute.json').map(res=>res.json())
        .subscribe(
            data => {
              resolve(data);
              this.loading.dismiss();
            },
            err => { 
                reject(err);
            });
        });
    }

    getBusList(){
      this.loadBus()
      .then( data => {
          //process data
          this.busData = data;
          console.log(this.busData);
          for(let i=0; i<this.busData.length; i++){
            this.routes = this.routes.concat(this.busData[i].ViaRoute);
          }
          this.routes = Array.from( new Set(this.routes)).sort();
          this.filterdRoutes = this.routes;
          console.log(this.routes.length);
      })
      .catch( error => {
          //some error here
          console.log('error');
      })
  }

  selectedPlace(selectedPlace){
    this.busForSelectedPlace = [];
    for(let i=0; i<this.busData.length; i++){
      for(let j=0; j<this.busData[i].ViaRoute.length; j++){
        if(selectedPlace == this.busData[i].ViaRoute[j]){
          this.busForSelectedPlace.push(this.busData[i]);
        }
      }
    }
    console.log(this.busForSelectedPlace);
    this.navCtrl.push(SearchedBusListPage,{
      data:this.busForSelectedPlace,
      place: selectedPlace
    })
  }

  getItems(ev: any) {
    this.filterdRoutes = this.routes;
    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.filterdRoutes = this.routes.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  presentLoadingDefault() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    this.loading.present();
  }
  

}

