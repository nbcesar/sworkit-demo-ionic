import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EndWorkoutPage } from './end-workout';

@NgModule({
  declarations: [
    EndWorkoutPage,
  ],
  imports: [
    IonicPageModule.forChild(EndWorkoutPage),
  ],
  exports: [
    EndWorkoutPage
  ]
})
export class EndWorkoutPageModule {}
