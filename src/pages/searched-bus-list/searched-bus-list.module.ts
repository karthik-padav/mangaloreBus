import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchedBusListPage } from './searched-bus-list';

@NgModule({
  declarations: [
    SearchedBusListPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchedBusListPage),
  ],
})
export class SearchedBusListPageModule {}
