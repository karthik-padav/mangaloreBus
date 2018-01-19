import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BusDetailsPage } from './bus-details';

@NgModule({
  declarations: [
    BusDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(BusDetailsPage),
  ],
})
export class BusDetailsPageModule {}
