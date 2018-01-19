import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FindBusPage } from './find-bus';

@NgModule({
  declarations: [
    FindBusPage,
  ],
  imports: [
    IonicPageModule.forChild(FindBusPage),
  ],
})
export class FindBusPageModule {}
