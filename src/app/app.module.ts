import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';

import { AboutPage } from '../pages/about/about';
import { TabsPage } from '../pages/tabs/tabs';
import { BusListPage } from '../pages/bus-list/bus-list';
import { FindBusPage } from '../pages/find-bus/find-bus';
import { BusDetailsPage } from '../pages/bus-details/bus-details';
import { SearchedBusListPage } from '../pages/searched-bus-list/searched-bus-list';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    FindBusPage,
    BusListPage,
    TabsPage,
    BusDetailsPage,
    SearchedBusListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    FindBusPage,
    BusListPage,
    TabsPage,
    BusDetailsPage,
    SearchedBusListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
