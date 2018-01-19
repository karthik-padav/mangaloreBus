import { Component } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { AboutPage } from '../about/about';
import { BusListPage } from '../bus-list/bus-list';
import { FindBusPage } from '../find-bus/find-bus';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = BusListPage;
  tab2Root = FindBusPage;
  tab3Root = AboutPage;
  posts:any;
  constructor(public http:Http) {
  }
}
